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

  tokens: string[];


  constructor(id: string, email: string, passwordHash: string, tokens: string[]) {
    this._id = id;
    this.email = email;
    this.passwordHash = passwordHash;
    this.tokens = tokens;
  }


}
