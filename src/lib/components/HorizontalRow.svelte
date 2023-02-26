<script lang="ts">
    import Line from "$lib/components/Line.svelte";
    import Dot from "$lib/components/Dot.svelte";
    import type { Writable } from "svelte/store";

    export let lineRow: Writable<boolean>[];
</script>

<div class="row">
    <Dot />
    {#each lineRow as lineClick}
        <Line --width="80px" --height="20px" lineClick={lineClick} />
        <Dot />
    {/each}
</div>

<style>
    .row {
        display: flex;
    }
</style>
