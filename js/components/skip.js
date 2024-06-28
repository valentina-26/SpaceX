import { getRocketNameById, idRocket,descriptionRocket,getRocketMoreInfoById } from "../modules/data.js";
import { nameRocket,description} from "../components/Rockets.js";


export const paginationRockets = async () => {
    const rockets = await idRocket();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}



export const setupPagination = async () => {
    document.querySelector("#paginacion").addEventListener("click", async (e) => {
        e.preventDefault();
        const id = e.target.dataset.id;

        // Rockets
        const rocketName = await getRocketNameById(id)
        console.log(rocketName)
        await nameRocket(rocketName);

        const rocketDescrip = await getRocketMoreInfoById(id)
        console.log(rocketDescrip)
        description (rocketDescrip)
        
    });
}