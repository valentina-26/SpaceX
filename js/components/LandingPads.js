export const landingTitle = async (info) =>{
    document.querySelector("#title").innerHTML =
    info.name;
}

export const infolanding = async (descrip) =>{
    document.querySelector("#metrics").innerHTML = /*html*/`
        <div class="metric">
            <div class="metric-title">full_name</div> 
            <div class="metric-value"> ${descrip.full_name}</div>
        </div>
        <div class="metric">
            <div class="metric-title">status</div> 
            <div class="metric-value">${descrip.status}</div>
        </div>
        <div class="metric">
            <div class="metric-title">type</div> 
            <div class="metric-value">${descrip.type}</div>
        </div>
        <div class="metric">
            <div class="metric-title">🚀 region</div> 
            <div class="metric-value">${descrip.region}</div>
        </div>
        <div class="elonlanding">
        <img src="storage/img/landingelon.jpeg">  
        </div>
        `;
        document.querySelector("#izquierda").innerHTML = /*html*/`
        <div class="gauge__bodylanding">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">landing_attempts</div>
                <div class="gauge__value">${descrip.landing_attempts}</div>
            </div>
        </div> 
        <section id="izquierda" class="left-rocket">
            <div class="status normal">latitude</div>
            <div class="system-check">${descrip.latitude}</div>
        </section>
        <section id="izquierda" class="left-rocket">
            <div class="status normal">longitude</div>
            <div class="system-check">${descrip.longitude}</div>
        </section>
        `;
        document.querySelector("#derecha").innerHTML = /*html*/`
        <div class="gauge__bodylanding">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">landing_successes</div>
                <div class="gauge__value">${descrip.landing_successes}</div>
            </div>
        </div> 
        <section id="izquierda" class="left-rocket">
        <div class="status normal">details</div>
        <div class="system-check">${descrip.details}</div>
        </section>
        `;
}