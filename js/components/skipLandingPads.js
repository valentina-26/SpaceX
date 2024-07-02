import {getAllLandingPadsid,getAllinfoLandingPads} from"../modules/data.js"
import {landingTitle,infolanding} from "./LandingPads.js"

export const skipLandingPads = async () => {
    const capsules = await getAllLandingPadsid();
    const html = capsules.map((LandingPads, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${LandingPads.id}">${pag}</a>`;
    });

    return html.join("");
};

    export const FillLandingPads = async() => {
        document.querySelector("#paginacion").addEventListener("click", async e => {
            e.preventDefault();
            const id = e.target.dataset.id;
            await loadLandingPads(id);
        });
        const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
        loadLandingPads(firstCapsuleId);
    }

    const loadLandingPads = async(id) => {
        const title = await getAllinfoLandingPads(id);
        await landingTitle (title);

        const History = await getAllinfoLandingPads(id);
        await infolanding (History);
    };