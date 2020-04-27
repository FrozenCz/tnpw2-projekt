import {IsEmail, IsMongoId, IsString} from "class-validator";

/**
 * jedna se o bezneho uzivatele
 */

export class User {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  passwordHash: string;
  token: string;


  constructor(id: string, email: string, passwordHash: string, token: string) {
    this._id = id;
    this.email = email;
    this.passwordHash = passwordHash;
    this.token = token;
  }


}
