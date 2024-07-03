// Importar funciones desde los archivos correspondientes
import { fillrockets, skipRockets } from "./components/skipRockets.js";
import { FillCapsules, skipCapsules } from "./components/skipCapsules.js";
import { skipCores, FillCores } from "./components/skipCores.js";
import { skipCrew, FillCrew } from "./components/skipCrew.js";
import { skipHistory, FillHistory } from "./components/skipHistory.js";
import { skipStarlink, FillStarlink } from "./components/skipStarlink.js";
import { skipships, Fillships } from "./components/skipShip.js";
import { skipPayloads, FillPayloads } from "./components/skipPayloads.js";
import { skipRoadster, FillRoadster } from "./components/skipRoadster.js";
import { skipLandingPads, FillLandingPads } from "./components/skipLandingPads.js";
import { skipDragon, FillDragon } from "./components/skipDragon.js";
import { skipLaunchpads, FillLaunchpads } from "./components/skipLaunchpads.js";
import { skipLaunches, FillLaunches } from "./components/skiplaunches.js";
import { FillComapany, skipComapany } from "./components/skipCompany.js";

const mostrarMensajeInicial = () => {
    const mensajeInicial = document.querySelector("#mensajeInicial");
    mensajeInicial.style.display = "block"; // Mostrar el mensaje

    setTimeout(() => {
        mensajeInicial.style.display = "none"; 
    }, 5000); 
}


window.addEventListener("load", () => {
    mostrarMensajeInicial(); 
});







const clearInformation = () => {
    document.querySelector("#paginacion").innerHTML = "";
}


const handleClick = async (skipFunction, fillFunction) => {
    clearInformation(); 
    document.querySelector("#paginacion").innerHTML = await skipFunction(); 
    fillFunction(); 
}

document.addEventListener("DOMContentLoaded", () => {
    const rocketElement = document.querySelector("#rockets");
    const capsulesElement = document.querySelector("#capsules");
    const coresElement = document.querySelector("#cores");
    const crewElement = document.querySelector("#crew");
    const historyElement = document.querySelector("#history");
    const starlinkElement = document.querySelector("#starlink");
    const shipsElement = document.querySelector("#ships");
    const payloadsElement = document.querySelector("#payloads");
    const roadsterElement = document.querySelector("#roadster");
    const dragonElement = document.querySelector("#dragon");
    const landingPadsElement = document.querySelector("#LandingPads");
    const launchesElement = document.querySelector("#Launches");
    const launchPadsElement = document.querySelector("#LaunchPads");
    const companyElement = document.querySelector("#company");

    if (rocketElement && capsulesElement && coresElement && crewElement && historyElement && starlinkElement && shipsElement && payloadsElement && roadsterElement && dragonElement && landingPadsElement && launchesElement && launchPadsElement && companyElement) {
        rocketElement.addEventListener("click", () => handleClick(skipRockets, fillrockets));
        capsulesElement.addEventListener("click", () => handleClick(skipCapsules, FillCapsules));
        coresElement.addEventListener("click", () => handleClick(skipCores, FillCores));
        crewElement.addEventListener("click", () => handleClick(skipCrew, FillCrew));
        historyElement.addEventListener("click", () => handleClick(skipHistory, FillHistory));
        starlinkElement.addEventListener("click", () => handleClick(skipStarlink, FillStarlink));
        shipsElement.addEventListener("click", () => handleClick(skipships, Fillships));
        payloadsElement.addEventListener("click", () => handleClick(skipPayloads, FillPayloads));
        roadsterElement.addEventListener("click", () => handleClick(skipRoadster, FillRoadster));
        dragonElement.addEventListener("click", () => handleClick(skipDragon, FillDragon));
        landingPadsElement.addEventListener("click", () => handleClick(skipLandingPads, FillLandingPads));
        launchesElement.addEventListener("click", () => handleClick(skipLaunches, FillLaunches));
        launchPadsElement.addEventListener("click", () => handleClick(skipLaunchpads, FillLaunchpads));
        companyElement.addEventListener("click", () => handleClick(skipComapany, FillComapany));

        handleClick(skipRockets, fillrockets);
    } else {
        console.error("No se encontraron todos los elementos con IDs correspondientes.");
    }

    
});
