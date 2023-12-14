<script lang="ts">
    import TextWithLabel from "$lib/components/TextWithLabel.svelte";
    import { getTimeOfDay } from "$lib/utils/date";
    import type { ChangeEventHandler } from "svelte/elements";
    import type { PageData } from "./$types";
    import { PUBLIC_API_URL } from "$env/static/public";
    import { onMount } from "svelte";

    export let data: PageData;

    const medicalAct = data.medicalAct;
    const patient = data.users.filter(user => user.id === medicalAct.user_id)[0];
    const mutuelle = data.mutuelles.filter(mutuelle => mutuelle.id === patient.mutuelle_id)[0];

    const date = new Date(medicalAct.date_prevue ?? "").toLocaleDateString('fr-FR');
    
    let fileUploadSuccess = false;
    let fileUploadError = false;

    let results:Array<any> = [];

    onMount(() => {
        (async () => {
            const response = await fetch(`${PUBLIC_API_URL}/medical_act/${medicalAct.id}/results`);
            const data = await response.json();
            results = [...data];
        })();
    })

    const submitFile:ChangeEventHandler<HTMLInputElement> = (e) => {
        //@ts-ignore
        const file = e.target?.files[0];
        const filereader = new FileReader();
        filereader.readAsDataURL(file);
        filereader.onload = () => {
            const base64 = filereader.result;
            fetch(`${PUBLIC_API_URL}/medical_act/${medicalAct.id}/results`, {
                method: 'POST',
                body: JSON.stringify({
                    medical_act_id: medicalAct.id,
                    file_name: `${crypto.randomUUID()}.pdf`,
                    file_data: base64
                }),
            })
            .then((resp:Response) => {
                if (resp.ok) {
                    fileUploadSuccess = true;
                    return;
                }
                throw new Error('File sending not successful');

            })
            .catch(() => fileUploadError = true);
        }
        filereader.onerror = function (error) {
            console.log('Error: ', error);
            fileUploadError = true;
        };
    }

</script>

<main class="p-8 bg-slate-100 w-screen min-h-screen flex flex-col gap-4 items-center">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <TextWithLabel 
            label="Patient"
            value={patient.first_name + ' ' + patient.name}
        />
        <TextWithLabel 
            label="Mutuelle"
            value={mutuelle.name ?? ""}
        />
        <TextWithLabel 
            label="Date"
            value={date}
        />
        <TextWithLabel 
            label="Heure"
            value={getTimeOfDay(new Date(medicalAct.date_prevue ?? ""))}
        />
        <TextWithLabel 
            label="Confirmé"
            value={medicalAct.confirmation_rdv ? 'Oui' : 'Non'}
        />
        <div class="grid buffer"></div>
        <TextWithLabel 
            label="Examen"
            value={medicalAct.confirmation_rdv ? 'Oui' : 'Non'}
        />
        <TextWithLabel 
            label="Metadata 1"
            value={medicalAct.confirmation_rdv ? 'Oui' : 'Non'}
        />
        <TextWithLabel 
            label="Metadata 2"
            value={medicalAct.confirmation_rdv ? 'Oui' : 'Non'}
        />
    </div>
    <div class="flex flex-col gap-1">
        {#if fileUploadSuccess}
            <p class="text-sm md:text-md lg:text-lg text-green-500">Envoie du fichier réussi.</p>
        {:else if fileUploadError}
            <p class="text-sm md:text-md lg:text-lg text-red-500">Échec de l'envoie du fichier</p>
        {/if}
        <input 
            class={`file-input file-input-bordered file-input-xs sm:file-input-sm md:file-input-md max-w-sm ${fileUploadSuccess ? 'border-green-500' : fileUploadError && 'border-red-500'}`}
            type="file"
            accept=".pdf"
            on:change={submitFile}
        >
    </div>
    {#if results.length > 0}
        <h3>Résultats envoyés:</h3>
        <ul class="list list-disc">
            {#each results as result}
                <li>{result.file_name}</li>
            {/each}
        </ul>
    {/if}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <TextWithLabel 
            label="Montant"
            value={medicalAct.montant_total?.toString() ?? ""}
        />
        <TextWithLabel 
            label="Pris en charge - Patient"
            value={medicalAct.prise_en_charge_patient?.toString() ?? ""}
        />
        <TextWithLabel 
            label="Pris en charge - Hôpital"
            value={medicalAct.prise_en_charge_hopital?.toString() ?? ""}
        />
        <TextWithLabel 
            label="Pris en charge - Mutuelle"
            value={medicalAct.prise_en_charge_mutuelle?.toString() ?? ""}
        />
    </div>
</main>