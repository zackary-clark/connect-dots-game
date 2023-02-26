<script>
    import HorizontalRow from "$lib/components/HorizontalRow.svelte";
    import VerticalRow from "$lib/components/VerticalRow.svelte";
    import { generateBoardLines } from "$lib/board";

    const boardLines = generateBoardLines();
</script>

<div class="board">
    {#each boardLines as boardLine, index}
        {#if index % 2 === 0}
            <HorizontalRow lineRow={boardLine} />
        {:else}
            <VerticalRow lineRow={boardLine} />
        {/if}
    {/each}
</div>
