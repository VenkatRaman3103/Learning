import { selectionSort } from "../../Sorting/SelectionSort";

describe("Selection Sort", () => {
    it("should return sorted array", () => {
        const arr = [5, 3, 4, 2, 1, 6];

        expect(selectionSort(arr, arr.length)).toStrictEqual([
            1, 2, 3, 4, 5, 6,
        ]);
    });
});
