import { fillrockets, skipRockets } from "./components/skipRockets.js";
import { FillCapsules,skipCapsules } from "./components/skipCapsules.js";


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

document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rockets");
    const capsulesElement = document.querySelector("#capsules");
    const capsulesname = document.querySelector("#capsulesB")

    if (rocketElement && capsulesElement) {
        rocketElement.addEventListener("click", handleRocketClick);
        capsulesElement.addEventListener("click", handleCapsulesClick);

        clearInformation();
        document.querySelector("#paginacion").innerHTML = await skipRockets();
        fillrockets();
    } else {
        console.error("No se encontraron los elementos con IDs '#rockets' o '#capsules'.");
    }
});