import { ArrayList } from "../../Lists/ArrayList/ArrayList";

describe("Test Suite on ArrayList", () => {
	let arrayList;

	const testData = [1, 2, 3, 4, 5, 6];
	const expectedData = {
		0: 1,
		1: 2,
		2: 3,
		3: 4,
		4: 5,
		5: 6,
	};

	beforeEach(() => {
		arrayList = new ArrayList();
	});

	// constructor
	it("should have length property", () => {
		expect(arrayList).toHaveProperty("length");
	});

	it("should have data property", () => {
		expect(arrayList).toHaveProperty("data");
	});

	// methods
	it("should append the value", () => {
		const value = 12;

		expect(arrayList.push(value)).toStrictEqual({ 0: 12 });
		expect(arrayList.push(value)).toStrictEqual({ 0: 12, 1: 12 });
		expect(arrayList.length).toBe(2);
	});

	it("should print the data object", () => {
		const value = 24;
		arrayList.push(value);

		expect(arrayList.peak()).toStrictEqual({ 0: value });
	});

	it("should print an array out of data", () => {
		for (let i = 0; i < testData.length; i++) {
			const key = testData[i];
			arrayList.push(key);
		}

		expect(arrayList.peak()).toStrictEqual(expectedData);
		expect(arrayList.serialize()).toStrictEqual(testData);
	});

	it("should return the element, based on the index", () => {
		for (let i = 0; i < testData.length; i++) {
			const key = testData[i];
			arrayList.push(key);
		}

		expect(arrayList.get(2)).toBe(expectedData[2]);
	});

	it("should add the element in the beginning", () => {
		for (let i = 0; i < testData.length; i++) {
			const key = testData[i];
			arrayList.push(key);
		}

		expect(arrayList.prepend(12)).toStrictEqual({
			0: 12,
			1: 1,
			2: 2,
			3: 3,
			4: 4,
			5: 5,
			6: 6,
		});
	});

	it("should insert the element at given index", () => {
		for (let i = 0; i < testData.length; i++) {
			const key = testData[i];
			arrayList.push(key);
		}

		const index = 2;
		const value = 12;

		expect(arrayList.insert(index, value)).toStrictEqual({
			0: 1,
			1: 2,
			2: 12,
			3: 3,
			4: 4,
			5: 5,
			6: 6,
		});
	});
});
