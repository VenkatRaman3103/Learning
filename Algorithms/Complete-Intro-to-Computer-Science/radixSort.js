function getMax(arr) {
	let max = arr[0];

	for (let num of arr) {
		if (num > max) {
			max = num;
		}
	}
	return max;
}

function getDigitCount(num) {
	const str = num.toString().split("");
	return str.length;
}

function getDigit(num, place) {
	const str = num.toString();
	const idx = str.length - 1 - place;
	return idx >= 0 ? parseInt(str[idx]) : 0;
}

function radixSort(arr) {
	const maxElement = getMax(arr);
	const maxDigitCount = getDigitCount(maxElement);

	for (let i = 0; i < maxDigitCount; i++) {
		let buckets = [];

		// fill the buckects with empty array
		for (let i = 0; i < 10; i++) {
			buckets.push([]);
		}

		for (let num of arr) {
			const digit = getDigit(num, i);
			buckets[digit].push(num);
		}

		let index = 0;
		for (let bucket of buckets) {
			for (let num of bucket) {
				arr[index] = num;
				index++;
			}
		}
	}

	return arr;
}

console.log(radixSort([2, 11, 123, 45, 235, 12]));
