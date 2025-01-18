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
		[this.heap[parentIndex], this.heap[index]] = [
			this.heap[index],
			this.heap[parentIndex],
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

	extract() {
		if (this.heap.length == 0) {
			return null;
		}

		if (this.heap.length == 1) {
			return this.heap.pop();
		}

		let max = this.heap[0];
		this.heap[0] = this.heap.pop();

		let parent = 0;

		let heapLength = this.heap.length;

		while (true) {
			let largest = parent;
			const leftChild = this.getLeftChildIndex(parent);
			const rightChild = this.getRightChildIndex(parent);

			if (
				leftChild < heapLength &&
				this.heap[leftChild] > this.heap[largest]
			) {
				largest = leftChild;
			}

			if (
				rightChild < heapLength &&
				this.heap[rightChild] > this.heap[largest]
			) {
				largest = rightChild;
			}

			if (parent === largest) {
				break;
			}

			this.swap(parent, largest);
			parent = largest;
		}

		return max;
	}
}
