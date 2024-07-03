export const titleships = (info) =>{
    document.querySelector("#title").innerHTML = info.name;
}

export const Infoships = (descrip) => {
    document.querySelector("#metrics").innerHTML = /*html*/`
    <div id= "engines" class="enginescAPSULES">
    <p>Ships</p>
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        imo
        </div>
        <div id = "info" class ="info">
        ${descrip.imo}
        </div>
    </div>   
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        mmsi
        </div>
        <div id = "info" class ="info">
        ${descrip.mmsi}
        </div>
    </div>
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        abs
        </div>
        <div id = "info" class ="info">
        ${descrip.abs}
        </div>
    </div>  
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        class
        </div>
        <div id = "info" class ="info">
        ${descrip.class}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        mass_kg
        </div>
        <div id = "info" class ="info">
        ${descrip.mass_kg}
        </div>
    </div>   
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        year_built
        </div>
        <div id = "info" class ="info">
        ${descrip.year_built}
        </div>
    </div>   
    </div>
    <div class="shipimg">
        <img src="${descrip.image}" referrerpolicy="no-referrer">
    </div>
    `;
    document.querySelector("#izquierda").innerHTML = /*html*/`
        <section id="izquierda" class="left-rocket">
            <div class="status normal">link</div>
            <div class="system-check"><a href="${descrip.link}">${descrip.link}</a></div>
        </section>
        <section id="izquierda" class="left-circle">
        <div class="status normal"> active</div>
        <div class="left-circle-titlt">${descrip.active}</div></div>
        </section>
    `;
    document.querySelector("#derecha").innerHTML = /*html*/`
        <section id="izquierda" class="left-rocket">
            <div class="status normal">legacy_id</div>
            <div class="system-check">${descrip.legacy_id}</div>
        </section>
        <section id="izquierda" class="left-circleship">
        <div class="status normal"> home_port</div>
        <div class="left-circle-titlt">${descrip.home_port}</div></div>
        </section>
    `;
}