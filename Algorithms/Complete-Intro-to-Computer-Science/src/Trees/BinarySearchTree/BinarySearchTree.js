export class Tree {
	constructor() {
		this.root = null;
	}

	add(value) {
		const newNode = new Node(value);

		if (this.root == null) {
			this.root = newNode;
		}

		if (value > this.root.value) {
			this.root.right = newNode;
		} else {
			this.root.left = newNode;
		}
	}
}

export class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
