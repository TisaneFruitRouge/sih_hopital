<script lang="ts">
    import MedicalAct from "$lib/components/home/MedicalAct.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    let medicalActs = data.medicalActs;
    let users = data.users;

    $: comingMedicalActs = medicalActs.filter(act => {
        const now = new Date();
        const date = new Date(act.date_prevue ?? "");
        const comingRDV = date > now;
        return comingRDV && !act.confirmation_rdv;
    });

    $: confirmedMedicalActs = medicalActs.filter(act => {
        const now = new Date();
        const date = new Date(act.date_prevue ?? "");
        const comingRDV = date > now;
        return comingRDV && act.confirmation_rdv;
    });

    $: pastMedicalActs = medicalActs.filter(act => {
        const now = new Date();
        const date = new Date(act.date_prevue ?? "");
        return date <= now;
    }); 

    let currentTab = 0;
    let setCurrentTab = (index: 0 | 1 | 2) => {
        currentTab = index;
    }
</script>


<div class="w-screen h-screen bg-slate-100">
    <div role="tablist" class="tabs tabs-bordered tabs-lifted bg-white">
        <div 
            tabindex={0} 
            on:click={() => setCurrentTab(0)} 
            on:keyup={() => setCurrentTab(0)}
            role="tab" 
            class={`tab ${currentTab === 0 && 'tab-active'}`}
        >
            À venir
        </div>
        <div 
            tabindex={0} 
            on:click={() => setCurrentTab(1)} 
            on:keyup={() => setCurrentTab(1)}
            role="tab" 
            class={`tab ${currentTab === 1 && 'tab-active'}`}
        >
            Confirmés
        </div>
        <div 
            tabindex={0} 
            on:click={() => setCurrentTab(2)} 
            on:keyup={() => setCurrentTab(2)}
            role="tab" 
            class={`tab ${currentTab === 2 && 'tab-active'}`}
        >
            Passés
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {#if currentTab === 0}
            {#each comingMedicalActs as medicalAct}
                <MedicalAct {medicalAct} patient={users.filter(user => user.id === medicalAct.user_id)[0]}/>
            {/each}
        {:else if currentTab === 1}
            {#each confirmedMedicalActs as medicalAct}
                <MedicalAct {medicalAct} patient={users.filter(user => user.id === medicalAct.user_id)[0]}/>
            {/each}
        {:else}
            {#each pastMedicalActs as medicalAct}
                <MedicalAct {medicalAct} patient={users.filter(user => user.id === medicalAct.user_id)[0]}/>
            {/each}
        {/if}
    </div>
</div>