<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageData } from "./$types";

    export let data:PageData;
</script>

<main class="grid grid-cols-1 md:grid-cols-2 p-8 gap-4">
    {#each data.hospitals as hospital}
        <button 
            class="flex justify-between p-4 bg-white rounded-md shadow-md border border-solid border-black/20 hover:cursor-pointer"
            on:click={() => goto(`/hospital/${hospital.id}`)} 
            on:keyup={() => goto(`/hospital/${hospital.id}`)}    
        >
            <span class="font-bold">{hospital.name}</span>
            <span class="italic">{hospital.id}</span>
        </button>
    {/each}
</main>