import {getAllCoresid,getAllinfoCores} from "../modules/data.js"
import {titleCores,InfoCores} from "./cores.js"

export const skipCores = async ()  =>{
    const Cores = await getAllCoresid ();
    const html = Cores.map ((Cores, index) =>{
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${Cores.id}">${pag}</a>`;
    });
    return html.join("");
};


export const FillCores = async() => {
    document.querySelector("#paginacion").addEventListener("click", async e => {
        e.preventDefault();
        const id = e.target.dataset.id;
        await loadCores(id);
    });
    const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
    loadCores(firstCapsuleId);
}

const loadCores = async(id) => {
    const Corestitle = await getAllinfoCores(id);
    await titleCores (Corestitle);

    const Coresinfo = await getAllinfoCores(id);
    await InfoCores (Coresinfo);
};