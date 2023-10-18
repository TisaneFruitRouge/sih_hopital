<script lang="ts">
    export let onClick: () => void;
    export let label: string;
</script>

<button 
    class="border-solid border-black border hover:bg-gray-100 duration-200 p-2" 
    on:click={onClick}
>
    {label}
</button>