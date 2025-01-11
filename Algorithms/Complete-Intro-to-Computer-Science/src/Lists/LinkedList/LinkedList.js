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

	// delte the last element
	pop() {
		if (this.head == null) {
			return "List is empty";
		}

		if (this.head.next == null) {
			const value = this.head.value;
			this.head = null;

			this.length--;

			return value;
		}

		let currentNode = this.head;
		let previous = null;

		while (currentNode.next !== null) {
			previous = currentNode;
			currentNode = currentNode.next;
		}
		previous.next = null;

		this.length--;
	}

	// insert an value at the given index
	insert(index, value) {
		const newNode = new Node(value);

		if (index < 0 || index > this.length) {
			return "Invalid Index";
		}

		if (index == 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			let currentNode = this.head;
			let previous = null;
			let i = 0;

			while (i < index) {
				previous = currentNode;
				currentNode = currentNode.next;
				i++;
			}

			previous.next = newNode;
			newNode.next = currentNode;
		}

		this.length++;
	}

	// delete the value based on index
	delete(index) {
		if (index < 0 || index > this.length - 1) {
			return "Invalid Index";
		}

		if (index === 0) {
			this.head = this.head.next;
		} else {
			let currentNode = this.head;
			let previous = null;
			let i = 0;

			while (i < index) {
				previous = currentNode;
				currentNode = currentNode.next;
				i++;
			}

			previous.next = currentNode.next;
		}

		this.length--;
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

	//---- private methods ----

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
