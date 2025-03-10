export function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

export function bubbleSort(arr, n) {
    // outer loop | i = 0 <-- n
    for (let i = n; i > 0; i--) {
        // inner loop | j = 0 --> i - 1
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

const arr = [4, 3, 2, 5, 6, 7, 1, 9];

console.log(bubbleSort(arr, arr.length));
