function insertionSort(arr) {
	for (let i = 1; i < arr.lenght; i++) {
		let key = arr[i];

		let j = i - 1;

		while (j >= 0 && key < arr[j]) {
			arr[j + 1] = arr[j];

			j = j - 1;
		}

		j = j + 1;

		arr[j] = key;
	}

	return arr;
}

console.log(insertionSort([4, 3, 2, 5, 1]));
