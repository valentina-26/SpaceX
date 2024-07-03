export const titleships = (info) => {
    // Validación para mostrar "data en actualizacion" si info.name es null o undefined
    const name = info.name ?? 'data en actualizacion';

    document.querySelector("#title").innerHTML = name;
}

export const Infoships = (descrip) => {
    // Validación para mostrar "data en actualizacion" si alguno de los campos es null o undefined
    const imo = descrip.imo ?? 'data en actualizacion';
    const mmsi = descrip.mmsi ?? 'data en actualizacion';
    const abs = descrip.abs ?? 'data en actualizacion';
    const shipClass = descrip.class ?? 'data en actualizacion';
    const mass_kg = descrip.mass_kg ?? 'data en actualizacion';
    const year_built = descrip.year_built ?? 'data en actualizacion';
    const image = descrip.image ?? 'data en actualizacion';
    const link = descrip.link ?? 'data en actualizacion';
    const active = descrip.active ?? 'data en actualizacion';
    const legacy_id = descrip.legacy_id ?? 'data en actualizacion';
    const home_port = descrip.home_port ?? 'data en actualizacion';

    document.querySelector("#metrics").innerHTML = /*html*/`
        <div id= "engines" class="enginescAPSULES">
            <p>Ships</p>
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    imo
                </div>
                <div id="info" class="info">
                    ${imo}
                </div>
            </div>   
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    mmsi
                </div>
                <div id="info" class="info">
                    ${mmsi}
                </div>
            </div>
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    abs
                </div>
                <div id="info" class="info">
                    ${abs}
                </div>
            </div>  
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    class
                </div>
                <div id="info" class="info">
                    ${shipClass}
                </div>
            </div> 
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    mass_kg
                </div>
                <div id="info" class="info">
                    ${mass_kg}
                </div>
            </div>   
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    year_built
                </div>
                <div id="info" class="info">
                    ${year_built}
                </div>
            </div>   
        </div>
        <div class="shipimg">
            <img src="${image}" referrerpolicy="no-referrer">
        </div>
    `;
    document.querySelector("#izquierda").innerHTML = /*html*/`
        <section id="izquierda" class="left-rocket">
            <div class="status normal">link</div>
            <div class="system-check"><a href="${link}">${link}</a></div>
        </section>
        <section id="izquierda" class="left-circle">
            <div class="status normal"> active</div>
            <div class="left-circle-titlt">${active}</div>
        </section>
    `;
    document.querySelector("#derecha").innerHTML = /*html*/`
        <section id="izquierda" class="left-rocket">
            <div class="status normal">legacy_id</div>
            <div class="system-check">${legacy_id}</div>
        </section>
        <section id="izquierda" class="left-circleship">
            <div class="status normal"> home_port</div>
            <div class="left-circle-titlt">${home_port}</div>
        </section>
    `;
}
