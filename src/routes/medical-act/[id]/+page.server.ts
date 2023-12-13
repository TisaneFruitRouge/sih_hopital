import type { PageServerLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public"
import { MedicalActApi } from "$lib";

export const load:PageServerLoad = async ({params}) => {
    
    let medical_act_id = parseInt(params.id);

    const medicalActsAPI = new MedicalActApi({basePath: PUBLIC_API_URL, accessToken: "test"});

    const medicalActsData = (await medicalActsAPI.medicalActGet()).data;
    
    const medicalAct = medicalActsData.filter(act => act.id === medical_act_id)[0];

    return {
        medicalAct: medicalAct,
    };
}