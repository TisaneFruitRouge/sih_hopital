<script lang="ts">
    export let value: string;
    export let label: string;
    export let onChange: (value: string) => void;

    const setChange = (e:any) => {
        onChange(e.target.value);
    }
</script>

<div class="flex flex-col gap-1">
    <label class="italic text-gray-500" for={label}>{label}</label>
    <textarea 
        class="p-2 border border-solid border-gray-300 rounded bg-white"
        id={label}
        on:change={setChange}
        value={value}
    />
</div>