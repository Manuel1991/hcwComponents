import { Component, h } from "@stencil/core";

@Component({
    tag:'hcw-informe-internados',
    styleUrl: './hcw-informe-internados.css',
    shadow: true
})
export class InformeInternados {
    render() {
        return[
            <div class="container">
                <div class="head">
                    <h3>INFORME DE INTERNADOS</h3>

                    <div class="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30.849" height="30.848" viewBox="0 0 30.849 30.848" class="searchIcon">
                            <path id="Icon_metro-search" data-name="Icon metro-search" d="M32.463,28.179l-7.307-6.215A3.261,3.261,0,0,0,22.94,21,11.57,11.57,0,1,0,21.645,22.3a3.261,3.261,0,0,0,.962,2.216l6.215,7.307a2.592,2.592,0,1,0,3.641-3.641ZM14.139,21.208A7.712,7.712,0,1,1,21.851,13.5a7.712,7.712,0,0,1-7.712,7.712Z" transform="translate(-2.571 -1.928)" fill="#5e94fa"/>
                        </svg>
                        <input type="text"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65.05" height="45" viewBox="0 0 65.05 45" class="filterIcon">
                            <g id="Grupo_9348" data-name="Grupo 9348" transform="translate(-707.5 -198)">
                                <line id="Línea_36" data-name="Línea 36" x2="25.942" transform="translate(707.5 205.163)" fill="none" stroke="#6094f9" stroke-width="4"/>
                                <g id="Elipse_421" data-name="Elipse 421" transform="translate(733 198)" fill="none" stroke="#6094f9" stroke-width="4">
                                <circle cx="7" cy="7" r="7" stroke="none"/>
                                <circle cx="7" cy="7" r="5" fill="none"/>
                                </g>
                                <line id="Línea_37" data-name="Línea 37" x2="25.942" transform="translate(746.607 205.163)" fill="none" stroke="#6094f9" stroke-width="4"/>
                                <line id="Línea_36-2" data-name="Línea 36" x2="9.68" transform="translate(707.5 220.264)" fill="none" stroke="#6094f9" stroke-width="4"/>
                                <g id="Elipse_421-2" data-name="Elipse 421" transform="translate(717 213)" fill="none" stroke="#6094f9" stroke-width="4">
                                <circle cx="7" cy="7" r="7" stroke="none"/>
                                <circle cx="7" cy="7" r="5" fill="none"/>
                                </g>
                                <line id="Línea_37-2" data-name="Línea 37" x2="41.818" transform="translate(730.732 220.264)" fill="none" stroke="#6094f9" stroke-width="4"/>
                                <line id="Línea_36-3" data-name="Línea 36" x2="34.074" transform="translate(707.5 235.365)" fill="none" stroke="#6094f9" stroke-width="4"/>
                                <g id="Elipse_421-3" data-name="Elipse 421" transform="translate(741 228)" fill="none" stroke="#6094f9" stroke-width="4">
                                <circle cx="7.5" cy="7.5" r="7.5" stroke="none"/>
                                <circle cx="7.5" cy="7.5" r="5.5" fill="none"/>
                                </g>
                                <line id="Línea_37-3" data-name="Línea 37" x2="17.037" transform="translate(755.513 235.365)" fill="none" stroke="#6094f9" stroke-width="4"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div class="body">
                    <div class="card-internado">
                            <div class="row head" id="head">
                                <p><strong>EDUARDO MANUEL MILLER MARTINEZ</strong></p>
                                <p>Quirofano</p>
                            </div>
                            <div class="row firstLine">
                                <p><strong>DNI</strong> 11522478</p>
                                <p><strong>Ingreso</strong> 17/05/2020</p>
                            </div>
                            <div class="row secondLine">
                            <p><strong>Edad</strong> 11522478</p>
                            <p><strong>Egreso</strong> 17/05/2020</p>   
                            <p><strong>Dias Internado</strong> 63</p>   
                            </div>
                    </div>
                </div>
            </div>
        ]
    }
}