import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

const size = 6;

const generateHorizontalRow = (): Writable<boolean>[] => {
    const row: Writable<boolean>[] = new Array(size);
    for (let i = 0; i < size; i++) {
        row[i] = writable(false);
    }
    return row;
};

const generateVerticalRow = (): Writable<boolean>[] => {
    const row: Writable<boolean>[] = new Array(size+1);
    for (let i = 0; i <= size; i++) {
        row[i] = writable(false);
    }
    return row;
}

export function generateBoardLines() {
    const lengthOfBoardArray = (size * 2) + 1;
    const lines: Writable<boolean>[][] = new Array(lengthOfBoardArray);

    for (let i = 0; i < lengthOfBoardArray - 1; i += 2) {
        lines[i] = generateHorizontalRow();
        lines[i+1] = generateVerticalRow();
    }
    lines[lengthOfBoardArray - 1] = generateHorizontalRow();

    return lines;
}
