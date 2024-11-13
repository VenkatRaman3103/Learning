function breaks(breaks) {
	let rate = Math.floor(Math.sqrt(breaks.length));

	let i = rate;

	for (; i < breaks.length; i += rate) {
		if (breaks[i]) {
			break;
		}
	}

	i -= rate;

	for (let j = 0; j <= rate && i < breaks.length; j++, i++) {
		if (breaks[i]) {
			return i;
		}
	}

	return -1;
}

const breaksArr = [false, false, false, false, true, false, false, false];

console.log(breaks(breaksArr));
