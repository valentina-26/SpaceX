import {getAllroadsterid,getAllinforoadster} from"../modules/data.js"
import {RoadsterTitle,infoRoadster,plusInfoRocket3I} from "./roadster.js"

export const skipRoadster = async () => {
    const Capsules = await getAllroadsterid();
    const html = Capsules.map((Roadster, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${Roadster.id}">${pag}</a>`;
    });

    return html.join("");
};

    export const FillRoadster = async() => {
        document.querySelector("#paginacion").addEventListener("click", async e => {
            e.preventDefault();
            const id = e.target.dataset.id;
            await loadRoadters(id);
        });
        const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
        loadRoadters(firstCapsuleId);
    }

    const loadRoadters = async(id) => {
        const title = await getAllinforoadster(id);
        await RoadsterTitle (title);

        const Roadster = await getAllinforoadster(id);
        await infoRoadster (Roadster);

        const imagenes = await infoRoadster(id)
        // console.log(imagenes)
        plusInfoRocket3I (imagenes)
    };