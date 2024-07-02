import {getAllLaunchpadsid,getAllinfoLaunchpads} from "../modules/data.js"
import {titleLaunch,InfoLaunch} from "./Launchpads.js"

export const skipLaunchpads = async ()  =>{
    const Cores = await getAllLaunchpadsid ();
    const html = Cores.map ((ships, index) =>{
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${ships.id}">${pag}</a>`;
    });
    return html.join("");
};


export const FillLaunchpads = async() => {
    document.querySelector("#paginacion").addEventListener("click", async e => {
        e.preventDefault();
        const id = e.target.dataset.id;
        await loadLaunchpads(id);
    });
    const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
    loadLaunchpads(firstCapsuleId);
}

const loadLaunchpads = async(id) => {
    const shipstitle = await getAllinfoLaunchpads(id);
    await titleLaunch (shipstitle);

    const shipsinfo = await getAllinfoLaunchpads(id);
    await InfoLaunch (shipsinfo);
};