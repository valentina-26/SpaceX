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
            "_id": id
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
            "_id": id
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
            "_id": id
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
            "_id": id
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
            "_id": id
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
            "_id": id
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
            "_id": id
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

export const Typecapsule = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9e2c5bf35918ed873b2664"
            },
            "options":{
            "select":"type"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs } = await res.json();
    return docs
};

export const Statuscapsule = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": 
            "5e9e2c5bf35918ed873b2664"
            },
            "options":{
            "select":"status"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs } = await res.json();
    return docs
};


export const LastUpdatecapsule = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": 
            "5e9e2c5bf35918ed873b2664"
            },
            "options":{
            "select":"last_update"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs } = await res.json();
    return docs
};

export const serialcapsule = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": 
            "5e9e2c5bf35918ed873b2664"
            },
            "options":{
            "select":"serial"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs } = await res.json();
    return docs
};

//COMPANY
// export const NameCompany = async () => {
//     let config = {
//         headers: {
//             "content-type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify({
//             "query": {
//             "id": 
//             "5e9e2c5bf35918ed873b2664"
//             },
//             "options":{
//             "select":"serial"
//             }
//         })
//     };

//     let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
//     let { docs } = await res.json();
//     return docs
// };


// export const NameCompany = async () => {
//     let config = {
//         headers: {
//             "content-type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify({
//             "query": {
//             "id": 
//             "5e9e2c5bf35918ed873b2664"
//             },
//             "options":{
//             "select":"serial"
//             }
//         })
//     };

//     let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
//     let { docs } = await res.json();
//     return docs
// };

//CORES
export const IdCores = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {},
            "options": {
                "select": "id"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config);
    let { docs } = await res.json();
    return docs
};

export const serialCores = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9e289df35918033d3b2623"
            },
            "options": {
                "select": "serial"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config);
    let { docs } = await res.json();
    return docs
};

export const StatusCores = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
              "id": "5e9e289df35918033d3b2623"
            },
            "options": {
                "select": "status"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config);
    let { docs } = await res.json();
    return docs
};

export const lastUpdtCores = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9e289df35918033d3b2623"
            },
            "options": {
                "select": "last_update"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config);
    let { docs } = await res.json();
    return docs
};


//SHIPS
export const IdShips = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
                "select": "id"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};

export const NameShips = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5ea6ed2d080df4000697c901"
            },
            "options": {
                "select": "name"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};

export const IMGShips = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5ea6ed2d080df4000697c901"
            },
            "options": {
                "select":  "image"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};

export const LegacyidShips = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5ea6ed2d080df4000697c901"
            },
            "options": {
                "select":  "legacy_id"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};

export const HomePortShips = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5ea6ed2d080df4000697c901"
            },
            "options": {
                "select":  "home_port"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};

export const KGShips = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5ea6ed2d080df4000697c901"
            },
            "options": {
                "select":  "mass_kg"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};

export const TypeShips = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5ea6ed2d080df4000697c901"
            },
            "options": {
                "select":  "type"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};


//PAYLOADS

export const Idpayloads = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
                "select":  "id"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};


export const Namepayloads = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5ea6ed2d080df4000697c903"
            },
            "options": {
                "select":  "name"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};

export const Typepayloads = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5ea6ed2d080df4000697c903"
            },
            "options": {
                "select":  "type"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
    let { docs } = await res.json();
    return docs
};

// export const RefeSispayloads = async () => {
//     let config = {
//         headers: {
//             "content-type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify({
//             "query": {
//             "id":"5ea6ed2d080df4000697c903"
//             },
//             "options": {
//                 "select":  "type"
//             }
//         })
//     };

//     let res = await fetch("https://api.spacexdata.com/v4/ships/query", config);
//     let { docs } = await res.json();
//     return docs
// };

//Starlink
export const Idstarlink = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
            "select":"id"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};


export const Commentstarlink = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5eed770f096e59000698560d"
            },
            "options": {
            "select":"spaceTrack.COMMENT"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};

export const CreaDatestarlink = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5eed770f096e59000698560d"
            },
            "options": {
            "select":"spaceTrack.CREATION_DATE"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};

export const ObNamestarlink = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5eed770f096e59000698560d"
            },
            "options": {
            "select":"spaceTrack.OBJECT_NAME"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};

