export const titleCrew = async (info) =>{
    document.querySelector("#title").innerHTML = info.name;
}


export const infoCrew = async (descrip) =>{
    document.querySelector("#izquierda").innerHTML = /*html*/`
    <div class="CrewImagen">
        <img src="${descrip.image}" referrerpolicy="no-referrer">
    </div> 
        `;
    document.querySelector("#metrics").innerHTML = /*html*/`
    <div id ="circuoone"class="gauge1"> 
    <div id ="circuoone"class="gauge__body">
        <div class="gauge__fill"></div>
        <div class="gauge__cover">
            <div class="gauge__text">AGENCY</div>
            <div class="gauge__value">${descrip.agency}</div>
        </div>
    </div> 
    </div>
    <section id="izquierda" class="left-circleCrew">
        <div class="status normal">  WIKIPEDIA</div>
        <div class="left-circle-titlt"><a href="${descrip.wikipedia}">Enlace a Wikipedia</a></div></div>
    </section>
    <div id ="circuoone"class="gauge2"> 
    <div id ="circuoone"class="gauge__body">
        <div class="gauge__fill"></div>
        <div class="gauge__cover">
            <div class="gauge__text">STATUS</div>
            <div class="gauge__value">${descrip.status}</div>
        </div>
    </div> 
</div>
    <section id="izquierda" class="left-circleCrew2">
        <div class="status normal"> LAUNCHES</div>
        <div class="left-circle-titlt">${descrip.launches}</div>
    </section>
 
            `;
    document.querySelector("#derecha").innerHTML = /*html*/`
    <div class="CrewImagen2">
        <img src="${descrip.image}" referrerpolicy="no-referrer">
    </div> 
            `;
    
}
