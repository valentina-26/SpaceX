export const NameRocket = async (name) => {
    document.querySelector("#title").innerHTML = name;
}

export const InfoRocket = async (moreInfo) => {
    // console.log(moreInfo);
    document.querySelector("#description").innerHTML = /*html*/`
    <div id = "description" class="system-check">${moreInfo.description}</div>
    <div class="status normal">Description</div>`;


}


// document.querySelector("#description").innerHTML = /*html*/`
//     <div id = "description" class="system-check">${moreInfo.description}</div>
//     <div class="status normal">Description</div>`;


//     document.querySelector("#description__item").innerHTML = /*html*/`
//     <h3>Description</h3>
//     <br>
//     <p>${moreInfo.description}</p>
//     <br>
//     <div class="info">
//         <img src="/storage/img/world.png">
//         <div class="info__item">
//             <h4>Country</h4>
//             <p>${moreInfo.country}</p>
//         </div>
//     </div>
//     ` ;
