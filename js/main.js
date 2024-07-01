import { fillrockets, skipRockets } from "./components/skipRockets.js";
import { FillCapsules,skipCapsules } from "./components/skipCapsules.js";
import {skipCores,FillCores} from "./components/skipCores.js"
import {skipCrew,FillCrew} from "./components/skipCrew.js"


export const clearInformation = () => {
    document.querySelector("#title").innerHTML = "";
    document.querySelector("#izquierda").innerHTML = "";
    document.querySelector("#metrics").innerHTML = "";
    document.querySelector("#engines").innerHTML = "";
    document.querySelector("#otro").innerHTML = "";
    document.querySelector("#imagen").innerHTML = "";
}

const handleRocketClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipRockets();
    fillrockets();
}

const handleCapsulesClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipCapsules();
    FillCapsules();
}

const handleCoresClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipCores();
    FillCores();
}

const handleCrewClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipCrew();
    FillCrew();
}

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rockets");
    const capsulesElement = document.querySelector("#capsules");
    const coresElement = document.querySelector("#cores");
    const crewElement = document.querySelector("#crew")


    if (rocketElement && capsulesElement && coresElement && crewElement) {
        rocketElement.addEventListener("click", handleRocketClick);
        capsulesElement.addEventListener("click", handleCapsulesClick);
        coresElement.addEventListener("click", handleCoresClick);
        crewElement.addEventListener("click",handleCrewClick)

        clearInformation();
        document.querySelector("#paginacion").innerHTML = await skipRockets();
        fillrockets();
    } else {
        console.error("No se encontraron los elementos con IDs '#rockets' o '#capsules'.");
    }
});
