export class MaxHeap {
	constructor() {
		this.heap = [];
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	getLeftChildIndex(index) {
		return 2 * index + 1;
	}

	getRightChildIndex(index) {
		return 2 * index + 2;
	}

	swap(index, parentIndex) {
		[this.heap[index], this.heap[parentIndex]] = [
			this.heap[parentIndex],
			this.heap[index],
		];
	}

	insert(value) {
		this.heap.push(value);

		let index = this.heap.length - 1;
		let parentIndex = this.getParentIndex(index);

		while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
			this.swap(index, parentIndex);
			index = parentIndex;
			parentIndex = this.getParentIndex(index);
		}
	}
}
