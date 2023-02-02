<script lang="ts">
    import Line from "$lib/components/Line.svelte";
    import Box from "$lib/components/Box.svelte";

    export let clickedRow: boolean[];
</script>

<div class="row">
    {#each clickedRow as clicked, index}
        <Line --width="20px" --height="80px" />
        {#if index < clickedRow.length - 1}
            <Box />
        {/if}
    {/each}
</div>

<style>
    .row {
        display: flex;
    }
</style>
