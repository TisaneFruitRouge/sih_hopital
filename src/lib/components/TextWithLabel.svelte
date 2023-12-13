<script lang="ts">
    export let value: string;
    export let label: string;
</script>

<div class="flex flex-col gap-1">
    <label class="italic text-gray-500" for={label}>{label}</label>
    <p 
        class="p-2 border border-solid border-gray-300 rounded bg-white"
        id={label}
    >
        {value}
    </p>
</div>