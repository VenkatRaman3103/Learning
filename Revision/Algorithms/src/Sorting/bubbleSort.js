export function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

export function bubbleSort(arr, n) {
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr);
            }
        }
    }

    return arr;
}
