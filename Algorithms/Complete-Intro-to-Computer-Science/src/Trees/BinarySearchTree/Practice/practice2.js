export class BinaryTree {
	constructor() {
		this.root = null;
		this.length = 0;
	}

	add(value) {
		const newNode = new Node(value);

		if (this.root == null) {
			this.root = newNode;
			this.length;
			return;
		}

		let current = this.root;

		while (true) {
			if (value < current.value) {
				if (current.left == null) {
					current.left = newNode;
					break;
				}
				current = current.left;
			} else if (current.value < value) {
				if (current.right == null) {
					current.right = newNode;
					break;
				}
				current = current.right;
			} else {
				break;
			}
		}
	}

	print() {
		return console.log(JSON.stringify(this.root, null, 4));
	}
}

export class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
