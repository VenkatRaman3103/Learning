import { AvlTree } from "../../../Trees/AvlTree/Practice/practice";

describe("AvlTree", () => {
	let tree;

	beforeEach(() => {
		tree = new AvlTree();
	});

	test("should initialize an empty tree", () => {
		expect(tree.root).toBeNull();
	});

	test("should add a single node to the tree", () => {
		tree.add(10);
		expect(tree.root).not.toBeNull();
		expect(tree.root.value).toBe(10);
		expect(tree.root.height).toBe(1);
	});

	test("should perform left rotation for right-heavy imbalance", () => {
		tree.add(10);
		tree.add(20);
		tree.add(30); // Causes left rotation

		expect(tree.root.value).toBe(20);
		expect(tree.root.left.value).toBe(10);
		expect(tree.root.right.value).toBe(30);
	});

	test("should perform right rotation for left-heavy imbalance", () => {
		tree.add(30);
		tree.add(20);
		tree.add(10); // Causes right rotation

		expect(tree.root.value).toBe(20);
		expect(tree.root.left.value).toBe(10);
		expect(tree.root.right.value).toBe(30);
	});

	test("should perform left-right rotation for left-right imbalance", () => {
		tree.add(30);
		tree.add(10);
		tree.add(20); // Causes left-right rotation

		expect(tree.root.value).toBe(20);
		expect(tree.root.left.value).toBe(10);
		expect(tree.root.right.value).toBe(30);
	});

	test("should perform right-left rotation for right-left imbalance", () => {
		tree.add(10);
		tree.add(30);
		tree.add(20); // Causes right-left rotation

		expect(tree.root.value).toBe(20);
		expect(tree.root.left.value).toBe(10);
		expect(tree.root.right.value).toBe(30);
	});

	test("should maintain balance for complex insertions", () => {
		tree.add(10);
		tree.add(20);
		tree.add(30);
		tree.add(40);
		tree.add(50);
		tree.add(25);

		expect(tree.root.value).toBe(30);
		expect(tree.root.left.value).toBe(20);
		expect(tree.root.right.value).toBe(40);
		expect(tree.root.left.left.value).toBe(10);
		expect(tree.root.left.right.value).toBe(25);
		expect(tree.root.right.right.value).toBe(50);
	});

	test("should return in-order traversal of the tree", () => {
		tree.add(30);
		tree.add(10);
		tree.add(20);

		const inOrder = tree.inOrder(tree.root);
		expect(inOrder).toEqual([10, 20, 30]);
	});

	test("should return pre-order traversal of the tree", () => {
		tree.add(30);
		tree.add(10);
		tree.add(20);

		const preOrder = tree.preOrder(tree.root);
		expect(preOrder).toEqual([20, 10, 30]);
	});

	test("should return post-order traversal of the tree", () => {
		tree.add(30);
		tree.add(10);
		tree.add(20);

		const postOrder = tree.postOrder(tree.root);
		expect(postOrder).toEqual([10, 30, 20]);
	});

	test("should reject duplicate values", () => {
		tree.add(10);
		tree.add(10); // Duplicate

		const inOrder = tree.inOrder(tree.root);
		expect(inOrder).toEqual([10]);
	});
});
