// import { bubbleSort, swap } from "../../Sorting/BubbleSort";

import { bubbleSort, swap } from "../../Sorting/BubbleSortPractise1";

describe("BubbleSort", () => {
    it("should return sorted array", () => {
        const arr = [3, 4, 2, 1, 5, 6];

        expect(bubbleSort(arr, arr.length)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should swap the value", () => {
        const arr = [12, 24];
        swap(0, 1, arr);
        expect(arr).toStrictEqual([24, 12]);
    });
});
