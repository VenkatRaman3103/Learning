function swap(x, y, arr) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function selectionSortPractice(arr, n) {
    // outer loop | i => 0 --> n
    for (let i = 0; i < n; i++) {
        // assuming the minimum value | minIndex => i (current position)
        let minIndex = i;

        // inner loop | j => i + 1 --> n
        for (let j = i + 1; j < n; j++) {
            // minimum value => A[minIndex] > A[j] |=> update the minimum
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        // swap
        swap(minIndex, i, arr);
    }

    return arr;
}

const arr = [3, 4, 2, 1, 5, 6];
console.log(selectionSortPractice(arr, arr.length));
