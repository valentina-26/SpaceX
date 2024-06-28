export const nameRocket = async (name) => {
    document.querySelector("#title").innerHTML = name;

}

export const description = async (descrip) => {
    document.querySelector("#izquierda").innerHTML = /*html*/`
        <section id="izquierda" class="left-panel">
            <div class="status normal">DESCRIPTION</div>
            <div class="system-check">${descrip.description}</div>
        </section>
    `;
}


// export const infoRocket = async (moreInfo) => {
//     console.log(moreInfo);
//     document.querySelector("#title").innerHTML = /*html*/`
//     <div id="title">
//     <h1 id = "title" class="title">VEHICLE OVERVIEW</h1>
//     </div>
//     ` ;

// }
