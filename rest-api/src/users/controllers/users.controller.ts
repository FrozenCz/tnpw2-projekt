import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Post, Request,
  UnauthorizedException,
  UseGuards
} from "@nestjs/common";
import {User} from "../../../../shared/user";
import {UsersRepository} from "../repositories/users.repository";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import * as password from 'password-hash-and-salt';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import {JWT_SECRET} from '../../constants';
import {AuthenticationGuard} from '../../guards/authentication.guard';
import {RecipesRepository} from '../../recipes/repositories/recipes.repository';



@Controller("users")
export class UsersController {
  constructor(@InjectModel('User') private userModel: Model, private usersDB: UsersRepository, private recipeDB: RecipesRepository) {
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersDB.findAll()
  }

  @Post("login")
  async loginUser(@Body("email") email: string, @Body("password") plainTextPassword: string){
    const user = await this.usersDB.findOne({email: email})

    if(!user)
      return new UnauthorizedException('Uzivatel s timto emailem neexistuje');

    if(!bcrypt.compareSync(plainTextPassword, user.passwordHash))
      return new UnauthorizedException("Spatne heslo");

    const authJwtToken = await this.createToken(user, true);
    return {token: authJwtToken};
  }

  @Post()
  async createUser(@Body() user: {email: string, password: string}): Promise<any> {
    if (await this.usersDB.emailExists(user.email))
      throw new ConflictException('Uzivatel existuje');

    let pass = this.createHash(user.password);

    let newUser = await this.usersDB.addUser(user.email, pass);
    if (newUser) {
      const authToken = await this.createToken(newUser, false);
      return {token: authToken};
    }
  }



  @Delete(":userId")
  @UseGuards(AuthenticationGuard)
  async deleteUser(@Param("userId") userId: string) {
     await this.recipeDB.deleteAllFromUser(userId);
     return this.usersDB.removeUser(userId);
  }


  private async createToken(user: User, fromLogin: boolean): Promise<string> {
    let userModified = user;
    if(fromLogin) userModified = user['_doc'];

    let {passwordHash, token, ...sanitizedUser} = userModified;
    const authJwtToken = jwt.sign(sanitizedUser, JWT_SECRET);
    if (await this.usersDB.updateUser(user._id, {token: authJwtToken})) {
      return authJwtToken;
    }
  }

  private createHash(pass: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(pass, salt);
  }

}
