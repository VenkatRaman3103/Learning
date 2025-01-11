import { LinkedList, Node } from "../../LinkedList/LinkedListPractice";

describe("Test suite on LinkedList", () => {
	let linkedList = new LinkedList();

	it("should have head,tail and length properties", () => {
		expect(linkedList).toHaveProperty("head");
		expect(linkedList).toHaveProperty("tail");
		expect(linkedList).toHaveProperty("length");
	});

	it("should have value and the next properties", () => {
		let node = new Node(12);

		expect(node).toHaveProperty("value");
		expect(node).toHaveProperty("next");
	});

	it("should add the element at the end of the linkedList", () => {
		linkedList.push(12);
		linkedList.push(24);

		expect(linkedList.head.value).toBe(12);
		expect(linkedList.head.next.value).toBe(24);
		expect(linkedList.head.next.next).toBeNull();
		expect(linkedList.tail.next).toBeNull();

		expect(linkedList.length).toBe(2);
	});
});
