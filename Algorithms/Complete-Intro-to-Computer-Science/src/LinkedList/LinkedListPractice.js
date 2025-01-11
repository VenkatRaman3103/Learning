export class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// add the value at the end
	push(value) {
		const newNode = new Node(value);

		if (this.head === null) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
		}

		this.tail = newNode;
		this.length++;
	}

	// get value by index
	get(index) {
		if (this.head == null) {
			return "List is empty";
		}

		if (index > this.length - 1) {
			return "Index exceeds the length";
		}

		const getValue = this.#find(index);
		console.log(getValue);

		if (getValue) {
			return getValue;
		}
	}

	// make an array out of linkedList
	serialize() {
		const arr = [];

		let currentNode = this.head;

		while (currentNode) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return arr;
	}

	// private methods

	// find the element
	#find(index) {
		let currentNode = this.head;

		let i = 0;

		while (currentNode) {
			if (i === index) {
				return currentNode.value;
			}
			currentNode = currentNode.next;
			i++;
		}

		return null;
	}
}

export class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// const linkedList = new LinkedList();
// linkedList.push(12);
// linkedList.push(24);
// linkedList.push(36);
// linkedList.push(48);
// console.log(linkedList.serialize());
// console.log(linkedList.get(2));
