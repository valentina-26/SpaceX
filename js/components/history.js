export const historyTitle = (info) => {
    const titleElement = document.querySelector("#title");
    if (!titleElement) {
        console.error("#title not found");
        return;
    }

    // Validación para mostrar "data en actualizacion" si info.title es null o undefined
    const title = info.title ?? 'data en actualizacion';
    titleElement.innerHTML = title;
}

export const infoHistory = async (descrip) => {
    const metricsElement = document.querySelector("#metrics");
    if (!metricsElement) {
        console.error("#metrics not found");
        return;
    }

    // Validación para mostrar "data en actualizacion" si alguna propiedad es null o undefined
    const details = descrip.details ?? 'data en actualizacion';
    const articleLink = descrip.links.article ?? 'data en actualizacion';
    const eventDateUtc = descrip.event_date_utc ?? 'data en actualizacion';
    const eventDateUnix = descrip.event_date_unix ?? 'data en actualizacion';

    metricsElement.innerHTML = /*html*/`
        <section id="izquierda" class="left-rocket">
            <div class="status normal"> DETAILS </div>
            <div class="system-check">${details}</div>
        </section>
        <section id="izquierda" class="left-circleHistory">
            <div class="status normal"> ARTICLE</div>
            <div class="left-circle-titlt"><a href="${articleLink}">Enlace al artículo</a></div>
        </section>
        <div class="historico">
            <img src="storage/img/history.gif">  
        </div>
    `;

    const izquierdaElement = document.querySelector("#izquierda");
    if (!izquierdaElement) {
        console.error("#izquierda not found");
        return;
    }

    izquierdaElement.innerHTML = /*html*/`
        <div class="metricHistory">
            <div class="metric-title">event_date_utc</div> 
            <div class="metric-value">${eventDateUtc}</div>
        </div>
    `;

    const derechaElement = document.querySelector("#derecha");
    if (!derechaElement) {
        console.error("#derecha not found");
        return;
    }

    derechaElement.innerHTML = /*html*/`
        <div class="metricHistory">
            <div class="metric-title">event_date_unix</div> 
            <div class="metric-value">${eventDateUnix}</div>
        </div>
    `;
}
