export const RoadsterTitle = (info) => {
    document.querySelector("#title").innerHTML = info.name;
}

export const infoRoadster = async (descrip) => {
    document.querySelector("#metrics").innerHTML = /*html*/ `
        <div class="metric">
            <div class="metric-title">Launch Date (UTC)</div> 
            <div class="metric-value">${descrip.launch_date_utc}</div>
        </div>
        <div class="metric">
            <div class="metric-title">Launch Date (Unix)</div> 
            <div class="metric-value">${descrip.launch_date_unix}</div>
        </div>
        <div class="metric">
            <div class="metric-title">Launch Mass (kg)</div> 
            <div class="metric-value">${descrip.launch_mass_kg}</div>
        </div>
        <div class="metric">
            <div class="metric-title">Launch Mass (lbs)</div> 
            <div class="metric-value">${descrip.launch_mass_lbs}</div>
        </div>
    `;
    document.querySelector("#derecha").innerHTML = /*html*/ `
        <div class="informacion">
            <div class="subtitulo">Orbit Type</div>
            <div class="info">${descrip.orbit_type}</div>
        </div>
        <hr>
        <div class="informacion">
            <div class="subtitulo">Apoapsis (AU)</div>
            <div class="info">${descrip.apoapsis_au}</div>
        </div>
        <hr>
        <div class="informacion">
            <div class="subtitulo">Periapsis (AU)</div>
            <div class="info">${descrip.periapsis_au}</div>
        </div>
        <hr>
        <div class="informacion">
            <div class="subtitulo">Longitude</div>
            <div class="info">${descrip.longitude}</div>
        </div>
        <hr>
        <div class="informacion">
            <div class="subtitulo">Mars Distance (km)</div>
            <div class="info">${descrip.mars_distance_km}</div>
        </div>
    `;
    document.querySelector("#izquierda").innerHTML = /*html*/ `
        <section class="left-rocket">
            <div class="status normal">Details</div>
            <div class="system-check">${descrip.details}</div>
        </section>
        <section class="left-rocket">
            <div class="status normal">Wikipedia</div>
            <div class="system-check"><a href="${descrip.wikipedia}" target="_blank">${descrip.wikipedia}</a></div>
        </section>
        <section class="left-rocket">
            <div class="status normal">Video</div>
            <div class="system-check"><a href="${descrip.video}" target="_blank">${descrip.video}</a></div>
        </section>
    `;
}

export const plusInfoRocket3I = async (plusInfo) => {
    const img = async () => {
        let plantilla = '';
        plusInfo.flickr_images.forEach((element, index) => {
            plantilla += /*html*/ `
                <div class="carousel">
                    <img src="${element}" referrerpolicy="no-referrer" alt="Roadster Image ${index + 1}">
                </div> 
            `;
        });
        return plantilla;
    }

    document.querySelector("#imagen").innerHTML = await img();
};
