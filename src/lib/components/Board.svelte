<script>
    import HorizontalRow from "$lib/components/HorizontalRow.svelte";
    import VerticalRow from "$lib/components/VerticalRow.svelte";

    export let size = 6;

    const clickedBoard = [];

    for (let i = 0; i < size; i++) {
        clickedBoard.push(Array(size));
        clickedBoard.push(Array(size+1));
    }
    clickedBoard.push(Array(size))
</script>

<div class="board">
    {#each clickedBoard as clickedRow, index}
        {#if index % 2 === 0}
            <HorizontalRow clickedRow={clickedRow} />
        {:else}
            <VerticalRow clickedRow={clickedRow} />
        {/if}
    {/each}
</div>
