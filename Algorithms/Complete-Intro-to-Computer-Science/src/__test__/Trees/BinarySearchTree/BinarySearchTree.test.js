import { Node, Tree } from "../../../Trees/BinarySearchTree/BinarySearchTree";

describe("Test Suite on BinarySearch Tree", () => {
	let tree;

	beforeEach(() => {
		tree = new Tree();
	});

	it("should have root property", () => {
		let node = new Node();

		expect(tree).toHaveProperty("root");
		expect(node).toHaveProperty("value");
		expect(node).toHaveProperty("left");
		expect(node).toHaveProperty("right");
	});
});
