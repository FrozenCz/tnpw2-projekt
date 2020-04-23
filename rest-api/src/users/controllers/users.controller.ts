import {BadRequestException, Body, ConflictException, Controller, Get, Post} from "@nestjs/common";
import {User} from "../../../../shared/user";
import * as mongoose from 'mongoose';
import * as password from 'password-hash-and-salt';
import {catchError} from "rxjs/operators";
import {UsersRepository} from "../repositories/users.repository";

interface UserToCreate {
  email,
  password: string
}

@Controller("users")
export class UsersController {
  constructor(private usersDB: UsersRepository) {
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersDB.findAll();
  }

  @Post()
  async createUser(@Body() user: UserToCreate) {
    return new Promise((resolve, reject) => {
        this.checkIfUserExist(user.email).then(
          (exist) => {
            if (exist) {
              reject(new ConflictException("Uživatel s tímto emailem existuje"));
              return;
            }

            this.createHashPassword(user.password).then(
              (passHash: string) => {
                console.log("creating user");
                this.usersDB.addUser(user.email, passHash).then(
                  (uzivatel) => {
                    resolve("coto");
                  }
                )
              }
            )
          }
        ).catch(
          (err) => {
            reject(new Error(err));
          }
        )
      }
    )
  }

  private createHashPassword(passwordPlainText: string): Promise<string>{
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

  private checkIfUserExist(email: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        this.getUsers().then(
          users => {
            resolve(users.some(u => u.email === email))
          }
        ).catch(
          err => {
            reject(err);
          }
        )
      }
    )
  }
}
