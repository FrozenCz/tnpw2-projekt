export class ChvalaModel {
  private _id: number;
  private _nazev: string;
  private _url: string;


  constructor(id: number, nazev: string, url: string) {
    this._id = id;
    this._nazev = nazev;
    this._url = url;
  }


  get id(): number {
    return this._id;
  }

  get nazev(): string {
    return this._nazev;
  }

  get url(): string {
    return this._url;
  }
}
