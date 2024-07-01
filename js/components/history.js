export const historyTitle = (info) =>{
    document.querySelector("#title").innerHTML = info.title;
}

export const infoHistory = async(descrip) => {
    document.querySelector("#metrics").innerHTML = /*html*/`
        <section id="izquierda" class="left-rocket">
            <div class="status normal"> DETAILS </div>
            <div class="system-check">${descrip.details}</div>
        </section>
        <section id="izquierda" class="left-circleHistory">
        <div class="status normal"> ARTICLE</div>
        <div class="left-circle-titlt">${descrip.links.article}</div></div>
        </section>
        <div class="historico">
        <img src="storage/img/history.gif">  
    </div>
    `;
    document.querySelector("#izquierda").innerHTML = /*html*/`
    <div class="metricHistory">
    <div class="metric-title">event_date_utc</div> 
        <div class="metric-value"> ${descrip.event_date_utc}</div>
    </div>
    `;
    document.querySelector("#derecha").innerHTML = /*html*/`
    <div class="metricHistory">
    <div class="metric-title">event_date_unix</div> 
        <div class="metric-value"> ${descrip.event_date_unix}</div>
    </div>

    `;
}