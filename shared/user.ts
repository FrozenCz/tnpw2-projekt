import {IsMongoId, IsString} from "class-validator";

/**
 * jedna se o bezneho uzivatele
 */

export class User{
  @IsString()
  @IsMongoId()
  private _id: number;
  private _email: string;



  constructor(id: number, email: string) {
    this._id = id;
    this._email = email;
  }


  get id(): number {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

}
