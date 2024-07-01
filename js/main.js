import { fillrockets, skipRockets } from "./components/skipRockets.js";
import { FillCapsules,skipCapsules } from "./components/skipCapsules.js";
import {skipCores,FillCores} from "./components/skipCores.js"
import {skipCrew,FillCrew} from "./components/skipCrew.js"
import { skipHistory,FillHistory } from "./components/skipHistory.js";
import { skipStarlink,FillStarlink } from "./components/skipStarlink.js";


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

const handleHistoryClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipHistory();
    FillHistory();
}

const handleStarlinkClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipStarlink();
    FillStarlink();
}

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rockets");
    const capsulesElement = document.querySelector("#capsules");
    const coresElement = document.querySelector("#cores");
    const crewElement = document.querySelector("#crew");
    const HistoryElemnt = document.querySelector("#history");
    const starlinkElement = document.querySelector("#starlink")


    if (rocketElement && capsulesElement && coresElement && crewElement && HistoryElemnt && starlinkElement) {
        rocketElement.addEventListener("click", handleRocketClick);
        capsulesElement.addEventListener("click", handleCapsulesClick);
        coresElement.addEventListener("click", handleCoresClick);
        crewElement.addEventListener("click",handleCrewClick);
        HistoryElemnt.addEventListener("click",handleHistoryClick);
        starlinkElement.addEventListener("click",handleStarlinkClick);

        clearInformation();
        document.querySelector("#paginacion").innerHTML = await skipRockets();
        fillrockets();
    } else {
        console.error("No se encontraron los elementos con IDs '#rockets' o '#capsules'.");
    }
});
