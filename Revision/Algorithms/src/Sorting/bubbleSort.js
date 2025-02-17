export const swap = (a, b, arr) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

export const bubbleSort = (arr, n) => {
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr);
            }
        }
    }

    return arr;
};

const arr = [3, 4, 2, 1, 5, 6];

bubbleSort(arr, arr.length);
