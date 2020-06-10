import { h, Component, Prop, Element, Event, EventEmitter, Method } from "@stencil/core";
import { Cama } from "./cama";

@Component({
  tag: 'hcw-cama',
  styleUrl: './hcw-cama.css',
  shadow: true
})

export class HCWBCama {

  @Prop() camas: Array<Cama>;
  @Element() element: HTMLElement;
  @Event() change: EventEmitter<object>;
  @Event() load: EventEmitter<object>;
  @Event() error: EventEmitter<string>;

  constructor() {
    this.camas = [];
  }

  @Method()
  refresh({ IdPrestador = 0, IdInstitucion = 0 }) {
    let self = this;
    fetch(`http://localhost:3001/eag_node/instituciones/${IdInstitucion}/internados?desde=20200601&hasta=20210101&estado=1`).then(response => {
      return response.ok ?
        response.json() :
        Promise.reject(response.statusText);
    }).then(internados => {
      self.camas = internados;
      self.load.emit();
    }).catch(reason => {
      console.error(reason);
      self.error.emit(reason);
    });
  }

  select(cama: Cama) {
    this.change.emit(cama);
  }

  @Method()
  init({ IdPrestador = 0, IdInstitucion = 0 }) {
    this.refresh({ IdPrestador, IdInstitucion });
  }

  render() {
    let self = this;
    let camas = this.camas.map((cama: Cama) => {
      return <div class="container" onClick={() => { self.select(cama); }}>
        <div class="head">
          <div class="piso">
            <h3>{cama.TipoInternacion}</h3>
          </div>
          <h2>{cama.Nombre + " " + cama.Apellido}</h2>
        </div>
        <div class="body">
          <p class="cama"><strong>CAMA</strong><br />{cama.NumeroCama}</p>
          <p class="data ingreso"><strong>Ingreso</strong><br />{cama.FechaIngreso.split("-").reverse().join("-")}</p>
          <p class="data edad "><strong>Edad</strong> <br />{cama.Edad}</p>
          <p class="data dni"><strong>DNI</strong> <br />{cama.Documento}</p>
        </div>
      </div>
    });
    return camas;
  }
}