export const CentNamestarlink = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5eed770f096e59000698560d"
            },
            "options": {
            "select":"spaceTrack.CENTER_NAME"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};

export const LaunDatetarlink = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5eed770f096e59000698560d"
            },
            "options": {
            "select":"spaceTrack.LAUNCH_DATE"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};

export const Sitestarlink = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5eed770f096e59000698560d"
            },
            "options": {
            "select":"spaceTrack.SITE"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};

export const Versionstarlink = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5eed770f096e59000698560d"
            },
            "options": {
            "select":"version"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};

export const Launchstarlink = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id":"5eed770f096e59000698560d"
            },
            "options": {
            "select":"launch"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/starlink/query", config);
    let { docs } = await res.json();
    return docs
};

//ROADSTER
export const IMGroadster = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5eb75f0842fea42237d7f3f4"
            },
            "options": {
            "select":"flickr_images"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/roadster/query", config);
    let { docs } = await res.json();
    return docs
};

export const Nameroadster = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5eb75f0842fea42237d7f3f4"
            },
            "options": {
            "select":"name"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/roadster/query", config);
    let { docs } = await res.json();
    return docs
};

export const detailsroadster = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5eb75f0842fea42237d7f3f4"
            },
            "options": {
            "select":"details"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/roadster/query", config);
    let { docs } = await res.json();
    return docs
};


export const KGroadster = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5eb75f0842fea42237d7f3f4"
            },
            "options": {
            "select":"launch_mass_kg"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/roadster/query", config);
    let { docs } = await res.json();
    return docs
};

export const OrbTyperoadster = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5eb75f0842fea42237d7f3f4"
            },
            "options": {
            "select":"orbit_type"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/roadster/query", config);
    let { docs } = await res.json();
    return docs
};

export const LaunDateroadster = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5eb75f0842fea42237d7f3f4"
            },
            "options": {
            "select":"launch_date_utc"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/roadster/query", config);
    let { docs } = await res.json();
    return docs
};

//CREW
export const nameCrew = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
            "select":"name"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config);
    let { docs } = await res.json();
    return docs
};

export const AgencyCrew = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
            "select":"agency"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config);
    let { docs } = await res.json();
    return docs
};

export const IMGrew = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
            "select":"image"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config);
    let { docs } = await res.json();
    return docs
};

export const WIKICrew = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
            "select":"wikipedia"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config);
    let { docs } = await res.json();
    return docs
};

export const launchesCrew = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
            "select":"launches"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config);
    let { docs } = await res.json();
    return docs
};

export const statusCrew = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
            "select":"status"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/crew/query", config);
    let { docs } = await res.json();
    return docs
};

//DRAGON
export const IdDragon = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
            "select":"id"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};

export const TypeDragon = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d058759b1ff74a7ad5f8f"
            },
            "options": {
            "select":"type"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};

export const IMGDragon = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d058759b1ff74a7ad5f8f"
            },
            "options": {
            "select":"flickr_images"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};

export const FirstFlightDragon = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d058759b1ff74a7ad5f8f"
            },
            "options": {
            "select":"first_flight"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};

export const descriptionDragon = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d058759b1ff74a7ad5f8f"
            },
            "options": {
            "select":"description"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};

export const materialDragon = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d058759b1ff74a7ad5f8f"
            },
            "options": {
            "select":"heat_shield.material"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};


export const KGDragon = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5e9d058759b1ff74a7ad5f8f"
            },
            "options": {
            "select":"launch_payload_mass.kg"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};

//HISTORY EVENTS
export const IDhistory= async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            },
            "options": {
            "select":"id"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};

export const titlehistory= async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5f6fb2cfdcfdf403df37971e"},
            "options": {
            "select":"title"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};

export const date1history= async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5f6fb2cfdcfdf403df37971e"},
            "options": {
            "select":"event_date_utc"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
};

export const date2history= async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5f6fb2cfdcfdf403df37971e"},
            "options": {
            "select":"event_date_unix"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
}

export const detailshistory= async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
            "id": "5f6fb2cfdcfdf403df37971e"},
            "options": {
            "select":"details"
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs } = await res.json();
    return docs
}















