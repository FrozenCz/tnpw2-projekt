/**
 * jedna se o bezneho uzivatele
 */
export class UzivatelModel{
  private id: number;
  private email: string;
  private token: string;
  private overen: boolean;

  constructor(id: number, email: string, token: string, overen: boolean) {
    this.id = id;
    this.email = email;
    this.token = token;
    this.overen = overen;
  }
}
