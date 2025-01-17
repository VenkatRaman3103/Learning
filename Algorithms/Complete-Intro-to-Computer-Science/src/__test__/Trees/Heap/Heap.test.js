import { MaxHeap } from "../../../Trees/Heap/practice/practice2";

describe("MaxHeap", () => {
	let maxHeap;

	beforeEach(() => {
		maxHeap = new MaxHeap();
	});

	test("initializes with an empty heap", () => {
		expect(maxHeap.heap).toEqual([]);
	});

	test("inserts a single value into the heap", () => {
		maxHeap.insert(10);
		expect(maxHeap.heap).toEqual([10]);
	});

	test("maintains max-heap property after multiple inserts", () => {
		maxHeap.insert(10);
		maxHeap.insert(20);
		maxHeap.insert(5);
		maxHeap.insert(30);
		maxHeap.insert(15);

		// Check that the root is the maximum value
		expect(maxHeap.heap[0]).toBe(30);

		// Validate the max-heap property: parent >= children
		for (let i = 0; i < maxHeap.heap.length; i++) {
			const leftChildIndex = maxHeap.getLeftChildIndex(i);
			const rightChildIndex = maxHeap.getRightChildIndex(i);

			if (leftChildIndex < maxHeap.heap.length) {
				expect(maxHeap.heap[i]).toBeGreaterThanOrEqual(
					maxHeap.heap[leftChildIndex],
				);
			}

			if (rightChildIndex < maxHeap.heap.length) {
				expect(maxHeap.heap[i]).toBeGreaterThanOrEqual(
					maxHeap.heap[rightChildIndex],
				);
			}
		}
	});

	test("handles multiple inserts of duplicate values", () => {
		maxHeap.insert(10);
		maxHeap.insert(10);
		maxHeap.insert(10);

		expect(maxHeap.heap[0]).toBe(10); // Root should be the maximum value
		expect(maxHeap.heap.length).toBe(3); // Should handle duplicates correctly
	});

	test("correctly swaps values to maintain heap order", () => {
		maxHeap.insert(10);
		maxHeap.insert(20);

		// Verify the swap occurred to maintain the max-heap property
		expect(maxHeap.heap[0]).toBe(20);
		expect(maxHeap.heap[1]).toBe(10);
	});

	test("ensures parent index calculation is correct", () => {
		expect(maxHeap.getParentIndex(1)).toBe(0); // Parent of index 1
		expect(maxHeap.getParentIndex(2)).toBe(0); // Parent of index 2
		expect(maxHeap.getParentIndex(3)).toBe(1); // Parent of index 3
	});

	test("ensures left and right child index calculation is correct", () => {
		expect(maxHeap.getLeftChildIndex(0)).toBe(1); // Left child of root
		expect(maxHeap.getRightChildIndex(0)).toBe(2); // Right child of root
		expect(maxHeap.getLeftChildIndex(1)).toBe(3); // Left child of index 1
		expect(maxHeap.getRightChildIndex(1)).toBe(4); // Right child of index 1
	});
});
