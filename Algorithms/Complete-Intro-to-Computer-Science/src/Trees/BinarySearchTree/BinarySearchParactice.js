export class Tree {
	constructor() {
		this.root = null;
	}

	add(value) {
		const newNode = new Node(value);

		if (this.root == null) {
			this.root = newNode;
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
			} else if (value >= current.value) {
				if (current.right == null) {
					current.right = newNode;
					break;
				}
				current = current.right;
			}
		}
	}

	print() {
		return JSON.stringify(this.root);
	}
}

export class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const tree = new Tree();
tree.add(9);
tree.add(3);
tree.add(4);
tree.add(6);
tree.add(5);
tree.add(7);
tree.add(12);
tree.add(24);
console.log(tree.print());
