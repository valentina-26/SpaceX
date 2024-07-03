export const titleLaunches = async(info) => {
    const titleElement = document.querySelector("#title3");
    if (!titleElement) {
        console.error("#title3 not found");
        return;
    }
    titleElement.innerHTML = info.name;
}

export const InfoLaunches = async (descrip) => {
    const izquierdaElement = document.querySelector("#izquierda");
    if (!izquierdaElement) {
        console.error("#izquerda not found");
        return;
    }

    izquierdaElement.innerHTML = /*html*/`
        <p>LAUNCHES</p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">core</div>
            <div id="info" class="info">${descrip.static_fire_date_utc}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">static_fire_date_unix</div>
            <div id="info" class="info">${descrip.static_fire_date_unix}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">tdb</div>
            <div id="info" class="info">${descrip.tdb}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">net</div>
            <div id="info" class="info">${descrip.net}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">window</div>
            <div id="info" class="info">${descrip.window}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">rocket</div>
            <div id="info" class="info">${descrip.rocket}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">success</div>
            <div id="info" class="info">${descrip.success}</div>
        </div>
    `;

    const derechaElement = document.querySelector("#derecha");
    if (!derechaElement) {
        console.error("#derecha not found");
        return;
    }

    derechaElement.innerHTML = /*html*/`
        <p>CORES</p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">core</div>
            <div id="info" class="info">${descrip.cores.core}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">flight</div>
            <div id="info" class="info">${descrip.cores.flight}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">gridfins</div>
            <div id="info" class="info">${descrip.cores.gridfins}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">legs</div>
            <div id="info" class="info">${descrip.cores.legs}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">landing_attempt</div>
            <div id="info" class="info">${descrip.cores.landing_attempt}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">landing_type</div>
            <div id="info" class="info">${descrip.cores.landing_type}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">landpad</div>
            <div id="info" class="info">${descrip.cores.landpad}</div>
        </div>
    `;

    const metricsElement = document.querySelector("#metrics");
    if (!metricsElement) {
        console.error("#metrics not found");
        return;
    }

    metricsElement.innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">youtube_id</div>
            <div class="metric-value">${descrip.youtube_id}</div>
        </div>
        <div class="metric">
            <div class="metric-title">webcast</div>
            <div class="metric-value">${descrip.webcast}</div>
        </div>
        <div class="metric">
            <div class="metric-title">wikipedia</div>
            <div class="metric-value">
                <a href="${descrip.wikipedia}" target="_blank">${descrip.wikipedia}</a>
            </div>
        </div>
        <div class="launchi">
            <img src="${descrip.links.patch.small}" referrerpolicy="no-referrer">
        </div>
    `;
}



