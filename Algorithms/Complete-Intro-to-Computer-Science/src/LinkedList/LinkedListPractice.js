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

	// make an array out of linkedList
	serialize() {}
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
// console.log(linkedList.head);
// console.log(linkedList.tail);
