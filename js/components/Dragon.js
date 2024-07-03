export const Dragontitle = async (info) => {
    const titleElement = document.querySelector("#title");
    if (!titleElement) {
        console.error("#title not found");
        return;
    }
    const name = info.name ?? 'data en actualizacion';
    titleElement.innerHTML = name;
}

export const DragonInfo = async (descrip) => {
    const izquierdaElement = document.querySelector("#izquierda");
    if (!izquierdaElement) {
        console.error("#izquierda not found");
        return;
    }

    const heatShieldMaterial = descrip.heat_shield.material ?? 'data en actualizacion';
    const heatShieldSize = descrip.heat_shield.size_meters ?? 'data en actualizacion';
    const heatShieldTemp = descrip.heat_shield.temp_degrees ?? 'data en actualizacion';
    const heatShieldDev = descrip.heat_shield.dev_partner ?? 'data en actualizacion';
    const launchPayloadKg = descrip.launch_payload_mass.kg ?? 'data en actualizacion';
    const launchPayloadLb = descrip.launch_payload_mass.lb ?? 'data en actualizacion';
    const trunkVolume = descrip.trunk.trunk_volume.cubic_meters ?? 'data en actualizacion';
    const thrustersType = descrip.thrusters.type ?? 'data en actualizacion';
    const thrustersAmount = descrip.thrusters.amount ?? 'data en actualizacion';
    const thrustersPods = descrip.thrusters.pods ?? 'data en actualizacion';
    const thrustersFuel1 = descrip.thrusters.fuel_1 ?? 'data en actualizacion';
    const thrustersFuel2 = descrip.thrusters.fuel_2 ?? 'data en actualizacion';
    const description = descrip.description ?? 'data en actualizacion';

    izquierdaElement.innerHTML = /*html*/`
        <p>HEAT_SHIELD</p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                material
            </div>
            <div id="info" class="info">
                ${heatShieldMaterial}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                size_meters
            </div>
            <div id="info" class="info">
                ${heatShieldSize}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                temp_degrees
            </div>
            <div id="info" class="info">
                ${heatShieldTemp}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                dev_partner
            </div>
            <div id="info" class="info">
                ${heatShieldDev}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                size_meters
            </div>
            <div id="info" class="info">
                ${heatShieldSize}
            </div>
        </div>
        <div class="gauge__bodyDragon">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__textDragon">launch_payload_mass</div>
                <div class="gauge__valueDragon">${launchPayloadKg}KG</div>
            </div>
        </div> 
        <div class="gauge__bodyDragon">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__textDragon">launch_payload_mass</div>
                <div class="gauge__valueDragon">${launchPayloadLb}LB</div>
            </div>
        </div> 
        <div class="gauge__bodyDragon">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__textDragon">cubic_meters</div>
                <div class="gauge__valueDragon">${trunkVolume}MTRS</div>
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
                ${thrustersType}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                amount
            </div>
            <div id="info" class="info">
                ${thrustersAmount}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                pods
            </div>
            <div id="info" class="info">
                ${thrustersPods}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                fuel_1
            </div>
            <div id="info" class="info">
                ${thrustersFuel1}
            </div>
        </div>
        <p></p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">
                fuel_2
            </div>
            <div id="info" class="info">
                ${thrustersFuel2}
            </div>
        </div>
        <section id="izquierda" class="left-dragon">
            <div class="status normal">🧐 DESCRIPTION 🧐</div>
            <div class="system-check">${description}</div>
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
            <div class="metric-value">${descrip.active ?? 'data en actualizacion'}</div>
        </div>
        <div class="metric">
            <div class="metric-title">wikipedia</div>
            <div class="metric-value">
                <a href="${descrip.wikipedia}" target="_blank">${descrip.wikipedia ?? 'data en actualizacion'}</a>
            </div>
        </div>
        <div class="metric">
            <div class="metric-title">type</div> 
            <div class="metric-value">${descrip.type ?? 'data en actualizacion'}</div>
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
