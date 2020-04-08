/**
 * jedna se o bezneho uzivatele
 */
export class UserModel{
  private id: number;
  email: string;
  token: string;
  private overen: boolean;

  constructor(id: number, email: string, token: string, overen: boolean) {
    this.id = id;
    this.email = email;
    this.token = token;
    this.overen = overen;
  }
}
