export const nameRocket = async (name) => {
    document.querySelector("#title").innerHTML = name;

}

export const description = async (descrip) => {
    document.querySelector("#izquierda").innerHTML = /*html*/`
        <section id="izquierda" class="left-rocket">
            <div class="status normal">DESCRIPTION</div>
            <div class="system-check">${descrip.description}</div>
        </section>
        <section id="izquierda" class="left-circle">
        <div class="status normal">HEIGHT</div>
        <div class="left-circle-titlt">${descrip.height.meters} meters</div></div>
        <div class="left-circle-titlt">${descrip.height.feet} feet</div></div>
        </section>
        <section id="izquierda" class="left-circle">
        <div class="status normal">DIAMETER</div>
        <div class="left-circle-titlt">${descrip.diameter.meters} meters</div>
        <div class="left-circle-titlt">${descrip.diameter.meters} feet</div>
        </section>

    `;
    document.querySelector("#metrics").innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">COST</div> 
            <div class="metric-value">${descrip.cost_per_launch}</div>
        </div>
        <div class="metric">
            <div class="metric-title">COUNTRY</div> 
            <div class="metric-value">${descrip.country}</div>
        </div>
        <div class="metric">
            <div class="metric-title">FIRST FLIGHT</div> 
            <div class="metric-value">${descrip.first_flight}</div>
        </div>
        <div class="metric">
            <div class="metric-title">TYPE</div> 
            <div class="metric-value">${descrip.type}</div>
        </div>
        `;
        document.querySelector("#derecha").innerHTML = /*html*/`
        <div class="WIKIPEDIA">
            <div class="wikititle">WIKIPEDIA</div> 
            <div class="wikitext">${descrip.wikipedia}</div>
        </div>
        <div class="WIKIPEDIA">
        <div class="wikititle">ID</div> 
        <div class="wikitext">${descrip.id}</div>
        </div>
        <div class="right-circle">
            <div class="wikititle">STAGES</div> 
            <div class="left-circle-titlt">${descrip.stages}</div>
        </div>`;
}


export const plusInfoRocket3I = async (plusInfo) => {
    console.log(plusInfo.flickr_images)
    const img = async () => {
        let plantilla = '';
        let imagenes = plusInfo.flickr_images;
        imagenes.forEach(element => {
            plantilla += `<img src="${element}" referrerpolicy="no-referrer">`;
        });
        return plantilla;
    }

    console.log(await img());

    document.querySelector("#imagen").innerHTML = await img();
};
