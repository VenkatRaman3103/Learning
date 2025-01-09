function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[arr.length - 1];

	// two arrays
	let left = [];
	let right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		const key = arr[i];

		// update the arrays
		if (key < pivot) {
			left.push(key);
		} else {
			right.push(key);
		}
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [12, 32, 1, 2, 5, 34, 9];

console.log(quickSort(arr));
