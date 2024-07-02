import { fillrockets, skipRockets } from "./components/skipRockets.js";
import { FillCapsules,skipCapsules } from "./components/skipCapsules.js";
import {skipCores,FillCores} from "./components/skipCores.js"
import {skipCrew,FillCrew} from "./components/skipCrew.js"
import { skipHistory,FillHistory } from "./components/skipHistory.js";
import { skipStarlink,FillStarlink } from "./components/skipStarlink.js";
import { skipships,Fillships } from "./components/skipShip.js";
import { skipPayloads,FillPayloads } from "./components/skipPayloads.js";

import { skipRoadster,FillRoadster } from "./components/skipRoadster.js";
import {skipadragon,FillDragon} from "./components/skipDragon.js"
import {skipLandingPads,FillLandingPads} from "./components/skipLandingPads.js"
import {skipLaunches,FillLaunches} from "./components/skiplaunches.js"
import {skipLaunchpads,FillLaunchpads} from "./components/skipLaunchpads.js"
import { FillComapany,skipComapany } from "./components/skipCompany.js";

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
const handleShipClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipships();
    Fillships();
}

const handlePayloadsClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipPayloads();
    FillPayloads();
}

const handleRoadsterClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipRoadster();
    FillRoadster();
}

const handleDragonClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipadragon();
    FillDragon();
}

const handlelandingppadsClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipLandingPads();
    FillLandingPads();
}

const handlelaunchesClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipLaunches();
    FillLaunches();
}

const handlelaunchesPadsClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipLaunchpads();
    FillLaunchpads();
}

const handleCompnanyClick = async e => {
    clearInformation();
    document.querySelector("#paginacion").innerHTML = await skipComapany();
    FillComapany();
}
document.addEventListener("DOMContentLoaded", async () => {
    const rocketElement = document.querySelector("#rockets");
    const capsulesElement = document.querySelector("#capsules");
    const coresElement = document.querySelector("#cores");
    const crewElement = document.querySelector("#crew");
    const HistoryElemnt = document.querySelector("#history");
    const starlinkElement = document.querySelector("#starlink")
    const shipElement = document.querySelector("#ships")
    const PayloadsElemt = document.querySelector("#payloads")
    const RoadsterElement = document.querySelector("#roadster")
    const DragonElement = document.querySelector("#dragon")
    const LandingPadsElement = document.querySelector("#LandingPads")
    const LaunchesElement = document.querySelector("#Launches")
    const LaunchPadsElement =document.querySelector("#LaunchPads")
    const companyElement = document.querySelector("#company")


    if (companyElement && rocketElement && capsulesElement && coresElement && crewElement && HistoryElemnt && starlinkElement && shipElement && PayloadsElemt && RoadsterElement && DragonElement && LandingPadsElement && LaunchesElement && LaunchPadsElement) {
        rocketElement.addEventListener("click", handleRocketClick);
        capsulesElement.addEventListener("click", handleCapsulesClick);
        coresElement.addEventListener("click", handleCoresClick);
        crewElement.addEventListener("click",handleCrewClick);
        HistoryElemnt.addEventListener("click",handleHistoryClick);
        starlinkElement.addEventListener("click",handleStarlinkClick);
        shipElement.addEventListener("click",handleShipClick);
        PayloadsElemt.addEventListener("click",handlePayloadsClick);
        RoadsterElement.addEventListener("click",handleRoadsterClick);
        DragonElement.addEventListener("click",handleDragonClick);
        LandingPadsElement.addEventListener("click",handlelandingppadsClick);
        LaunchesElement.addEventListener("click",handlelaunchesClick)
        LaunchPadsElement.addEventListener("click",handlelaunchesPadsClick)
        companyElement.addEventListener("click",handleCompnanyClick)

        clearInformation();
        document.querySelector("#paginacion").innerHTML = await skipRockets();
        fillrockets();
    } else {
        console.error("No se encontraron los elementos con IDs .");
    }
});
