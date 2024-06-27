import {IdRocket,IDcapsule,NameRocket,DescriptionRocket,HeightRocket,DiameterRocket,CostRocket,fisrtStage,SecondStage} from "./modules/data.js"


addEventListener("DOMContentLoaded", async (e) => {
    document.querySelector("#paginacion").innerHTML = await paginationRockets();    
    
    setupPagination();
})



// import { paginationRockets, setupPagination } from "./components/paginación.js";

// document.addEventListener("DOMContentLoaded", async () => {
//     document.querySelector("#paginacion").innerHTML = await paginationRockets();    
    
//     setupPagination();
// });