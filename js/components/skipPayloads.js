import {getAllpayloadsid,getAllinfopayloads} from"../modules/data.js"
import {payloadsTitle,infoPayloads} from "./Payloads.js"

 export const skipPayloads = async () => {
    const capsules = await getAllpayloadsid();
    const html = capsules.map((Payloads, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${Payloads.id}">${pag}</a>`;
    });

    return html.join("");
};

    export const FillPayloads = async() => {
        document.querySelector("#paginacion").addEventListener("click", async e => {
            e.preventDefault();
            const id = e.target.dataset.id;
            await loadPayloads(id);
        });
        const firstCapsuleId = document.querySelector("#paginacion").querySelector("a").dataset.id;
        loadPayloads(firstCapsuleId);
    }

    const loadPayloads = async(id) => {
        const title = await getAllinfopayloads(id);
        await payloadsTitle (title);

        const History = await getAllinfopayloads(id);
        await infoPayloads (History);
    };