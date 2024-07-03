export const payloadsTitle = async (info) => {
    // Validación para asegurar que info.name no sea null o undefined
    const name = info.name !== null && info.name !== undefined ? info.name : 'data en actualizacion';
    document.querySelector("#title").innerHTML = name;
}

export const infoPayloads = async (descrip) => {
    // Función para verificar y reemplazar valores nulos o indefinidos
    const checkNullOrUndefined = (value) => {
        return value !== null && value !== undefined ? value : 'data en actualizacion';
    };

    // Aplicar la validación a cada propiedad de descrip
    descrip.type = checkNullOrUndefined(descrip.type);
    descrip.reused = checkNullOrUndefined(descrip.reused);
    descrip.customers = checkNullOrUndefined(descrip.customers);
    descrip.norad_ids = checkNullOrUndefined(descrip.norad_ids);
    descrip.semi_major_axis_km = checkNullOrUndefined(descrip.semi_major_axis_km);
    descrip.lifespan_years = checkNullOrUndefined(descrip.lifespan_years);
    descrip.eccentricity = checkNullOrUndefined(descrip.eccentricity);
    descrip.periapsis_km = checkNullOrUndefined(descrip.periapsis_km);
    descrip.inclination_deg = checkNullOrUndefined(descrip.inclination_deg);
    descrip.mass_kg = checkNullOrUndefined(descrip.mass_kg);
    descrip.mass_lbs = checkNullOrUndefined(descrip.mass_lbs);
    descrip.orbit = checkNullOrUndefined(descrip.orbit);
    descrip.reference_system = checkNullOrUndefined(descrip.reference_system);
    descrip.regime = checkNullOrUndefined(descrip.regime);

    // Actualizar el HTML con los datos validados
    document.querySelector("#metrics").innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">type</div> 
            <div class="metric-value">${descrip.type}</div>
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
            <div id="info" class="info">
                ${descrip.semi_major_axis_km}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                lifespan_years
            </div>
            <div id="info" class="info">
                ${descrip.lifespan_years}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                eccentricity
            </div>
            <div id="info" class="info">
                ${descrip.eccentricity}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                periapsis_km
            </div>
            <div id="info" class="info">
                ${descrip.periapsis_km}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                inclination_deg
            </div>
            <div id="info" class="info">
                ${descrip.inclination_deg}
            </div>
        </div>
    `;

    document.querySelector("#izquierda").innerHTML = /*html*/`
        <p>Payloads</p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                mass_kg
            </div>
            <div id="info" class="info">
                ${descrip.mass_kg}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                mass_lbs
            </div>
            <div id="info" class="info">
                ${descrip.mass_lbs}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                orbit
            </div>
            <div id="info" class="info">
                ${descrip.orbit}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                reference_system
            </div>
            <div id="info" class="info">
                ${descrip.reference_system}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                regime
            </div>
            <div id="info" class="info">
                ${descrip.regime}
            </div>
        </div>
    `;
};
