import { data } from "browserslist";

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

// const testData = [1, 2, 3, 4, 5, 6];
//
// for (let i = testData.length - 1; i >= 0; i--) {
// 	console.log(testData[i]);
// }
