export const titleStarlink = async(info)  =>{
    document.querySelector("#title").innerHTML = info.id;
}

export const infoStarlink = async (descrip) => {
    document.querySelector("#izquierda").innerHTML = /*html*/`
    <div id= "engines" class="enginescAPSULES">
    <p>SAPCETRACK</p>
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        CCSDS_OMM_VERS
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.CCSDS_OMM_VERS}
        </div>
    </div>   
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        OBJECT_TYPE
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.OBJECT_TYPE}
        </div>
    </div>
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        CREATION_DATE
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.CREATION_DATE}
        </div>
    </div>  

    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        OBJECT_NAME
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.OBJECT_NAME}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        CENTER_NAME
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.CENTER_NAME}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        INCLINATION
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.INCLINATION }
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        MEAN_ANOMALY
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.MEAN_ANOMALY}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        NORAD_CAT_ID
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.NORAD_CAT_ID}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        ELEMENT_SET_NO
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.ELEMENT_SET_NO}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        MEAN_MOTION_DOT
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.MEAN_MOTION_DOT}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        PERIOD
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.PERIOD}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        OBJECT_TYPE
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.OBJECT_TYPE}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        COUNTRY_CODE
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.COUNTRY_CODE}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
    <div id="subtitulo" class="subtitulo">
        SITE
        </div>
        <div id = "info" class ="info">
        ${descrip.spaceTrack.SITE}
        </div>
    </div>
    `;
    document.querySelector("#metrics").innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">TLE_LINE0</div> 
            <div class="metric-value"> ${descrip.spaceTrack.TLE_LINE0}</div>
        </div>
        <div class="metric">
            <div class="metric-title">TLE_LINE1</div> 
            <div class="metric-value">${descrip.spaceTrack.TLE_LINE1}</div>
        </div>
        <div class="metric">
            <div class="metric-title">TLE_LINE2</div> 
            <div class="metric-value">${descrip.spaceTrack.TLE_LINE2}</div>
        </div>
        <div class="metric">
            <div class="metric-title">COMMMENT</div> 
            <div class="metric-value">${descrip.spaceTrack.COMMENT}</div>
        </div>
        <div class="elonstar">
            <img src="storage/img/starlink.gif">  
        </div>
        `;
    document.querySelector("#derecha").innerHTML = /*html*/`
        <div id ="circuoone"class="gaugestar"> 
        <div id ="circuoone"class="gauge__body">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">VERSION</div>
                <div class="gauge__value">${descrip.version}</div>
            </div>
        </div> 
    </div><div id ="circuoone"class="gaugestar"> 
    <div id ="circuoone"class="gauge__body">
        <div class="gauge__fill"></div>
        <div class="gauge__cover">
            <div class="gauge__text">TYPE</div>
            <div class="gauge__value">${descrip.spaceTrack.OBJECT_TYPE}</div>
        </div>
    </div> 
    </div>
        `;
    
}