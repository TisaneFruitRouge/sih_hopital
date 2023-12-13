import type { LayoutServerLoad } from "./$types";
import { PUBLIC_API_URL } from "$env/static/public"
import { HospitalApi, MutuelleApi, UserApi } from "$lib";

export const load:LayoutServerLoad = async () => {

    const hopitalAPI = new HospitalApi({basePath: PUBLIC_API_URL, accessToken: "test"});
    const userAPI = new UserApi({basePath: PUBLIC_API_URL, accessToken: "test"});
    const mututelleAPI = new MutuelleApi({basePath: PUBLIC_API_URL, accessToken: 'test'});

    

    const usersData = (await userAPI.userGet()).data;
    const hospitalData = (await hopitalAPI.hospitalGet()).data;
    const mutuellesData = (await mututelleAPI.mutuelleGet()).data;

    return {
        users: usersData,
        hospitals: hospitalData,
        mutuelles: mutuellesData
    };
}