export class AvlTree {
	constructor() {
		this.root = null;
	}

	getHeight(node) {
		return node ? node.height : 0;
	}

	rotateRigth(x) {
		let y = x.left;
		x.left = y.right;
		y.right = x;

		x.height =
			Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
		y.height =
			Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

		return y;
	}

	rotateLeft(x) {
		let y = x.right;
		x.right = y.left;
		y.left = x;

		x.height =
			Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
		y.height =
			Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

		return y;
	}

	add(value) {
		let stack = [];
		const newNode = new Node(value);

		if (this.root == null) {
			this.root = newNode;
			return;
		}

		let current = this.root;

		while (true) {
			stack.push(current);

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

			const balanceFactor =
				this.getHeight(current.left) - this.getHeight(current.right);

			if (balanceFactor > 1 && value < current.left.value) {
				// left - left

				if (stack.length == 0) {
					this.root = this.rotateRigth(current);
				} else {
					const parent = stack[stack.length - 1];
					if (parent.left == current) {
						parent.left = this.rotateRigth(current);
					} else {
						parent.right = this.rotateRigth(current);
					}
				}
			} else if (balanceFactor < -1 && value > current.right.value) {
				// right - right
				if (stack.length == 0) {
					this.root = this.rotateLeft(current);
				} else {
					const parent = stack[stack.length - 1];
					if (parent.right == current) {
						parent.right = this.rotateLeft(current);
					} else {
						parent.left = this.rotateLeft(current);
					}
				}
			} else if (balanceFactor > 1 && current.left.value < value) {
				// left - right
				current.left = this.rotateLeft(current.left);
				if (stack.length == 0) {
					this.root = this.rotateRigth(current);
				} else {
					const parent = stack[stack.length - 1];
					if (parent.left == current) {
						parent.left = this.rotateRigth(current);
					} else {
						parent.right = this.rotateRigth(current);
					}
				}
			} else if (balanceFactor < -1 && current.right.value > value) {
				// right - left
				current.right = this.rotateRigth(current.right);
				if (stack.length == 0) {
					this.root = this.rotateLeft(current);
				} else {
					const parent = stack[stack.length - 1];
					if (parent.right == current) {
						parent.right = this.rotateLeft(current);
					} else {
						parent.left = this.rotateLeft(current);
					}
				}
			}
		}
	}

	// traversals
	// Depth First Search
	inOrder(node, result = []) {
		// left -> root -> right
		if (node) {
			this.inOrder(node.left, result);
			result.push(node.value);
			this.inOrder(node.right, result);
		}

		return result;
	}

	preOrder(node, result = []) {
		// root -> left -> right
		if (node) {
			result.push(node.value);
			this.preOrder(node.left, result);
			this.preOrder(node.right, result);
		}

		return result;
	}

	postOrder(node, result = []) {
		// left -> right -> root
		if (node) {
			this.postOrder(node.left, result);
			this.postOrder(node.right, result);
			result.push(node.value);
		}

		return result;
	}

	// Breat First Search
	breadthFirstSearch() {
		if (this.root == null) {
			return [];
		}

		const queue = [this.root];
		const result = [];

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

	print() {
		return JSON.stringify(this.root, null, 4);
	}
}

export class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
		this.height = 1;
	}
}
