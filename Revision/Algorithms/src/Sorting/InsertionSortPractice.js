export function insertionSortPractice(arr, n) {
    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];

            j--;
        }

        j = j + 1;

        arr[j] = temp;
    }

    return arr;
}

const arr = [4, 5, 3, 2, 1, 6, 7];

console.log(insertionSortPractice(arr, arr.length));
