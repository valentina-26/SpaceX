import {getAllshipsid,getAllinfoships} from "../modules/data.js"
import {titleships,Infoships} from "./ship.js"

export const skipships = async ()  =>{
    const Cores = await getAllshipsid ();
    const html = Cores.map ((ships, index) =>{
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${ships.id}">${pag}</a>`;
    });
    return html.join("");
};


export const Fillships = async() => {
    document.querySelector("#paginacion").addEventListener("click", async e => {
        e.preventDefault();
        const id = e.target.dataset.id;
        await loadships(id);
    });
    const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
    loadships(firstCapsuleId);
}

const loadships = async(id) => {
    const shipstitle = await getAllinfoships(id);
    await titleships (shipstitle);

    const shipsinfo = await getAllinfoships(id);
    await Infoships (shipsinfo);
};