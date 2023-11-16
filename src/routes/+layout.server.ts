import type { LayoutServerLoad } from "./$types";
import { PUBLIC_ID_HOSPITAL, PUBLIC_API_URL } from "$env/static/public"
import { HospitalApi, MedicalActApi, UserApi } from "$lib";

export const load:LayoutServerLoad = async () => {
    
    let hospital_id = parseInt(PUBLIC_ID_HOSPITAL);

    const medicalActsAPI = new MedicalActApi({basePath: PUBLIC_API_URL, accessToken: "test"});
    const hopitalAPI = new HospitalApi({basePath: PUBLIC_API_URL, accessToken: "test"});
    const userAPI = new UserApi({basePath: PUBLIC_API_URL, accessToken: "test"});

    let medicalActsData = (await medicalActsAPI.medicalActGet()).data;

    if (!isNaN(hospital_id)) { // PUBLIC_ID_HOSPITAL defined in the .env, so we want to filter the medical acts
        medicalActsData = medicalActsData.filter(medicalAct => medicalAct.hospitalId === hospital_id);
    }

    const usersData = (await userAPI.userGet()).data;
    const hospitalData = (await hopitalAPI.hospitalGet()).data;

    return {
        medicalActs: medicalActsData,
        users: usersData,
        hospitals: hospitalData
    };
}