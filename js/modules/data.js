
































































// //CAPSULE
export async function CapsuleData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/capsules');
        const data = await response.json();

        
        const capsule = data[0];

        if (capsule) {
            const info = {
                reuse_count: capsule.reuse_count,
                water_landings: capsule.water_landings,
                land_landings: capsule.land_landings,
                last_update: capsule.last_update,
                launches: capsule.launches,
                serial: capsule.serial,
                status: capsule.status,
                type: capsule.type,
                id: capsule.id
            };
            // console.log(info.type);
        } else {
            console.log('No capsules found :(');
        }
    } catch (error) {
        console.error('Error fetching data:(', error);
    }
}

CapsuleData();



// //STARLINK 
// async function StarlinkData() {
//     try {
//         const response = await fetch('https://api.spacexdata.com/v4/starlink');
//         const data = await response.json();

        
//         const starlink = data[0];

//         if (starlink) {
//             const spaceTrack = starlink.spaceTrack;
//             const info = {
//                 object_name: spaceTrack.OBJECT_NAME,
//                 object_id: spaceTrack.OBJECT_ID,
//                 launch_date: spaceTrack.LAUNCH_DATE,
//                 epoch: spaceTrack.EPOCH,
//                 mean_motion: spaceTrack.MEAN_MOTION,
//                 eccentricity: spaceTrack.ECCENTRICITY,
//                 inclination: spaceTrack.INCLINATION,
//                 apogee: spaceTrack.APOAPSIS,
//                 perigee: spaceTrack.PERIAPSIS,
//                 latitude: starlink.latitude,
//                 longitude: starlink.longitude,
//                 height_km: starlink.height_km,
//                 velocity_kms: starlink.velocity_kms,
//                 id: starlink.id
//             };
//             // console.log(info.object_name);
//         } else {
//             console.log('No starlink data found :(');
//         }
        
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// StarlinkData();



// //CompanyData
// async function CompanyData() {
//     try {
//         const response = await fetch('https://api.spacexdata.com/v4/company');
//         const company = await response.json(); // Obtenemos el objeto completo de la compañía

//         if (company) {
//             const info = {
//                 name: company.name,
//                 founder: company.founder,
//                 founded: company.founded,
//                 employees: company.employees,
//                 vehicles: company.vehicles,
//                 launch_sites: company.launch_sites,
//                 test_sites: company.test_sites,
//                 ceo: company.ceo,
//                 cto: company.cto,
//                 coo: company.coo,
//                 cto_propulsion: company.cto_propulsion,
//                 valuation: company.valuation,
//                 summary: company.summary,
//                 headquarters: {
//                     address: company.headquarters.address,
//                     city: company.headquarters.city,
//                     state: company.headquarters.state
//                 },
//                 links: {
//                     website: company.links.website,
//                     flickr: company.links.flickr,
//                     twitter: company.links.twitter,
//                     elon_twitter: company.links.elon_twitter
//                 }
//             };

//             // console.log(info.name);
//         } else {
//             console.log("Data not found :(");
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// CompanyData();


// //CORES
// async function cores() {
//     try {
//         const response = await fetch('https://api.spacexdata.com/v4/cores');
//         const data = await response.json();

//         if (data.length > 0) {
//             const cores = data[6];  

//             const info = {
//                 block: cores.block,
//                 reuse_count: cores.reuse_count,
//                 rtls_attempts: cores.rtls_attempts,
//                 rtls_landings: cores.rtls_landings,
//                 asds_attempts: cores.asds_attempts,
//                 asds_landings: cores.asds_landings,
//                 last_update: cores.last_update,
//                 launches: cores.launches,
//                 serial: cores.serial,
//                 status: cores.status,
//                 id: cores.id
//             };

//             // console.log(info.status); 
//         } else {
//             console.log("Data not found :(");
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// cores();


// async function StarlinkData() {
//     try {
//         const response = await fetch('https://api.spacexdata.com/v4/rockets');
//         const data = await response.json();

//         const rocket = data[0]; 

//         if (rocket) {
//             const {
//                 height,
//                 diameter,
//                 mass,
//                 first_stage,
//                 second_stage,
//                 engines,
//                 landing_legs,
//                 payload_weights,
//                 flickr_images,
//                 name,
//                 type,
//                 active,
//                 stages,
//                 boosters,
//                 cost_per_launch,
//                 success_rate_pct,
//                 first_flight,
//                 country,
//                 company,
//                 wikipedia,
//                 description,
//                 id
//             } = rocket;

//             const info = {
//                 height_meters: height.meters,
//                 height_feet: height.feet,
//                 diameter_meters: diameter.meters,
//                 diameter_feet: diameter.feet,
//                 mass_kg: mass.kg,
//                 mass_lb: mass.lb,
//                 first_stage: {
//                     thrust_sea_level_kN: first_stage.thrust_sea_level.kN,
//                     thrust_sea_level_lbf: first_stage.thrust_sea_level.lbf,
//                     thrust_vacuum_kN: first_stage.thrust_vacuum.kN,
//                     thrust_vacuum_lbf: first_stage.thrust_vacuum.lbf,
//                     reusable: first_stage.reusable,
//                     engines: first_stage.engines,
//                     fuel_amount_tons: first_stage.fuel_amount_tons,
//                     burn_time_sec: first_stage.burn_time_sec
//                 },
//                 second_stage: {
//                     thrust_kN: second_stage.thrust.kN,
//                     thrust_lbf: second_stage.thrust.lbf,
//                     payloads: {
//                         composite_fairing: {
//                             height_meters: second_stage.payloads.composite_fairing.height.meters,
//                             height_feet: second_stage.payloads.composite_fairing.height.feet,
//                             diameter_meters: second_stage.payloads.composite_fairing.diameter.meters,
//                             diameter_feet: second_stage.payloads.composite_fairing.diameter.feet
//                         },
//                         option_1: second_stage.payloads.option_1
//                     },
//                     reusable: second_stage.reusable,
//                     engines: second_stage.engines,
//                     fuel_amount_tons: second_stage.fuel_amount_tons,
//                     burn_time_sec: second_stage.burn_time_sec
//                 },
//                 engines: {
//                     isp_sea_level: engines.isp.sea_level,
//                     isp_vacuum: engines.isp.vacuum,
//                     thrust_sea_level_kN: engines.thrust_sea_level.kN,
//                     thrust_sea_level_lbf: engines.thrust_sea_level.lbf,
//                     thrust_vacuum_kN: engines.thrust_vacuum.kN,
//                     thrust_vacuum_lbf: engines.thrust_vacuum.lbf,
//                     number: engines.number,
//                     type: engines.type,
//                     version: engines.version,
//                     layout: engines.layout,
//                     engine_loss_max: engines.engine_loss_max,
//                     propellant_1: engines.propellant_1,
//                     propellant_2: engines.propellant_2,
//                     thrust_to_weight: engines.thrust_to_weight
//                 },
//                 landing_legs: {
//                     number: landing_legs.number,
//                     material: landing_legs.material
//                 },
//                 payload_weights: payload_weights.map(weight => ({
//                     id: weight.id,
//                     name: weight.name,
//                     kg: weight.kg,
//                     lb: weight.lb
//                 })),
//                 flickr_images,
//                 name,
//                 type,
//                 active,
//                 stages,
//                 boosters,
//                 cost_per_launch,
//                 success_rate_pct,
//                 first_flight,
//                 country,
//                 company,
//                 wikipedia,
//                 description,
//                 id
//             };

//             console.log(info.name);
//         } else {
//             console.log('No rocket data found :(');
//         }

//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// StarlinkData();



