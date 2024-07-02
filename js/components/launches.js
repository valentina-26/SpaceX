export const titleLaunches = async(info)  =>{
    document.querySelector("#title3").innerHTML = info.name;
}

export const InfoLaunches = async (descrip) => {

}



export const plusInfoRocket3I = async (plusInfo) => {
    // console.log(plusInfo.flickr_images)
    const img = async () => {
        let plantilla = '';
        let imagenes = plusInfo.flickr.original;

        imagenes.forEach(element => {
        
            plantilla +=/*html*/ `
            <div class="carousel">
                <img src="${element}" referrerpolicy="no-referrer">
            </div> 
            `;
        
        });
        return plantilla;
    }

    // console.log(await img());

    document.querySelector("#imagen").innerHTML = await img();
};