export class AvlTree {
	constructor() {
		this.root = null;
	}

	getHeight(node) {
		return node ? node.height : 0;
	}

	rotateRight(a) {
		const b = a.left;
		a.left = b.right;
		b.right = a;

		a.height =
			Math.max(this.getHeight(a.left), this.getHeight(a.right)) + 1;
		b.height = Math.max(this.getHeight(b.left), a.height) + 1;

		return b;
	}

	rotateLeft(a) {
		const b = a.right;
		a.right = b.left;
		b.left = a;

		a.height =
			Math.max(this.getHeight(a.left), this.getHeight(a.right)) + 1;
		b.height = Math.max(this.getHeight(b.left), a.height) + 1;

		return b;
	}

	handleRotation(current, stack, rotatedNode) {
		if (stack.length === 0) {
			this.root = rotatedNode;
		} else {
			const parent = stack[stack.length - 1];
			if (parent.left === current) {
				parent.left = rotatedNode;
			} else {
				parent.right = rotatedNode;
			}
		}
	}

	add(value) {
		const newNode = new Node(value);
		let stack = [];

		if (this.root == null) {
			this.root = newNode;
			return;
		}

		let traverse = this.root;

		while (true) {
			stack.push(traverse);

			if (value < traverse.value) {
				if (traverse.left == null) {
					traverse.left = newNode;
					break;
				}
				traverse = traverse.left;
			} else if (value > traverse.value) {
				if (traverse.right == null) {
					traverse.right = newNode;
					break;
				}
				traverse = traverse.right;
			} else {
				// Duplicate value
				return;
			}
		}

		while (stack.length > 0) {
			const current = stack.pop();

			current.height =
				Math.max(
					this.getHeight(current.left),
					this.getHeight(current.right),
				) + 1;

			const balance =
				this.getHeight(current.left) - this.getHeight(current.right);

			if (balance > 1 && value < current.left.value) {
				// Left-Left
				this.handleRotation(current, stack, this.rotateRight(current));
			} else if (balance < -1 && value > current.right.value) {
				// Right-Right
				this.handleRotation(current, stack, this.rotateLeft(current));
			} else if (balance > 1 && value > current.left.value) {
				// Left-Right
				current.left = this.rotateLeft(current.left);
				this.handleRotation(current, stack, this.rotateRight(current));
			} else if (balance < -1 && value < current.right.value) {
				// Right-Left
				current.right = this.rotateRight(current.right);
				this.handleRotation(current, stack, this.rotateLeft(current));
			}
		}
	}

	// inOrder also know as level order
	inOrder(node) {
		if (!node) return [];
		return [
			...this.inOrder(node.left),
			node.value,
			...this.inOrder(node.right),
		];
	}

	// preOder also know as depth first search in binary tree
	preOrder(node) {
		if (!node) return [];
		return [
			node.value,
			...this.preOrder(node.left),
			...this.preOrder(node.right),
		];
	}

	postOrder(node) {
		if (!node) return [];
		return [
			...this.postOrder(node.left),
			...this.postOrder(node.right),
			node.value,
		];
	}

	breadFirstSearch() {
		if (this.root == null) {
			return [];
		}

		let queue = [this.root];
		let result = [];

		while (queue.length > 0) {
			const node = queue.shift();
			result.push(node.value);

			if (node.left !== null) {
				queue.push(node.left);
			}

			if (node.right !== null) {
				queue.push(node.right);
			}
		}

		return result;
	}
}

export class Node {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
		this.height = 1;
	}
}
