import {getRoverImages} from './RoversApiFetch';


test('check function returns JSON data', async () => {

    const body = {
        photos: [
            {
                id: 102685,
                sol: 1004,
                camera: {
                    id: 20,
                    name: "FHAZ",
                    rover_id: 5,
                    full_name: "Front Hazard Avoidance Camera"
                },
                img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",
                earth_date: "2015-06-03",
                rover: {
                    id: 5,
                    name: "Curiosity",
                    landing_date: "2012-08-06",
                    launch_date: "2011-11-26",
                    status: "active",
                    max_sol: 2540,
                    max_date: "2019-09-28",
                    total_photos: 366206,
                    cameras: [
                        {
                            name: "FHAZ",
                            full_name: "Front Hazard Avoidance Camera"
                        },
                        {
                            name: "NAVCAM",
                            full_name: "Navigation Camera"
                        },
                        {
                            name: "MAST",
                            full_name: "Mast Camera"
                        },
                        {
                            name: "CHEMCAM",
                            full_name: "Chemistry and Camera Complex"
                        },
                        {
                            name: "MAHLI",
                            full_name: "Mars Hand Lens Imager"
                        },
                        {
                            name: "MARDI",
                            full_name: "Mars Descent Imager"
                        },
                        {
                            name: "RHAZ",
                            full_name: "Rear Hazard Avoidance Camera"
                        }

                    ]
                }
            }
        ]
    };

    const fakeResponse = Promise.resolve({
        status: 200,
        json: () => Promise.resolve(body)
    });

    //@ts-ignore
    jest.spyOn(global, 'fetch').mockImplementation((url: string) => fakeResponse);

    const roverImages = await getRoverImages("2015-06-03");

    expect(roverImages.img_src).toBe("http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG");
});