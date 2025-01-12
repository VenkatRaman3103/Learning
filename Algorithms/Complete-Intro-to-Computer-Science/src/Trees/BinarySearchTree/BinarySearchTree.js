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

		let currentNode = this.root;

		while (true) {
			if (value < currentNode.value) {
				if (currentNode.left == null) {
					currentNode.left = newNode;
					break;
				}
				currentNode = currentNode.left;
			} else if (value >= currentNode.value) {
				if (currentNode.right == null) {
					currentNode.right = newNode;
					break;
				}
				currentNode = currentNode.right;
			}
		}
	}

	print() {
		console.log(JSON.stringify(this.root, null, 4));
		return this.root;
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
tree.add(6);
tree.add(3);
tree.add(9);
tree.add(2);
tree.add(5);
tree.add(4);
tree.add(7);
console.log(tree.root);
tree.print();
