function swap(x, y, arr) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function bubbleSortPractice(arr, n) {
    // outer loop | i => 0 <-- n
    for (let i = n; i > 0; i--) {
        // inner loop | j => 0 --> i - 1
        for (let j = 0; j < i - 1; j++) {
            // bigger bubble => A[j] > A[j + 1]  |=> swap
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr);
            }
        }
    }
    return arr;
}

const arr = [4, 3, 2, 5, 1, 6];
console.log(bubbleSortPractice(arr, arr.length));
