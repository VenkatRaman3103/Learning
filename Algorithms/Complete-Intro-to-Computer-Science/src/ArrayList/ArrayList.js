export class ArrayList {
	constructor() {
		this.data = {};
		this.length = 0;
	}

	// append the value in the last index
	push(value) {
		this.data[this.length] = value;
		this.length++;

		return this.data;
	}

	// add the value to the first index
	prepend(value) {
		for (let i = this.length - 1; i >= 0; i--) {
			const key = this.data[i];
			this.data[i + 1] = key;
		}
		this.data[0] = value;
		this.length++;

		return this.data;
	}

	// insert an element to the data based on the index, move all the element one step from that index
	insert(index, value) {
		if (index > this.length - 1) {
			return "Exceed the length";
		}

		for (let i = this.length - 1; i >= index; i--) {
			const key = this.data[i];
			this.data[i + 1] = key;
		}
		this.data[index] = value;
		this.length++;

		return this.data;
	}

	// get value by index
	get(index) {
		return this.data[index];
	}

	// show all the elements from the data
	peak() {
		return this.data;
	}

	// make the data object into an array
	serialize() {
		let arr = [];

		for (let i = 0; i < this.length; i++) {
			arr.push(this.data[i]);
		}

		return arr;
	}
}
