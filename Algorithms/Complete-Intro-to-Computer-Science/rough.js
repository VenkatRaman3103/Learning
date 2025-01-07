class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);

		this.length++;

		if (this.head == null) {
			this.head = newNode;
		} else {
			console.log(this.head);
			this.tail.next = newNode;
		}

		this.tail = newNode;

		return this.head;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;

		return this.head;
	}
}

const newLink = new LinkedList();

newLink.push(12);
newLink.push(24);
newLink.prepend(9);
newLink.push(36);
