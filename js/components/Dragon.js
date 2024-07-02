export const Dragontitle = async(info)  =>{
    document.querySelector("#title").innerHTML = info.name;
}

export const DragonInfo = async (descrip) => {
    document.querySelector("#izquerda").innerHTML = /*html*/`
        <p>HEAT_SHIELD</p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                material
                </div>
                <div id = "info" class ="info">
                ${descrip.heat_shield.material}
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
        <div class="gauge__body">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">launch_payload_mass</div>
                <div class="gauge__value">${descrip.launch_payload_mass.kg}KG</div>
            </div>
        </div> 
        <div class="gauge__body">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">launch_payload_mass</div>
                <div class="gauge__value">${descrip.launch_payload_mass.lb}LB</div>
            </div>
        </div> 
        <div class="gauge__body">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">cubic_meters</div>
                <div class="gauge__value">${descrip.trunk.trunk_volume.cubic_meters}MTRS</div>
            </div>
        </div>
        `;
        document.querySelector("#derecha").innerHTML = /*html*/`
        <p>THRUSTERS</p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                Type
                </div>
                <div id = "info" class ="info">
                ${descrip.thrusters.type}
                </div>
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
        <section id="izquierda" class="left-rocket">
            <div class="status normal">🧐 DESCRIPTION 🧐</div>
            <div class="system-check">${descrip.description}</div>
        </section>
        `;
        document.querySelector("#metrics").innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">wikipedia</div> 
            <div class="metric-value"> ${descrip.wikipedia}</div>
        </div>
        <div class="metric">
            <div class="metric-title">active</div> 
            <div class="metric-value">${descrip.active}</div>
        </div>
        <div class="metric">
            <div class="metric-title">type</div> 
            <div class="metric-value">${descrip.type}</div>
        </div>
        `;
}


export const plusInfoRocket3I = async (plusInfo) => {
    // console.log(plusInfo.flickr_images)
    const img = async () => {
        let plantilla = '';
        let imagenes = plusInfo.flickr_images;

        imagenes.forEach(element => {
        
            plantilla +=/*html*/ `
            <div class="carousel">
                <img src="${element}" referrerpolicy="no-referrer">
            </div> 
            `;
        
        });
        return plantilla;
    }

    // console.log(await img());

    document.querySelector("#imagen").innerHTML = await img();
};