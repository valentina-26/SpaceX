//CAPSULE
async function CapsuleData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/capsules');
        const data = await response.json();

        data.forEach(capsule => {
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
            console.log(info);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

CapsuleData();

//STARLINK 
async function StarlinkData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/starlink');
        const data = await response.json();

        // Procesar cada satélite en los datos
        data.forEach(satellite => {
            const spaceTrack = satellite.spaceTrack;
            const info = {
                object_name: spaceTrack.OBJECT_NAME,
                object_id: spaceTrack.OBJECT_ID,
                launch_date: spaceTrack.LAUNCH_DATE,
                epoch: spaceTrack.EPOCH,
                mean_motion: spaceTrack.MEAN_MOTION,
                eccentricity: spaceTrack.ECCENTRICITY,
                inclination: spaceTrack.INCLINATION,
                apogee: spaceTrack.APOAPSIS,
                perigee: spaceTrack.PERIAPSIS,
                latitude: satellite.latitude,
                longitude: satellite.longitude,
                height_km: satellite.height_km,
                velocity_kms: satellite.velocity_kms,
                id: satellite.id
            };
            console.log(info);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

StarlinkData();

//CompanyData
async function CompanyData() {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/company');
        const data = await response.json();

        const info = {
            name: data.name,
            founder: data.founder,
            founded: data.founded,
            employees: data.employees,
            vehicles: data.vehicles,
            launch_sites: data.launch_sites,
            test_sites: data.test_sites,
            ceo: data.ceo,
            cto: data.cto,
            coo: data.coo,
            cto_propulsion: data.cto_propulsion,
            valuation: data.valuation,
            summary: data.summary,
            headquarters: {
                address: data.headquarters.address,
                city: data.headquarters.city,
                state: data.headquarters.state
            },
            links: {
                website: data.links.website,
                flickr: data.links.flickr,
                twitter: data.links.twitter,
                elon_twitter: data.links.elon_twitter
            }
        };

        console.log(info);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

CompanyData();

