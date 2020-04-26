import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Get,
  Post,
  RequestTimeoutException
} from "@nestjs/common";
import {User} from "../../../../shared/user";
import {UsersRepository} from "../repositories/users.repository";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import * as password from 'password-hash-and-salt';
import * as jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../../constants';

interface UserToCreate {
  email,
  password: string
}

@Controller("users")
export class UsersController {
  constructor(@InjectModel('User') private userModel: Model, private usersDB: UsersRepository) {
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  @Post()
  async createUser(@Body() user: UserToCreate): Promise<any> {
    if (await this.userModel.findOne({email: user.email}))
      throw new ConflictException('Uzivatel existuje');
    let newUser = await this.usersDB.addUser(user.email, await this.createHashPassword(user.password))
    if (newUser) {
      const authToken = await this.createToken(newUser);
      return {token: authToken};
    }
  }

  private async createToken(user: User): Promise<string> {
    const authJwtToken = jwt.sign({email: user.email}, JWT_SECRET);
    let tokens = user.tokens;
    tokens.push(authJwtToken);
    if (await this.usersDB.updateUser(user._id, {tokens: tokens})) {
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
