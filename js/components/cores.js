export const titleCores = async(info)  =>{
    document.querySelector("#title3").innerHTML = info.id;
}

export const InfoCores = async (descrip) => {
    document.querySelector("#izquierda").innerHTML = /*html*/`
    <div id= "engines" class="enginescAPSULES">
    <p>CORES</p>
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        block
        </div>
        <div id = "info" class ="info">
        ${descrip.block}
        </div>
    </div>   
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        reuse_count
        </div>
        <div id = "info" class ="info">
        ${descrip.reuse_count}
        </div>
    </div>
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        rtls_attempts
        </div>
        <div id = "info" class ="info">
        ${descrip.rtls_attempts}
        </div>
    </div>  
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        rtls_landings
        </div>
        <div id = "info" class ="info">
        ${descrip.rtls_landings}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        asds_attempts
        </div>
        <div id = "info" class ="info">
        ${descrip.asds_attempts}
        </div>
    </div>   
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        asds_landings
        </div>
        <div id = "info" class ="info">
        ${descrip.asds_landings}
        </div>
    </div>   
    </div>
    
    </div>
    <div id ="circuoone"class="gauge"> 
        <div id ="circuoone"class="gauge__body">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">SERIAL</div>
                <div class="gauge__value">${descrip.serial}</div>
            </div>
        </div> 
    </div>
    `;
    document.querySelector("#derecha").innerHTML = /*html*/`
    <div id= "engines" class="enginescAPSULES">
    <p>LAUNCHES</p>
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        1
        </div>
        <div id = "info" class ="info">
        ${descrip.launches}
        </div>
    </div>   
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        2
        </div>
        <div id = "info" class ="info">
        ${descrip.launches}
        </div>
    </div>
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        3
        </div>
        <div id = "info" class ="info">
        ${descrip.launches}
        </div>
    </div>  
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        4
        </div>
        <div id = "info" class ="info">
        ${descrip.launches}
        </div>
    </div>
    </div> 
    <div id = "otro" class="otro">
        <div class="gauge__body">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">STATUS</div>
                <div class="gauge__value">${descrip.status}</div>
            </div>
        </div> 
    </div> 
    `;
    document.querySelector("#metrics").innerHTML = /*html*/`
    <div class="eloncolor">
        <img src="storage/img/Elon Musk 1662765295.webp">  
    </div>
    <section id="izquierda" class="left-rocket">
    <div class="status normal"> LAST UPDATE</div>
    <div class="system-check">${descrip.last_update}</div>
    </section>
    
        `;
    
};
