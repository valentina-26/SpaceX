import {getAllcompanyId,getInfoCompany} from"../modules/data.js"
import {CompanyTitle,infoCompany} from "./company.js"

 export const skipComapany = async () => {
    const capsules = await getAllcompanyId();
    const html = capsules.map((company, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${company.id}">${pag}</a>`;
    });

    return html.join("");
};

    export const FillComapany = async() => {
        document.querySelector("#paginacion").addEventListener("click", async e => {
            e.preventDefault();
            const id = e.target.dataset.id;
            await loadCompany(id);
        });
        const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
        loadCompany(firstCapsuleId);
    }

    const loadCompany = async(id) => {
        const title = await getInfoCompany(id);
        await CompanyTitle (title);

        const History = await getInfoCompany(id);
        await infoCompany (History);
    };