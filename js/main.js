import { paginationRockets, setupPagination } from "./components/skip.js";


document.addEventListener("DOMContentLoaded", async () => {
    document.querySelector("#paginacion").innerHTML = await paginationRockets();
        
    setupPagination();
});