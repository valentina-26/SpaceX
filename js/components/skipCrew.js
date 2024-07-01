import {getAllCrewid,getAllinfoCrew} from"../modules/data.js"
import {titleCrew,infoCrew} from "./Crew.js"

 export const skipCrew = async () => {
    const capsules = await getAllCrewid();
    const html = capsules.map((crew, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${crew.id}">${pag}</a>`;
    });

    return html.join("");
};

    export const FillCrew = async() => {
        document.querySelector("#paginacion").addEventListener("click", async e => {
            e.preventDefault();
            const id = e.target.dataset.id;
            await loadCrew(id);
        });
        const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
        loadCrew(firstCapsuleId);
    }

    const loadCrew = async(id) => {

        const Crewtitle = await getAllinfoCrew(id);
        await titleCrew (Crewtitle);

        const crewInfo = await getAllinfoCrew(id);
        await infoCrew (crewInfo);
    };