import {h, Component } from "@stencil/core";


@Component({
    tag: 'hcw-cama',
    styleUrl: './hcw-cama.css',
    shadow: true
})
export class HCWBCama {
    render() {
        return [
            <div class="container">
                <div class="head">
                    <div class="piso">
                         <h3>1° Piso</h3>
                    </div>
                    <h2>EDUARDO MANUEL MILLER MARTINEZ</h2>
                </div>
                <div class="body">
                    <p class="cama"><strong>CAMA</strong> <br/>100A </p>
                    <p class="data ingreso"><strong>Ingreso</strong> <br/>17/05/2020</p>
                    <p class="data edad "><strong>Edad</strong> <br/>63</p>
                    <p class="data dni"><strong>DNI</strong> <br/>11522475</p>
                </div>
            </div>
        ]

    }
}