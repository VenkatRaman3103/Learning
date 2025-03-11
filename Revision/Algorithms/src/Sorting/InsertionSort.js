export function InsertionSort(arr, n) {
    // outer loop | i => 1 --> n
    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        let j = i - 1;

        // inner loop | arr[j] > temp   <-- i - 1 | j >= 0
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }

        j = j + 1;

        arr[j] = temp;
    }

    return arr;
}

const arr = [5, 4, 6, 2, 1, 7, 3];

console.log(InsertionSort(arr, arr.length));
