class ArrayList {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	push(value) {
		this.data[this.length] = value;
		this.length++;
		return this.data;
	}

	pop() {
		const ans = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return ans;
	}

	get(index) {
		const ans = this.data[index];
		return ans ? ans : "Nothing is found for that Index";
	}

	peak() {
		return this.data;
	}

	delete(index) {
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
		return this.data;
	}
}

const arr = new ArrayList();
console.log(arr.push(12));
console.log(arr.push(24));
console.log(arr.push(36));
console.log(arr.push(48));
console.log(arr.push(60));
console.log(arr.push(72));
// console.log(arr.pop());
// console.log(arr.peak());
// console.log(arr.get(1));
console.log(arr.delete(0));
