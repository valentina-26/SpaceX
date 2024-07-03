export const titleLaunch = async(info)  =>{
    document.querySelector("#title").innerHTML = info.name;
}

export const InfoLaunch = async (descrip) => {
    document.querySelector("#metrics").innerHTML = /*html*/`
       
        <div class="metric">
            <div class="metric-title">locality</div> 
            <div class="metric-value">${descrip.locality}</div>
        </div>
        <div class="metric">
        <div class="metric-title">full_name</div> 
        <div class="metric-value"> ${descrip.full_name}</div>
        </div>
        <div class="metric">
            <div class="metric-title">region</div> 
            <div class="metric-value">${descrip.region}</div>
        </div>
        <div class="metric">
            <div class="metric-title">timezone</div> 
            <div class="metric-value">${descrip.timezone}</div>
        </div>
        <div class="metric">
            <div class="metric-title">latitude</div> 
            <div class="metric-value">${descrip.latitude}</div>
        </div>


        <div class="Crewlan">
        <img src="storage/img/landinggiff.webp">
        </div> 
        `;
        document.querySelector("#izquierda").innerHTML = /*html*/`
        <div id ="circuoone"class="gauge"> 
        <div id ="circuoone"class="gauge__body">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">launch_attempts</div>
                <div class="gauge__value">${descrip.launch_attempts}</div>
            </div>
        </div> 
        </div>
        <section id="izquierda" class="left-lan">
        <div class="status normal"> status </div>
        <div class="system-check">${descrip.status}</div>
        </section>
    `;
    document.querySelector("#derecha").innerHTML = /*html*/`
        <div id ="circuoone"class="gauge"> 
        <div id ="circuoone"class="gauge__body">
            <div class="gauge__fill"></div>
            <div class="gauge__cover">
                <div class="gauge__text">launch_successes</div>
                <div class="gauge__value">${descrip.launch_successes}</div>
            </div>
        </div> 
        </div>
        <section id="izquierda" class="left-lan">
        <div class="status normal">longitude </div>
        <div class="system-check">${descrip.longitude}</div>
        </section>
    </div>
    `;
}


