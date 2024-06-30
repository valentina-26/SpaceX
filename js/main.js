import { skipRockets, FillRockets } from "./components/skipRockets.js";
import { skipCapsules,FillCapsules } from "./components/skipCapsules.js";



export const clearInformation = () => {
    document.querySelector("#title").innerHTML = "";
    document.querySelector("#izquierda").innerHTML = "";
    document.querySelector("#metrics").innerHTML = "";
    document.querySelector("#engines").innerHTML = "";
    document.querySelector("#otro").innerHTML = "";
}

const handleRocketClick = async e => {
    clearInformation (); 
    document.querySelector("#pagination").innerHTML = await skipRockets();
    FillRockets();
}

const handleCapsulesClick = async e => {
    clearInformation(); 
    document.querySelector("#pagination").innerHTML = await skipCapsules();
    setUpPaginationCapsules();
}


document.addEventListener("DOMContentLoaded", async () => {
document.addEventListener("DOMContentLoaded", async () => {
    document.querySelector("#pagination").innerHTML = await skipRockets();    
    const rocketElement = document.querySelector("#Rockets");

    const capsulesElement = document.querySelector("#capsules");
    FillCapsules();

    rocketElement.addEventListener("click", handleRocketClick);
    capsulesElement.addEventListener("click", handleCapsulesClick);

    clearInformation(); 
    document.querySelector("#pagination").innerHTML = await skipRockets();
    FillRockets();
});
});




document.querySelector("#Rockets").addEventListener("click", () => {
    document.querySelector("#capsules").removeEventListener("click", handleCapsulesClick);
});

document.querySelector("#capsules").addEventListener("click", () => {
    document.querySelector("#Rockets").removeEventListener("click", handleRocketClick);
});








































// import { skipRockets, FillRockets } from "./components/skipRockets.js";


// document.addEventListener("DOMContentLoaded", async () => {
//     document.querySelector("#paginacion").innerHTML = await skipRockets();
        
//     FillRockets();
// });