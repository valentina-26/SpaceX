export const titleLaunches = async (info) => {
    const titleElement = document.querySelector("#title3");
    if (!titleElement) {
        console.error("#title3 not found");
        return;
    }

    // Validación para mostrar "data en actualizacion" si info.name es null o undefined
    const name = info.name ?? 'data en actualizacion';
    titleElement.innerHTML = name;
}

export const InfoLaunches = async (descrip) => {
    const izquierdaElement = document.querySelector("#izquierda");
    if (!izquierdaElement) {
        console.error("#izquerda not found");
        return;
    }

    // Validación para mostrar "data en actualizacion" si alguna propiedad es null o undefined
    const staticFireDateUtc = descrip.static_fire_date_utc ?? 'data en actualizacion';
    const staticFireDateUnix = descrip.static_fire_date_unix ?? 'data en actualizacion';
    const tdb = descrip.tdb ?? 'data en actualizacion';
    const net = descrip.net ?? 'data en actualizacion';
    const window = descrip.window ?? 'data en actualizacion';
    const rocket = descrip.rocket ?? 'data en actualizacion';
    const success = descrip.success ?? 'data en actualizacion';

    izquierdaElement.innerHTML = /*html*/`
        <p>LAUNCHES</p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">core</div>
            <div id="info" class="info">${staticFireDateUtc}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">static_fire_date_unix</div>
            <div id="info" class="info">${staticFireDateUnix}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">tdb</div>
            <div id="info" class="info">${tdb}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">net</div>
            <div id="info" class="info">${net}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">window</div>
            <div id="info" class="info">${window}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">rocket</div>
            <div id="info" class="info">${rocket}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">success</div>
            <div id="info" class="info">${success}</div>
        </div>
    `;

    const derechaElement = document.querySelector("#derecha");
    if (!derechaElement) {
        console.error("#derecha not found");
        return;
    }

    // Validación para mostrar "data en actualizacion" si alguna propiedad es null o undefined
    const coresCore = descrip.cores.core ?? 'data en actualizacion';
    const coresFlight = descrip.cores.flight ?? 'data en actualizacion';
    const coresGridfins = descrip.cores.gridfins ?? 'data en actualizacion';
    const coresLegs = descrip.cores.legs ?? 'data en actualizacion';
    const coresLandingAttempt = descrip.cores.landing_attempt ?? 'data en actualizacion';
    const coresLandingType = descrip.cores.landing_type ?? 'data en actualizacion';
    const coresLandpad = descrip.cores.landpad ?? 'data en actualizacion';

    derechaElement.innerHTML = /*html*/`
        <p>CORES</p>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">core</div>
            <div id="info" class="info">${coresCore}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">flight</div>
            <div id="info" class="info">${coresFlight}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">gridfins</div>
            <div id="info" class="info">${coresGridfins}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">legs</div>
            <div id="info" class="info">${coresLegs}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">landing_attempt</div>
            <div id="info" class="info">${coresLandingAttempt}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">landing_type</div>
            <div id="info" class="info">${coresLandingType}</div>
        </div>
        <hr>
        <div id="informacion" class="informacion">
            <div id="subtitulo" class="subtitulo">landpad</div>
            <div id="info" class="info">${coresLandpad}</div>
        </div>
    `;

    const metricsElement = document.querySelector("#metrics");
    if (!metricsElement) {
        console.error("#metrics not found");
        return;
    }

    // Validación para mostrar "data en actualizacion" si alguna propiedad es null o undefined
    const youtubeId = descrip.youtube_id ?? 'data en actualizacion';
    const webcast = descrip.webcast ?? 'data en actualizacion';
    const wikipedia = descrip.wikipedia ?? 'data en actualizacion';

    metricsElement.innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">youtube_id</div>
            <div class="metric-value">${youtubeId}</div>
        </div>
        <div class="metric">
            <div class="metric-title">webcast</div>
            <div class="metric-value">${webcast}</div>
        </div>
        <div class="metric">
            <div class="metric-title">wikipedia</div>
            <div class="metric-value">
                <a href="${wikipedia}" target="_blank">${wikipedia}</a>
            </div>
        </div>
        <div class="launchi">
            <img src="${descrip.links.patch.small}" referrerpolicy="no-referrer">
        </div>
    `;
}
