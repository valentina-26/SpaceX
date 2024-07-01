import {getAllstarlinkid,getAllinfostarlink} from "../modules/data.js"
import {titleStarlink,infoStarlink} from "./starlink.js"

export const skipStarlink = async ()  =>{
    const Cores = await getAllstarlinkid ();
    const html = Cores.map ((Starlink , index) =>{
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${Starlink .id}">${pag}</a>`;
    });
    return html.join("");
};


export const FillStarlink  = async() => {
    document.querySelector("#paginacion").addEventListener("click", async e => {
        e.preventDefault();
        const id = e.target.dataset.id;
        await loadStarlink (id);
    });
    const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
    loadStarlink (firstCapsuleId);
}

const loadStarlink  = async(id) => {
    const title = await getAllinfostarlink(id);
    await titleStarlink (title)

    const info = await getAllinfostarlink(id);
    await infoStarlink (info);
};