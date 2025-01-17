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

	extractMax() {
		if (this.heap.length === 0) {
			return null;
		}
		if (this.heap.length === 1) {
			return this.heap.pop();
		}

		const max = this.heap[0];
		this.heap[0] = this.heap.pop();

		let parent = 0;
		const heapLength = this.heap.length;

		while (true) {
			let largest = parent;
			const leftChildIndex = this.getLeftChildIndex(parent);
			const rightChildIndex = this.getRightChildIndex(parent);

			if (
				leftChildIndex < heapLength &&
				this.heap[leftChildIndex] > this.heap[largest]
			) {
				largest = leftChildIndex;
			}

			if (
				rightChildIndex < heapLength &&
				this.heap[rightChildIndex] > this.heap[largest]
			) {
				largest = rightChildIndex;
			}

			if (largest === parent) {
				break;
			}

			this.swap(largest, parent);
			parent = largest;
		}

		return max;
	}
}

// Usage
const maxHeap = new MaxHeap();
maxHeap.insert(20);
maxHeap.insert(30);
maxHeap.insert(40);
maxHeap.insert(10);
maxHeap.insert(35);

console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.heap);
