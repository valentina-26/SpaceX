export const nameRocket = async (name) => {
    document.querySelector("#title").innerHTML = name;

}

export const description = async (descrip) => {
    document.querySelector("#izquierda").innerHTML = /*html*/`
        <section id="izquierda" class="left-rocket">
            <div class="status normal">🧐 DESCRIPTION 🧐</div>
            <div class="system-check">${descrip.description}</div>
        </section>
        <section id="izquierda" class="left-circle">
        <div class="status normal"> 📏 HEIGHT</div>
        <div class="left-circle-titlt">${descrip.height.meters} meters</div></div>
        <div class="left-circle-titlt">${descrip.height.feet} feet</div></div>
        </section>
        <section id="izquierda" class="left-circle">
        <div class="status normal"> 📏 DIAMETER</div>
        <div class="left-circle-titlt">${descrip.diameter.meters} meters</div>
        <div class="left-circle-titlt">${descrip.diameter.meters} feet</div>
        </section>
        <img class="elongif1" src="storage/img/cohetegif.gif">
        <img class="elongif1" src="storage/img/elongif2.gif">

    `;
    document.querySelector("#metrics").innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">💸 COST</div> 
            <div class="metric-value"> ${descrip.cost_per_launch}</div>
        </div>
        <div class="metric">
            <div class="metric-title">🇺🇸 COUNTRY</div> 
            <div class="metric-value">${descrip.country}</div>
        </div>
        <div class="metric">
            <div class="metric-title">🪽 FIRST FLIGHT</div> 
            <div class="metric-value">${descrip.first_flight}</div>
        </div>
        <div class="metric">
            <div class="metric-title">🚀 TYPE</div> 
            <div class="metric-value">${descrip.type}</div>
        </div>
        `;
        document.querySelector("#engines").innerHTML = /*html*/`
        <p>⚙️ ENGINIES ⚙️</p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                THRUST SEA LEVEL
                </div>
                <div id = "info" class ="info">
                ${descrip.engines.thrust_sea_level.kN}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                NUMBER
                </div>
                <div id = "info" class ="info">
                ${descrip.engines.number}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                TYPE
                </div>
                <div id = "info" class ="info">
                ${descrip.engines.type}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                VERSION
                </div>
                <div id = "info" class ="info">
                ${descrip.engines.version}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                LAYOUT
                </div>
                <div id = "info" class ="info">
                ${descrip.engines.layout}
                </div>
            </div>
        </div>`
        ;
        document.querySelector("#otro").innerHTML = /*html*/`
        <div class="gauge__body">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">STAGES</div>
                <div class="gauge__value">${descrip.stages}</div>
            </div>
        </div> 
        `;
        
        

}


export const plusInfoRocket3I = async (plusInfo) => {
    console.log(plusInfo.flickr_images)
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

    console.log(await img());

    document.querySelector("#imagen").innerHTML = await img();
};

        