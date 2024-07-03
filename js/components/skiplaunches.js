import { getAlllaunchesid, getAllinfolaunches } from "../modules/data.js";
import { InfoLaunches, titleLaunches } from "./launches.js";

export const skipLaunches = async () => {
    const Cores = await getAlllaunchesid();
    const html = Cores.map((Launches, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${Launches.id}">${pag}</a>`;
    });
    return html.join("");
};

export const FillLaunches = async () => {
    document.querySelector("#paginacion").addEventListener("click", async e => {
        e.preventDefault();
        const id = e.target.dataset.id;
        await loadlaunches(id);
    });

    const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
    loadlaunches(firstCapsuleId);
}

const loadlaunches = async (id) => {
    const Corestitle = await getAllinfolaunches(id);
    await titleLaunches(Corestitle);

    const Coresinfo = await getAllinfolaunches(id);
    await InfoLaunches(Coresinfo);
};
