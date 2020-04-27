import {
  Body,
  ConflictException,
  Controller,
  Get,
  Post,
  UnauthorizedException
} from "@nestjs/common";
import {User} from "../../../../shared/user";
import {UsersRepository} from "../repositories/users.repository";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import * as password from 'password-hash-and-salt';
import * as jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../../constants';
import {rejects} from "assert";


@Controller("users")
export class UsersController {
  constructor(@InjectModel('User') private userModel: Model, private usersDB: UsersRepository) {
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

    console.log(user);

    return new Promise((resolve, reject) => {
      password(plainTextPassword).verifyAgainst(
        user.passwordHash,
        (err, verified) => {

          if(!verified){
            reject(new UnauthorizedException('nesouhlasiHeslo'));
          }

          const authJwtToken = this.createToken(user);
          resolve({token: authJwtToken})

        }
      )
    })
  }

  @Post()
  async createUser(@Body() user: {email: string, password: string}): Promise<any> {
    console.log(user);
    if (await this.usersDB.emailExists(user.email))
      throw new ConflictException('Uzivatel existuje');

    let pass = await this.createHashPassword(user.password)

    let newUser = await this.usersDB.addUser(user.email, pass);
    if (newUser) {
      const authToken = await this.createToken(newUser);
      return {token: authToken};
    }
  }

  private async createToken(user: User): Promise<string> {
    const authJwtToken = jwt.sign({email: user.email}, JWT_SECRET);
    if (await this.usersDB.updateUser(user._id, {token: authJwtToken})) {
      return authJwtToken;
    }
  }


  private async createHashPassword(passwordPlainText: string): Promise<string> {
    return new Promise((resolve, reject) => {
      password(passwordPlainText).hash(
        (err, hash) => {
          if (err) {
            reject(new Error('Nepodařilo se vytvořit heslo'))
          }
          resolve(hash)
        }
      )
    })
  }

}
