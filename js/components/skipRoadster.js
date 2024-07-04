import { getAllinforoadster } from "../modules/data.js";
import { RoadsterTitle, infoRoadster, plusInfoRocket3I } from "./roadster.js";

export const skipRoadster = async () => {
    return `<a href="#" data-id="5eb75f0842fea42237d7f3f4">1</a>`; 
};

export const FillRoadster = async () => {
    try {
        await loadRoadsterData("5eb75f0842fea42237d7f3f4"); 
    } catch (error) {
        console.error("Error initializing Roadster fill:", error);
    }
};

const loadRoadsterData = async id => {
    try {
        const title = await getAllinforoadster(id);
        await RoadsterTitle(title);

        const roadsterInfo = await getAllinforoadster(id);
        await infoRoadster(roadsterInfo);

        const images = await getAllinforoadster(id);
        plusInfoRocket3I(images);
    } catch (error) {
        console.error("Error loading Roadster data:", error);
    }
};
