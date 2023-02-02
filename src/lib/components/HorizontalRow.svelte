<script lang="ts">
    import Line from "$lib/components/Line.svelte";
    import Dot from "$lib/components/Dot.svelte";

    export let clickedRow: boolean[];
</script>

<div class="row">
    <Dot />
    {#each clickedRow as clicked}
        <Line --width="80px" --height="20px" />
        <Dot />
    {/each}
</div>

<style>
    .row {
        display: flex;
    }
</style>
