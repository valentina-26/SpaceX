import { getCapsulasAllId,getInfoCapsules } from "../modules/data.js";
import{InfoCapsules} from "./capsules.js"


export const skipCapsules = async () => {
    const capsules = await getCapsulasAllId();
    const html = capsules.map((capsules, index) => {
        const pag = index + 1;
        return `<a href="#${pag}" data-id="${capsules.id}">${pag}</a>`;
    });

    return html.join("");
};
        
    export const FillCapsules = async() => {
        document.querySelector("#pagination").addEventListener("click", async e => {
            e.preventDefault();
            const id = e.target.dataset.id;
            await loadCapsule(id);
        });
        const firstCapsuleId = document.querySelector("#pagination").querySelector("a").dataset.id;
        loadCapsule(firstCapsuleId);
    }
    
    const loadCapsule = async(id) => {
    
        const capsuleInfo = await getInfoCapsules(id);
    
        await InfoCapsules(capsuleInfo);
    };