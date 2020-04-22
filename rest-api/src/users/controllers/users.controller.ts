import {Body, Controller, Get, Post} from "@nestjs/common";


@Controller("users")
export class UsersController{

  @Get()
  async getUsers() {
    return "uzivatele a watch";
  }

  @Post()
  async addUser(@Body() user) {
    console.log("creating user");
    return user;
  }

}
