/**
 * jedna se o bezneho uzivatele
 */
export class UserModel{
  private _id: number;
  private _email: string;
  private _token: string;
  private _overen: boolean;

  constructor(id: number, email: string, token: string, overen: boolean) {
    this._id = id;
    this._email = email;
    this._token = token;
    this._overen = overen;
  }


  get id(): number {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get token(): string {
    return this._token;
  }

  get overen(): boolean {
    return this._overen;
  }
}
