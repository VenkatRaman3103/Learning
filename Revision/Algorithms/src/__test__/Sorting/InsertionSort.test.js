import { InsertionSort } from "../../Sorting/InsertionSort";

describe("Insertion Sort", () => {
    it("Should return Sorted Array", () => {
        const arr = [5, 4, 6, 2, 1, 7, 3];

        expect(InsertionSort(arr, arr.length)).toStrictEqual([
            1, 2, 3, 4, 5, 6, 7,
        ]);
    });
});
