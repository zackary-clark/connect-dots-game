<script>
    import Board from "$lib/components/Board.svelte";
</script>

<svelte:head>
    <title>Connect the Dots</title>
</svelte:head>

<div class="header-container">
    <h1>Connect the Dots</h1>
</div>

<div class="board-container">
    <Board />
</div>

<style>
    .header-container {
        display: flex;
        justify-content: center;
    }

    .board-container {
        display: flex;
        justify-content: center;
    }
</style>
