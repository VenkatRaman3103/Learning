let arr = [3, 2, 1, 4, 6, 5, 8, 7, 9];

let p = 0;
let r = arr.length - 1;

function merge(arr, p, r) {
	let q = Math.floor((r + p) / 2);

	// base case n < n_0
	if (p == r) {
		return;
	}

	// recursice cases n > n_0
	merge(arr, p, q);
	merge(arr, q + 1, r);

	mergeSort(arr, p, q, r);
}

function mergeSort(arr, p, q, r) {
	let nL = q - p + 1;
	let nR = r - q;

	let L = Array(nL).fill(0);
	let R = Array(nR).fill(0);

	for (let i = 0; i < L.length; i++) {
		L[i] = arr[p + i];
	}

	for (let i = 0; i < R.length; i++) {
		R[i] = arr[q + 1 + i];
	}

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
merge(arr, p, r);

console.log(arr);
