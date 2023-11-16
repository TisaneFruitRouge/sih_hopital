<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;

    let medicalActs = data.medicalActs;
    let users = data.users;
    console.log(medicalActs)
    let filterValue: string = "";

    const filterByPatients = (filter: string) => {
        if (filter === "") {
            return medicalActs;
        } else {
            return medicalActs.filter(medicalAct => {
                let user = users.filter(user => user.id === medicalAct.user_id)[0];

                return `${user.first_name} ${user.name}`.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
            });
        }
    }

    $: filteredMedicalActs = filterByPatients(filterValue);

    const getTime = (date: Date) => {
        let h = date.getHours();
        let m = date.getMinutes();

        return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}`
    }
</script>


<div class="w-screen h-screen flex flex-col gap-4 p-4 items-center">
    <input
        class="input input-bordered w-full max-w-md" 
        type="text" 
        bind:value={filterValue} 
        placeholder="Nom du patient"
    >
    <table class="table table-zebra">
        <thead>
            <tr>
              <th>Date</th>
              <th>Heure</th>
              <th>Examen</th>
              <th>Patient</th>
              <th>Confirmé</th>
            </tr>
        </thead>
        <tbody>
            {#each filteredMedicalActs as medicalAct}
                <tr>
                    <th>{medicalAct.date_prevue.toLocaleDateString('en-GB')}</th>
                    <th>{getTime(medicalAct.date_prevue)}</th>
                    <th>{medicalAct.id}</th>
                    <th>{medicalAct.user_id}</th>
                    <th>{medicalAct.confirmation_rdv ? '✅ oui' : '❌ non'}</th>
                </tr>
            {/each}
        </tbody>
    </table>
</div>