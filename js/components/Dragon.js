export const Dragontitle = async (info) => {
    const titleElement = document.querySelector("#title");
    if (!titleElement) {
        console.error("#title not found");
        return;
    }
    titleElement.innerHTML = info.name;
}


export const DragonInfo = async (descrip) => {
    const izquierdaElement = document.querySelector("#izquierda");
    if (!izquierdaElement) {
        console.error("#izquierda not found");
        return;
    }

    izquierdaElement.innerHTML = /*html*/`
        <p>HEAT_SHIELD</p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                material
            </div>
            <div id="info" class="info">
                ${descrip.heat_shield.material}
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                size_meters
                </div>
                <div id = "info" class ="info">
                ${descrip.heat_shield.size_meters }
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                temp_degrees
                </div>
                <div id = "info" class ="info">
                ${descrip.heat_shield.temp_degrees}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                dev_partner
                </div>
                <div id = "info" class ="info">
                ${descrip.heat_shield.dev_partner}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                size_meters
                </div>
                <div id = "info" class ="info">
                ${descrip.heat_shield.size_meters}
                </div>
            </div>
        </div>
        <div class="gauge__bodyDragon">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__textDragon">launch_payload_mass</div>
                <div class="gauge__valueDragon">${descrip.launch_payload_mass.kg}KG</div>
            </div>
        </div> 
        <div class="gauge__bodyDragon">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__textDragon">launch_payload_mass</div>
                <div class="gauge__valueDragon">${descrip.launch_payload_mass.lb}LB</div>
            </div>
        </div> 
        <div class="gauge__bodyDragon">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__textDragon">cubic_meters</div>
                <div class="gauge__valueDragon">${descrip.trunk.trunk_volume.cubic_meters}MTRS</div>
            </div>
        </div>
    `;

    const derechaElement = document.querySelector("#derecha");
    if (!derechaElement) {
        console.error("#derecha not found");
        return;
    }

    derechaElement.innerHTML = /*html*/`
        <p>THRUSTERS</p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                Type
            </div>
            <div id="info" class="info">
                ${descrip.thrusters.type}
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                amount
                </div>
                <div id = "info" class ="info">
                ${descrip.thrusters.amount}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                pods
                </div>
                <div id = "info" class ="info">
                ${descrip.thrusters.pods}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                fuel_1
                </div>
                <div id = "info" class ="info">
                ${descrip.thrusters.fuel_1}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                fuel_2
                </div>
                <div id = "info" class ="info">
                ${descrip.thrusters.fuel_2}
                </div>
            </div>
        </div>
        <section id="izquierda" class="left-dragon">
            <div class="status normal">🧐 DESCRIPTION 🧐</div>
            <div class="system-check">${descrip.description}</div>
        </section>
    `;

    const metricsElement = document.querySelector("#metrics");
    if (!metricsElement) {
        console.error("#metrics not found");
        return;
    }

    metricsElement.innerHTML = /*html*/`
      
        <div class="metric">
            <div class="metric-title">active</div> 
            <div class="metric-value">${descrip.active}</div>
        </div>
        <div class="metric">
            <div class="metric-title">wikipedia</div>
            <div class="metric-value">
                <a href="${descrip.wikipedia}" target="_blank">${descrip.wikipedia}</a>
            </div>
        </div>
        <div class="metric">
            <div class="metric-title">type</div> 
            <div class="metric-value">${descrip.type}</div>
        </div>

    `;
}

export const plusInfoRocket3I = async (plusInfo) => {
    const img = async () => {
        let plantilla = '';
        plusInfo.flickr_images.forEach((element, index) => {
            plantilla += /*html*/`
                <div class="carousel">
                    <img src="${element}" referrerpolicy="no-referrer" alt="Roadster Image ${index + 1}">
                </div>
            `;
        });
        return plantilla;
    }

    const imagenElement = document.querySelector("#imagen");
    if (!imagenElement) {
        console.error("#imagen not found");
        return;
    }

    imagenElement.innerHTML = await img();
}

