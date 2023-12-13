<script lang="ts">
    import { page } from '$app/stores';  
    import Settings from "$lib/assets/icons/settings.svg";
</script>

<div class="bg-blue-800 w-screen text-white h-12 flex justify-between items-center p-8">
    <div></div>
    <h1 class="text-2xl font-bold text-center">
        {#if $page.url.pathname === '/'}
            Rendez-vous
        {:else if $page.url.pathname.includes('medical-act')}
            Informations du rendez-vous
        {:else if $page.url.pathname.includes('settings')}
            Sélection de l'hôpital
        {/if}
    </h1>
    <a href="/settings">
        <img class="invert" src={Settings} alt="settings">
    </a>
</div>