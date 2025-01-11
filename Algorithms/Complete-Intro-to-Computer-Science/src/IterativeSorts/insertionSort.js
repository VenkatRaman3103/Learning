function insertionSort(A, n) {
	for (let i = 1; i < n; i++) {
		let key = A[i];

		let j = i - 1;

		while (j >= 0 && A[j] > key) {
			console.log(A[j + 1]);
			A[j + 1] = A[j];

			j = j - 1;
		}

		j = j + 1;

		A[j] = key;
	}

	return A;
}

arr = [5, 2, 4, 6, 1, 3];

console.log(insertionSort(arr, arr.length));
