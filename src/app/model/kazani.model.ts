/**
 * trida reprezentujici jedno kazani
 */
export class kazaniModel {
  nazev: string;
  link: string;
  datum: Date;

  constructor(nazev: string, link: string, datum: Date) {
    this.nazev = nazev;
    this.link = link;
    this.datum = datum;
  }

}
