function insertionSort(A, n) {
	for (let i = 1; i < n; i++) {
		let key = A[i];

		let j = i - 1;

		while (j >= 0 && key < A[j]) {
			A[j + 1] = A[j];

			j = j - 1;
		}

		j = j + 1;

		A[j] = key;
	}

	return A;
}

arr = [3, 2, 1, 4, 5];

console.log(insertionSort(arr, arr.length));
