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

		expect(maxHeap.heap[0]).toBe(30);

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

		expect(maxHeap.heap[0]).toBe(10);
		expect(maxHeap.heap.length).toBe(3);
	});

	test("correctly swaps values to maintain heap order", () => {
		maxHeap.insert(10);
		maxHeap.insert(20);

		expect(maxHeap.heap[0]).toBe(20);
		expect(maxHeap.heap[1]).toBe(10);
	});

	test("ensures parent index calculation is correct", () => {
		expect(maxHeap.getParentIndex(1)).toBe(0);
		expect(maxHeap.getParentIndex(2)).toBe(0);
		expect(maxHeap.getParentIndex(3)).toBe(1);
	});

	test("ensures left and right child index calculation is correct", () => {
		expect(maxHeap.getLeftChildIndex(0)).toBe(1);
		expect(maxHeap.getRightChildIndex(0)).toBe(2);
		expect(maxHeap.getLeftChildIndex(1)).toBe(3);
		expect(maxHeap.getRightChildIndex(1)).toBe(4);
	});

	test("extracts the maximum value from the heap", () => {
		maxHeap.insert(10);
		maxHeap.insert(20);
		maxHeap.insert(5);

		expect(maxHeap.extract()).toBe(20);
		expect(maxHeap.heap[0]).toBe(10);
	});

	test("returns null when extracting from an empty heap", () => {
		expect(maxHeap.extract()).toBeNull();
	});

	test("extracts the last element when heap has one element", () => {
		maxHeap.insert(10);
		expect(maxHeap.extract()).toBe(10);
		expect(maxHeap.heap).toEqual([]);
	});

	test("handles multiple extractions", () => {
		maxHeap.insert(10);
		maxHeap.insert(20);
		maxHeap.insert(5);
		maxHeap.insert(30);

		expect(maxHeap.extract()).toBe(30);
		expect(maxHeap.extract()).toBe(20);
		expect(maxHeap.heap[0]).toBe(10);
	});

	test("maintains max-heap property after extraction", () => {
		maxHeap.insert(10);
		maxHeap.insert(20);
		maxHeap.insert(5);
		maxHeap.insert(30);

		maxHeap.extract();
		expect(maxHeap.heap[0]).toBe(20);

		maxHeap.extract();
		expect(maxHeap.heap[0]).toBe(10);
	});

	test("does not modify the heap when extracting from an empty heap", () => {
		const initialHeap = [...maxHeap.heap];
		maxHeap.extract();
		expect(maxHeap.heap).toEqual(initialHeap);
	});

	test("inserts and extracts large numbers", () => {
		maxHeap.insert(100000);
		maxHeap.insert(500000);
		maxHeap.insert(200000);
		expect(maxHeap.extract()).toBe(500000);
		expect(maxHeap.extract()).toBe(200000);
		expect(maxHeap.extract()).toBe(100000);
	});

	test("extracts elements in descending order", () => {
		maxHeap.insert(15);
		maxHeap.insert(10);
		maxHeap.insert(20);
		maxHeap.insert(30);
		maxHeap.insert(25);

		expect(maxHeap.extract()).toBe(30);
		expect(maxHeap.extract()).toBe(25);
		expect(maxHeap.extract()).toBe(20);
		expect(maxHeap.extract()).toBe(15);
		expect(maxHeap.extract()).toBe(10);
	});
});
