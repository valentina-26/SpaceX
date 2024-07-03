import {getInfoCompany} from"../modules/data.js"
import {CompanyTitle,infoCompany} from "./company.js"

export const skipComapany = async () => {
    return `<a href="#" data-id="5eb75edc42fea42237d7f3ed">1</a>`; 
};

export const FillComapany = async () => {
    try {
        await loadRoadsterData("5eb75edc42fea42237d7f3ed");
    } catch (error) {
        console.error("Error initializing Roadster fill:", error);
    }
};

const loadRoadsterData = async id => {
    try {
        const title = await getInfoCompany(id);
        await CompanyTitle(title);

        const roadsterInfo = await getInfoCompany(id);
        await infoCompany(roadsterInfo);


    } catch (error) {
        console.error("Error loading Roadster data:", error);
    }
};
