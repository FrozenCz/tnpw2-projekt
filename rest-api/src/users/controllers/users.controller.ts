import {Body, Controller, Get, Post} from "@nestjs/common";
import {UserModel} from "../../../../shared/userModel";


@Controller("users")
export class UsersController{

  @Get()
  async getUsers() {
    const user: UserModel = new UserModel(5, 'test@tesa.sta');
    return user;
  }

  @Post()
  async addUser(@Body() user) {
    console.log("creating user");
    const userR: UserModel = new UserModel(5, user.email);
    return userR;
  }

}
