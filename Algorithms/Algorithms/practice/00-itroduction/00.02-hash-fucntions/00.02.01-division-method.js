// key = f(value, n) => value % n
function generateKey(value, n) {
	return value % n;
}

function divisionFunction(nums, n) {
	let hashMap_division = {};

	for (let i = 0; i < n; i++) {
		const value = nums[i];

		hashMap_division[generateKey(value, n)] = value;
	}

	console.log(hashMap_division);
}

const nums = [18, 41, 22, 44, 59, 32, 31]; // has collision
divisionFunction(nums, nums.length);
