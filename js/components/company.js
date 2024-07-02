export const CompanyTitle = async (info) =>{
    document.querySelector("#title").innerHTML =
    info.name;
}

export const infoCompany = async (descrip) =>{
    document.querySelector("#metrics").innerHTML = /*html*/`
    <div class="metric">
        <div class="metric-title">founder</div> 
        <div class="metric-value"> ${descrip.founder}</div>
    </div>
    <div class="metric">
        <div class="metric-title">founded</div> 
        <div class="metric-value"> ${descrip.founded}</div>
    </div>
    <div class="metric">
        <div class="metric-title">employees</div> 
        <div class="metric-value"> ${descrip.employees}</div>
    </div>
    <div class="metric">
        <div class="metric-title">vehicles</div> 
        <div class="metric-value"> ${descrip.vehicles}</div>
    </div>
    `;
    document.querySelector("#derecha").innerHTML = /*html*/`
        <div id ="circuoone"class="gaugestar"> 
        <div id ="circuoone"class="gauge__body">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">city</div>
                <div class="gauge__value">${descrip.headquarters.city}</div>
            </div>
        </div> 
    </div>
    <div id ="circuoone"class="gaugestar"> 
    <div id ="circuoone"class="gauge__body">
        <div class="gauge__fill"></div>
        <div class="gauge__cover">
            <div class="gauge__text">address</div>
            <div class="gauge__value">${descrip.headquarters.address}</div>
        </div>
    </div> 
    </div>
    <div id ="circuoone"class="gaugestar"> 
    <div id ="circuoone"class="gauge__body">
        <div class="gauge__fill"></div>
        <div class="gauge__cover">
            <div class="gauge__text">state</div>
            <div class="gauge__value">${descrip.headquarters.state}</div>
        </div>
    </div> 
    </div>
        `;
    document.querySelector("#izquierda").innerHTML = /*html*/`
    <div id= "engines" class="enginescAPSULES">
    <p>Company</p>
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        launch_sites
        </div>
        <div id = "info" class ="info">
        ${descrip.launch_sites}
        </div>
    </div>   
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        test_sites
        </div>
        <div id = "info" class ="info">
        ${descrip.test_sites}
        </div>
    </div>
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        ceo
        </div>
        <div id = "info" class ="info">
        ${descrip.ceo}
        </div>
    </div>  

    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        cto
        </div>
        <div id = "info" class ="info">
        ${descrip.cto}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        coo
        </div>
        <div id = "info" class ="info">
        ${descrip.coo}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        cto_propulsion
        </div>
        <div id = "info" class ="info">
        ${descrip.cto_propulsion}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        valuation
        </div>
        <div id = "info" class ="info">
        ${descrip.valuation}
        </div>
    </div> 
    <hr>
    <div id="informacion" class="informacion">
        <div id="subtitulo" class="subtitulo">
        summary
        </div>
        <div id = "info" class ="info">
        ${descrip.summary}
        </div>
    </div> 
    `;
}