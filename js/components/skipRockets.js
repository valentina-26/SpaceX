import { getRocketNameById, idRocket,getRocketMoreInfoById,IMG} from "../modules/data.js";
import { nameRocket,description,plusInfoRocket3I} from "./Rockets.js";

export const skipRockets = async () => {//pagerockets
    const rockets = await idRocket();
    const html = rockets.map((rocket, index) => {
        const pag = index + 1;
        return `<a href="#" data-id="${rocket.id}">${pag}</a>`;
    });
    
    return html.join("");
}



export const fillrockets = async () => {//setup
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

        const imagenes = await IMG(id)
        console.log(imagenes)
        plusInfoRocket3I (imagenes)

        
    });
}
