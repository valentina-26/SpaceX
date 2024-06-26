//ROCKETS

export const IdRocket = async () => {
    const config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "query": {},
            "options": {
                "select": "id"
            }
        })
    };

    const res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    const { docs } = await res.json();
    // console.log(docs);
    return docs;
}


export const NameRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "_id": "5e9d0d95eda69955f709d1eb"
            },
            "options":{
            "select":"description"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};


export const DescriptionRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "_id": "5e9d0d95eda69955f709d1eb"
            },
            "options":{
            "select":"description"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};

export const HeightRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d0d95eda69955f709d1eb"
            },
            "options":{
            "select":"height"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};


export const DiameterRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d0d95eda69955f709d1eb"
            },
            "options":{
            "select":"diameter"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};

export const CostRocket = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d0d95eda69955f709d1eb"
            },
            "options":{
            "select":"cost_per_launch"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};

export const fisrtStage = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d0d95eda69955f709d1eb"
            },
            "options":{
            "select":"first_stage.reusable first_stage.fuel_amount_tons" 
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};

export const SecondStage = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d0d95eda69955f709d1eb"
            },
            "options":{
            "select":"second_stage.reusable second_stage.fuel_amount_tons" 
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs } = await res.json();
    return docs
};

//CAPSULES
export const IDcapsule = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options":{
            "select": "id"
            
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs } = await res.json();
    return docs
};
