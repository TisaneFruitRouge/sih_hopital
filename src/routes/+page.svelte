<script lang="ts">
    import type { LayoutData } from "./$types";

    export let data: LayoutData;

    let medicalActs = data.medicalActs;
    let users = data.users;
    let filterValue: string = "";

    console.log(medicalActs);

    const filterByPatients = (filter: string) => {
        if (filter === "") {
            return medicalActs;
        } else {
            return medicalActs.filter(medicalAct => {
                let user = users.filter(user => user.id === medicalAct.userId)[0];

                return `${user.firstName} ${user.name}`.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
            });
        }
    }

    $: filteredMedicalActs = filterByPatients(filterValue);

    const getTime = (date: Date | undefined) => {
        if (date === undefined) {
            return "";
        }

        let h = date.getHours();
        let m = date.getMinutes();

        return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}`
    }

    const getDate = (date: Date | undefined) => {
        if (date === undefined) {
            return ""
        }

        return date.toLocaleDateString('en-GB');
    }
</script>


<div class="w-screen h-screen flex flex-col gap-4 p-4 items-center">
    <div class="w-full max-w-md flex flex-row">
        <input
            class="input input-bordered grow gap-2" 
            type="text" 
            bind:value={filterValue} 
            placeholder="Nom du patient"
        >
        <select 
            name="select-hospital" 
            id="select-hospital" 
            class="select select-bordered"
            placeholder="Hôpital"
        >

        </select>
    </div>
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
                    <th>{getDate(medicalAct.datePrevue)}</th>
                    <th>{getTime(medicalAct.datePrevue)}</th>
                    <th>{medicalAct.id}</th>
                    <th>{medicalAct.userId}</th>
                    <th>{medicalAct.confirmationRdv ? '✅ Oui' : '❌ Non'}</th>
                </tr>
            {/each}
        </tbody>
    </table>
</div>