/**
 * trida zastupujici osobu odpovidajici za pohyb majetku
 */
export class KontistaModel {
  private id: string;
  private jmeno: string;
  private prijmeni: string;
  private fotografie: string;
  private barva: string;

  constructor(id: string, jmeno: string, prijmeni: string, fotografie: string, barva: string) {
    this.id = id;
    this.jmeno = jmeno;
    this.prijmeni = prijmeni;
    this.fotografie = fotografie;
    this.barva = barva;
  }
}
