import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public"
import { MedicalActApi, MutuelleApi } from "$lib";

export const load:PageServerLoad = async ({params}) => {
    
    let hospital_id = parseInt(params.id);

    const medicalActsAPI = new MedicalActApi({basePath: PUBLIC_API_URL, accessToken: "test"});

    let medicalActsData = (await medicalActsAPI.medicalActGet()).data;

    if (!isNaN(hospital_id)) { // PUBLIC_ID_HOSPITAL defined in the .env, so we want to filter the medical acts
        medicalActsData = medicalActsData.filter(medicalAct => medicalAct.hospital_id === hospital_id);
    }

    return {
        medicalActs: medicalActsData,
    };
}