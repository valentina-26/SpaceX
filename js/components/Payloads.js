export const payloadsTitle = async (info) =>{
    document.querySelector("#title").innerHTML = info.name;
}


export const infoPayloads = async (descrip) =>{
    document.querySelector("#metrics").innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">type</div> 
            <div class="metric-value"> ${descrip.type}</div>
        </div>
        <div class="metric">
            <div class="metric-title">reused</div> 
            <div class="metric-value">${descrip.reused}</div>
        </div>
        <div class="metric">
            <div class="metric-title">customers</div> 
            <div class="metric-value">${descrip.customers}</div>
        </div>
        <div class="metric">
            <div class="metric-title">norad_ids</div> 
            <div class="metric-value">${descrip.norad_ids}</div>
        </div>
        <div class="elonpay">
        <img src="storage/img/payloads.jpeg">  
        </div>
        <div class="elonpay">
        <img src="storage/img/payloadgif.gif">  
        </div>
        `;
        document.querySelector("#derecha").innerHTML = /*html*/`
        <p>Payloads</p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                semi_major_axis_km
                </div>
                <div id = "info" class ="info">
                ${descrip.semi_major_axis_km}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                lifespan_years
                </div>
                <div id = "info" class ="info">
                ${descrip.lifespan_years}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                eccentricity
                </div>
                <div id = "info" class ="info">
                ${descrip.eccentricity}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                periapsis_km
                </div>
                <div id = "info" class ="info">
                ${descrip.periapsis_km}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                inclination_deg
                </div>
                <div id = "info" class ="info">
                ${descrip.inclination_deg}
                </div>
            </div>
        </div>`
        ;
        document.querySelector("#izquierda").innerHTML = /*html*/`
        <p>Payloads</p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                mass_kg
                </div>
                <div id = "info" class ="info">
                ${descrip.mass_kg}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                mass_lbs
                </div>
                <div id = "info" class ="info">
                ${descrip.mass_lbs}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                orbit
                </div>
                <div id = "info" class ="info">
                ${descrip.orbit}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                reference_system
                </div>
                <div id = "info" class ="info">
                ${descrip.reference_system}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                regime
                </div>
                <div id = "info" class ="info">
                ${descrip.regime}
                </div>
            </div>
        </div>`
        ;
}