export const RoadsterTitle = (info) =>{
    document.querySelector("#title").innerHTML = info.name;
}

export const infoRoadster = async(descrip) => {
    document.querySelector("#metrics").innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">launch_date_utc</div> 
            <div class="metric-value"> ${descrip.launch_date_utc}</div>
        </div>
        <div class="metric">
            <div class="metric-title">launch_date_unix</div> 
            <div class="metric-value">${descrip.launch_date_unix}</div>
        </div>
        <div class="metric">
            <div class="metric-title">launch_mass_kg</div> 
            <div class="metric-value">${descrip.launch_mass_kg}</div>
        </div>
        <div class="metric">
            <div class="metric-title">launch_mass_lbs</div> 
            <div class="metric-value">${descrip.launch_mass_lbs}</div>
        </div>
        `;
        document.querySelector("#derecha").innerHTML = /*html*/`
        <p>Roadster</p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                orbit_type                </div>
                <div id = "info" class ="info">
                ${descrip.orbit_type}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                apoapsis_au
                </div>
                <div id = "info" class ="info">
                ${descrip.apoapsis_au}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                periapsis_au
                </div>
                <div id = "info" class ="info">
                ${descrip.periapsis_au}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                longitude
                </div>
                <div id = "info" class ="info">
                ${descrip.longitude}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                mars_distance_km
                </div>
                <div id = "info" class ="info">
                ${descrip.mars_distance_km}
                </div>
            </div>
        </div>
        `;
        document.querySelector("#izquierda").innerHTML = /*html*/`
        <section id="izquierda" class="left-rocket">
            <div class="status normal">details</div>
            <div class="system-check">${descrip.details}</div>
        </section>
        <section id="izquierda" class="left-rocket">
            <div class="status normal">wikipedia </div>
            <div class="system-check">${descrip.wikipedia}</div>
        </section>
        <section id="izquierda" class="left-rocket">
            <div class="status normal">video</div>
            <div class="system-check">${descrip.video}</div>
        </section>
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