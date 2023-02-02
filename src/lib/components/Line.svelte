<script lang="ts">
    export let clicked = false;
    export const onClick = () => {
        if (!clicked) {
            clicked = true;
        }
    };
</script>

<div class="line" on:click={onClick}>
    <div class="visible-line" class:clicked></div>
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
        flex-direction: var(--direction);
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .visible-line {
        background-color: var(--bg2);
        height: calc(var(--height) - calc(min(var(--height), var(--width)) / 2));
        width: calc(var(--width)  - calc(min(var(--height), var(--width)) / 2));
    }

    .clicked {
        background-color: var(--fg2);
    }
</style>
