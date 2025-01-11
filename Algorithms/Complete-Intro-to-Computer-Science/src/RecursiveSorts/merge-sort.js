let arr = [3, 2, 1, 4, 6, 5, 8, 7, 9];

let p = 0;
let r = arr.length - 1;

function mergeSort(arr, p, r) {
	if (p == r) {
		return;
	}

	const q = Math.floor((p + r) / 2);

	mergeSort(arr, p, q);
	mergeSort(arr, q + 1, r);

	merge(arr, p, q, r);
}

function merge(arr, p, q, r) {
	let nL = q - p + 1;
	let nR = r - q;

	let L = Array(nL).fill(0);
	let R = Array(nR).fill(0);

	// Filling the L
	for (let i = 0; i < L.length; i++) {
		L[i] = arr[p + i];
	}

	// Filling the R
	for (let i = 0; i < R.length; i++) {
		R[i] = arr[q + 1 + i];
	}

	// k points arr
	let k = p;
	let i = 0;
	let j = 0;

	while (i < L.length && j < R.length) {
		if (L[i] <= R[j]) {
			arr[k] = L[i];

			i = i + 1;
		} else if (R[j] < L[i]) {
			arr[k] = R[j];

			j = j + 1;
		}

		k = k + 1;
	}

	while (i < L.length) {
		arr[k] = L[i];

		i = i + 1;
		k = k + 1;
	}

	while (j < R.length) {
		arr[k] = R[j];

		j = j + 1;
		k = k + 1;
	}
}

mergeSort(arr, p, r);

console.log(arr);
