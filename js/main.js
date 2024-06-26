import {IdRocket,NameRocket,DescriptionRocket,HeightRocket,DiameterRocket,CostRocket,fisrtStage,SecondStage} from "./modules/data.js"


addEventListener("DOMContentLoaded", async (e) => {
    let RocketID =  await IdRocket()
    console.log(RocketID);

    let Rocketname =  await NameRocket()
    console.log(Rocketname);
    
    let Rocketdescript =  await DescriptionRocket()
    console.log(Rocketdescript);

    let Rocketheight =  await HeightRocket()
    console.log(Rocketheight);

    let Rocketdiameter =  await DiameterRocket()
    console.log(Rocketdiameter);

    let Rockecost =  await CostRocket()
    console.log(Rockecost);

    let RocketFirstSt =  await fisrtStage()
    console.log(RocketFirstSt);

    let RocketSecondSt =  await SecondStage()
    console.log(RocketSecondSt);


    
})



// import { paginationRockets, setupPagination } from "./components/paginación.js";

// document.addEventListener("DOMContentLoaded", async () => {
//     document.querySelector("#paginacion").innerHTML = await paginationRockets();    
    
//     setupPagination();
// });