import {getAllhistoryid,getAllinfoHistory} from"../modules/data.js"
import {historyTitle,infoHistory} from "./history.js"

 export const skipHistory = async () => {
    const capsules = await getAllhistoryid();
    const html = capsules.map((history, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${history.id}">${pag}</a>`;
    });

    return html.join("");
};

    export const FillHistory = async() => {
        document.querySelector("#paginacion").addEventListener("click", async e => {
            e.preventDefault();
            const id = e.target.dataset.id;
            await loadHistory(id);
        });
        const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
        loadHistory(firstCapsuleId);
    }

    const loadHistory = async(id) => {
        const title = await getAllinfoHistory(id);
        await historyTitle (title);

        const History = await getAllinfoHistory(id);
        await infoHistory (History);
    };