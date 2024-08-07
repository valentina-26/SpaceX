export const titleCapsules = async (info) => {
    console.log(info);

    const id = info.id !== "Not found" ? info.id : '';

    document.querySelector("#title2").innerHTML = id;

};

export const InfoCapsules = async (descrip) => {

    const status = descrip.status !== "Not found" ? descrip.status : '';

    document.querySelector("#izquierda").innerHTML = /*html*/`
        <div class="elonvaquero">
            <img src="storage/img/elonvaquero.jpg">  
        </div>
    `;
    document.querySelector("#derecha").innerHTML = /*html*/`
        <div class="elonvaquero2">
            <img src="storage/img/elonvaquero.jpg">  
        </div>
    `;
    document.querySelector("#metrics").innerHTML = /*html*/`
        <div class="originGif">
            <img src="storage/img/58.webp">  
        </div>
        <div class="metric">
            <div class="metric-title">STATUS</div> 
            <div class="metric-value"> ${status}</div>
        </div>
        <div class="metric">
            <div class="metric-title">STATUS</div> 
            <div class="metric-value"> ${status}</div>
        </div>
        <div id= "engines" class="enginescAPSULES">
            <p>CAPSULES</p>
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    last_update
                </div>
                <div id="info" class="info">
                    ${descrip.last_update}
                </div>
            </div>   
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    reuse_count
                </div>
                <div id="info" class="info">
                    ${descrip.reuse_count}
                </div>
            </div>
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    water_landings
                </div>
                <div id="info" class="info">
                    ${descrip.water_landings}
                </div>
            </div>  
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    land_landings
                </div>
                <div id="info" class="info">
                    ${descrip.land_landings}
                </div>
            </div> 
            <hr>
            <div id="informacion" class="informacion">
                <div id="subtitulo" class="subtitulo">
                    serial
                </div>
                <div id="info" class="info">
                    ${descrip.serial}
                </div>
            </div>   
        </div>
    `;
};
