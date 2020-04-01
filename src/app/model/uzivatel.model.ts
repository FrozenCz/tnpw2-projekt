import {KontistaModel} from './kontista.model';

/**
 * jedna se o bezneho uzivatele
 */
export class UzivatelModel{
  private id: number;
  private jmeno: string;
  private prijmeni: string;
  private foto: string;
  private telefon: string;
  private kontista: KontistaModel;

  constructor(id: number, jmeno: string, prijmeni: string, foto: string, telefon: string, kontista: KontistaModel) {
    this.id = id;
    this.jmeno = jmeno;
    this.prijmeni = prijmeni;
    this.foto = foto;
    this.telefon = telefon;
    this.kontista = kontista;
  }
}
