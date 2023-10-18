<script lang="ts">
    import Button from "$lib/components/home/Button.svelte";
    let count = 0;
</script>


<div class="w-screen h-screen justify-center items-center flex flex-col gap-4">
    <p>Compteur: <b class="text-red-500">{count}</b></p>
    <div class="flex gap-2">
        <Button onClick={() => count++} label="Ajouter 1"/>
        <Button onClick={() => count = 0} label="Reset" />
    </div>
    
</div>