import {getAllDragonid,getAllinfoDragon} from"../modules/data.js"
import {Dragontitle,DragonInfo,plusInfoRocket3I} from "./Dragon.js"

export const skipDragon = async () => {
    const capsules = await getAllDragonid();
    const html = capsules.map((dragon, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${dragon.id}">${pag}</a>`;
    });

    return html.join("");
};

export const FillDragon = async() => {
        document.querySelector("#paginacion").addEventListener("click", async e => {
            e.preventDefault();
            const id = e.target.dataset.id;
            await loadDragon(id);
        });
        const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
        loadDragon(firstCapsuleId);
    }

    const loadDragon = async(id) => {

        const title = await getAllinfoDragon(id);
        await Dragontitle (title);

        const info = await getAllinfoDragon(id);
        await DragonInfo (info);

        const imagenes = await getAllinfoDragon(id)
        // console.log(imagenes)
        plusInfoRocket3I (imagenes)
    };