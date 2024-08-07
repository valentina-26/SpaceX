import {getAllCapsulesId,getInfoCapsules} from"../modules/data.js"
import {InfoCapsules,titleCapsules} from "./capsules.js"

export const skipCapsules = async () => {
    const capsules = await getAllCapsulesId();
    const html = capsules.map((capsules, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${capsules.id}">${pag}</a>`;
    });

    return html.join("");
};

    export const FillCapsules = async() => {
        document.querySelector("#paginacion").addEventListener("click", async e => {
            e.preventDefault();
            const id = e.target.dataset.id;
            await loadCapsule(id);
        });
        const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
        loadCapsule(firstCapsuleId);
    }

    const loadCapsule = async(id) => {

        const capsuletitle = await getInfoCapsules(id);
        await titleCapsules (capsuletitle)

        const capsuleInfo = await getInfoCapsules(id);
        await InfoCapsules(capsuleInfo);
    };