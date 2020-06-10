
export class Cama {
  Documento: string;
  Nombre: string;
  Apellido: string;
  Edad: number;

  IdCama: number;
  NumeroCama: string;

  IdTipoInternacion: number;
  TipoInternacion: string;

  FechaIngreso: string;
  FechaAlta: string;

  constructor({ Documento = "", Nombre = "", Apellido = "", Edad = 0, IdTipoInternacion = 0, TipoInternacion = "", IdCama = 0, NumeroCama = "", FechaIngreso = "", FechaAlta = "" }) {
    this.Documento = Documento;
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Edad = Edad;

    this.IdCama = IdCama
    this.NumeroCama = NumeroCama;

    this.IdTipoInternacion = IdTipoInternacion;
    this.TipoInternacion = TipoInternacion;

    this.FechaIngreso = FechaIngreso;
    this.FechaAlta = FechaAlta;
  }
}
