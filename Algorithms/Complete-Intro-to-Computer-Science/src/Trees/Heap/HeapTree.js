class MaxHeap {
	constructor() {
		this.heap = [];
	}

	// Get parent, left child, and right child indices
	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	getLeftChildIndex(index) {
		return 2 * index + 1;
	}

	getRightChildIndex(index) {
		return 2 * index + 2;
	}

	// Swap elements
	swap(index1, index2) {
		[this.heap[index1], this.heap[index2]] = [
			this.heap[index2],
			this.heap[index1],
		];
	}

	// Insert a value into the heap
	insert(value) {
		this.heap.push(value);
		this.heapifyUp(this.heap.length - 1);
	}

	// Heapify up (to maintain max heap property)
	heapifyUp(index) {
		let parentIndex = this.getParentIndex(index);

		while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
			this.swap(parentIndex, index);
			index = parentIndex;
			parentIndex = this.getParentIndex(index);
		}
	}

	// Remove and return the maximum value (root of the heap)
	extractMax() {
		if (this.heap.length === 0) return null;

		if (this.heap.length === 1) return this.heap.pop();

		const max = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.heapifyDown(0);

		return max;
	}

	// Heapify down (to maintain max heap property)
	heapifyDown(index) {
		let largest = index;
		const leftIndex = this.getLeftChildIndex(index);
		const rightIndex = this.getRightChildIndex(index);

		if (
			leftIndex < this.heap.length &&
			this.heap[leftIndex] > this.heap[largest]
		) {
			largest = leftIndex;
		}

		if (
			rightIndex < this.heap.length &&
			this.heap[rightIndex] > this.heap[largest]
		) {
			largest = rightIndex;
		}

		if (largest !== index) {
			this.swap(index, largest);
			this.heapifyDown(largest);
		}
	}
}

// Usage
const maxHeap = new MaxHeap();
maxHeap.insert(20);
maxHeap.insert(30);
maxHeap.insert(40);
maxHeap.insert(10);
maxHeap.insert(35);
console.log(maxHeap.heap);
