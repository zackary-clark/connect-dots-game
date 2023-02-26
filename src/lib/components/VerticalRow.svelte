<script lang="ts">
    import Line from "$lib/components/Line.svelte";
    import Box from "$lib/components/Box.svelte";
    import type { Writable } from "svelte/store";

    export let lineRow: Writable<boolean>[];
</script>

<div class="row">
    {#each lineRow as lineClick, index}
        <Line --width="20px" --height="80px" lineClick={lineClick} />
        {#if index < lineRow.length - 1}
            <Box />
        {/if}
    {/each}
</div>

<style>
    .row {
        display: flex;
    }
</style>
