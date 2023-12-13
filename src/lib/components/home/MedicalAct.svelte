<script lang="ts">
    import type { MedicalAct, User } from "$lib/models";
    import Chevron from "$lib/assets/icons/chevron.svg";

    import { goto } from '$app/navigation';
    import { getTimeOfDay } from "$lib/utils/date";

    export let medicalAct: MedicalAct;
    export let patient: User;
    
    //@ts-ignore
    const date = new Date(medicalAct.date_prevue);
    
    const timeOfDay =  getTimeOfDay(date);

    $: patientName = (patient?.first_name === undefined && patient?.name === undefined) ? "Inconnu" : `${patient.first_name} ${patient.name}`;
</script>

<div class="w-full flex flex-col rounded-lg h-fit bg-white shadow-sm">
    <div class="h-8 bg-blue-500 w-full px-2 flex justify-between items-center text-white rounded-t-lg">
        <p>{date.toLocaleDateString()}</p>
        <p>{timeOfDay}</p>
    </div>
    <div class="flex">
        <div class="flex flex-col p-4 w-11/12">
            <p class="font-bold">{patientName}</p>
            {#if medicalAct.metadata1 && medicalAct.metadata2}
                <p>Examen: {medicalAct.metadata1}, {medicalAct.metadata2}</p>
            {/if}
        </div>
        <button
            on:click={() => goto(`/medical-act/${medicalAct.id}`)} 
            on:keyup={() => goto(`/medical-act/${medicalAct.id}`)} 
            class="w-1/12 border-l border-solid border-black/20 flex justify-center items-center hover:bg-slate-50 duration-200 cursor-pointer hover:pl-2"
        >
            <img src={Chevron} alt="chevrons" class="go to medical act">
        </button>
    </div>
</div>