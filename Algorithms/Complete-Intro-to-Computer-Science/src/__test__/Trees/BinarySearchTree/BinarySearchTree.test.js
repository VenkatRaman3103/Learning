import { BinaryTree } from "../../../Trees/BinarySearchTree/Practice/practice2";

describe("Binary Tree", () => {
	let tree;

	beforeEach(() => {
		tree = new BinaryTree();
	});

	test("should create an empty tree", () => {
		expect(tree.root).toBeNull();
	});

	test("should add a single value to the tree", () => {
		tree.add(10);
		expect(tree.root).not.toBeNull();
		expect(tree.root.value).toBe(10);
	});

	test("should add multiple values and maintain binary tree properties", () => {
		tree.add(10);
		tree.add(5);
		tree.add(15);
		tree.add(3);
		tree.add(7);

		expect(tree.root.value).toBe(10);
		expect(tree.root.left.value).toBe(5);
		expect(tree.root.right.value).toBe(15);
		expect(tree.root.left.left.value).toBe(3);
		expect(tree.root.left.right.value).toBe(7);
	});

	test("should not add duplicate values", () => {
		tree.add(10);
		tree.add(5);
		tree.add(10); // Duplicate value

		expect(tree.root.value).toBe(10);
		expect(tree.root.left.value).toBe(5);
		expect(tree.root.right).toBeNull(); // No duplicate should be added
	});

	test("should create a tree from an array of values", () => {
		const values = [10, 5, 15, 3, 7, 12];
		values.forEach((value) => tree.add(value));

		expect(tree.root.value).toBe(10);
		expect(tree.root.left.value).toBe(5);
		expect(tree.root.right.value).toBe(15);
		expect(tree.root.left.left.value).toBe(3);
		expect(tree.root.left.right.value).toBe(7);
		expect(tree.root.right.left.value).toBe(12);
	});

	test("should correctly print the tree", () => {
		const values = [10, 5, 15];
		values.forEach((value) => tree.add(value));

		const expectedOutput = JSON.stringify(
			{
				value: 10,
				left: { value: 5, left: null, right: null },
				right: { value: 15, left: null, right: null },
			},
			null,
			4,
		);

		console.log = jest.fn();
		tree.print();
		expect(console.log).toHaveBeenCalledWith(expectedOutput);
	});
});
