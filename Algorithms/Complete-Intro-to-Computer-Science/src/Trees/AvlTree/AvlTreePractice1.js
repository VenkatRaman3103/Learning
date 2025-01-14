export class AVL {
	constructor() {
		this.root = null;
	}

	getHeight(node) {
		return node ? node.height : 0;
	}

	add(value) {
		let stack = [];
		const newNode = new Node(value);

		if (this.root == null) {
			this.root = newNode;
			return;
		}

		let traverse = this.root;

		while (true) {
			stack.push(newNode);
			if (value < traverse.value) {
				if (traverse.left == null) {
					traverse.left = newNode;
					break;
				}
				traverse = traverse.left;
			} else if (traverse.value < value) {
				if (traverse.right == null) {
					traverse.right = newNode;
					break;
				}
				traverse = traverse.right;
			} else {
				break;
			}
		}

		while (stack.length > 0) {
			const current = stack.pop();

			current.height = Math.max(
				this.getHeight(current.left),
				this.getHeight(current.right),
			);

			const balance =
				this.getHeight(current.left) - this.getHeight(current.left);

			if (balance > 1 && value < current.left.value) {
				// Left - Left
			} else if (balance < -1 && value > current.right.value) {
				// Right - Right
			} else if (balance > 1 && value > current.left.value) {
				// Left - Right
			}
		}
	}
}

export class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.height = 0;
	}
}
