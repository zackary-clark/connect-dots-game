<script lang="ts">
    import type { Writable } from "svelte/store";

    export let lineClick: Writable<boolean>;
</script>

<div class="line" on:click={() => lineClick.set(true)}>
    <div class="visible-line" class:clicked={$lineClick}></div>
</div>

<style>
    :root {
        --direction: row;
        --height: 20px;
        --width: 80px;
    }

    .line {
        height: var(--height);
        width: var(--width);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .visible-line {
        background-color: var(--bg2);
        height: calc(var(--height) - calc(min(var(--height), var(--width)) * 0.6));
        width: calc(var(--width)  - calc(min(var(--height), var(--width)) * 0.6));
    }

    .clicked {
        background-color: var(--fg2);
    }
</style>
