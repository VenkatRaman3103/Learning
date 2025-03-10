export function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

export function SelectionSortPractice(arr, n) {
    // outer loop | i = 0 --> n
    for (let i = 0; i < n; i++) {
        let minIndex = i;

        // inner loop | j = i + 1 --> n
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        swap(arr, i, minIndex);
    }

    return arr;
}

const arr = [4, 3, 2, 5, 6, 7, 1, 9];
console.log(SelectionSortPractice(arr, arr.length));
