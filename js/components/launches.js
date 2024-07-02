export const titleLaunches = async(info)  =>{
    document.querySelector("#title3").innerHTML = info.name;
}

export const InfoLaunches = async (descrip) => {
    document.querySelector("#izquerda").innerHTML = /*html*/`
    <p>LAUNCHES</p>
    <hr>
<div id="informacion" class="informacion">
    <div id="subtitulo" class="subtitulo">
    core
    </div>
    <div id = "info" class ="info">
    ${descrip.static_fire_date_utc}
    </div>
</div>
</div>
<p></p>
<hr>
<div id="informacion" class="informacion">
    <div id="subtitulo" class="subtitulo">
    static_fire_date_unix
    </div>
    <div id = "info" class ="info">
    ${descrip.static_fire_date_unix}
    </div>
</div>
</div>
<p></p>
    <hr>
<div id="informacion" class="informacion">
    <div id="subtitulo" class="subtitulo">
    tdb
    </div>
    <div id = "info" class ="info">
    ${descrip.tdb}
    </div>
</div>
</div>
<p></p>
    <hr>
<div id="informacion" class="informacion">
    <div id="subtitulo" class="subtitulo">
    net
    </div>
    <div id = "info" class ="info">
    ${descrip.net}
    </div>
</div>
</div>
<p></p>
    <hr>
<div id="informacion" class="informacion">
    <div id="subtitulo" class="subtitulo">
    window
    </div>
    <div id = "info" class ="info">
    ${descrip.window}
    </div>
</div>
</div>
<p></p>
    <hr>
<div id="informacion" class="informacion">
    <div id="subtitulo" class="subtitulo">
    rocket
    </div>
    <div id = "info" class ="info">
    ${descrip.rocket}
    </div>
</div>
</div>
<p></p>
    <hr>
<div id="informacion" class="informacion">
    <div id="subtitulo" class="subtitulo">
    success
    </div>
    <div id = "info" class ="info">
    ${descrip.success}
    </div>
</div>
</div>
`;
document.querySelector("#derecha").innerHTML = /*html*/`
        <p>CORES</p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                core
                </div>
                <div id = "info" class ="info">
                ${descrip.cores.core}
                </div>
            </div>
        </div>
        <p></p>
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                flight
                </div>
                <div id = "info" class ="info">
                ${descrip.cores.flight}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                gridfins
                </div>
                <div id = "info" class ="info">
                ${descrip.cores.gridfins}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                legs
                </div>
                <div id = "info" class ="info">
                ${descrip.cores.legs}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                landing_attempt
                </div>
                <div id = "info" class ="info">
                ${descrip.cores.landing_attempt}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                landing_type
                </div>
                <div id = "info" class ="info">
                ${descrip.cores.landing_type}
                </div>
            </div>
        </div>
        <p></p>
                <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                landpad
                </div>
                <div id = "info" class ="info">
                ${descrip.cores.landpad}
                </div>
            </div>
        </div>
        `;
        document.querySelector("#metrics").innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">youtube_id</div> 
            <div class="metric-value"> ${descrip.youtube_id}</div>
        </div>
        <div class="metric">
            <div class="metric-title">webcast</div> 
            <div class="metric-value">${descrip.webcast}</div>
        </div>
        <div class="metric">
            <div class="metric-title">wikipedia</div> 
            <div class="metric-value">${descrip.first_flight}</div>
        </div>
        `;
}



export const plusInfoRocket3I = async (plusInfo) => {
    console.log(plusInfo.flickr_images)
    const img = async () => {
        let plantilla = '';
        let imagenes = plusInfo.flickr.original;

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