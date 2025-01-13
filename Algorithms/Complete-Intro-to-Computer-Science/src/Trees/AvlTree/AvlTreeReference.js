class Node {
	constructor(key) {
		this.key = key;
		this.left = null;
		this.right = null;
		this.height = 1;
	}
}

class AVLTree {
	constructor() {
		this.root = null;
	}

	// Get height of a node
	getHeight(node) {
		return node ? node.height : 0;
	}

	// Rotate right
	rotateRight(y) {
		const x = y.left;
		y.left = x.right;
		x.right = y;

		y.height =
			Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
		x.height =
			Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

		return x;
	}

	// Rotate left
	rotateLeft(x) {
		const y = x.right;
		x.right = y.left;
		y.left = x;

		x.height =
			Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
		y.height =
			Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

		return y;
	}

	// Insert a key iteratively
	add(key) {
		let stack = [];
		let node = this.root;
		let newNode = new Node(key);

		if (!this.root) {
			this.root = newNode;
			return;
		}

		// Traverse to find the position
		while (node) {
			stack.push(node);
			if (key < node.key) {
				if (!node.left) {
					node.left = newNode;
					break;
				}
				node = node.left;
			} else if (key > node.key) {
				if (!node.right) {
					node.right = newNode;
					break;
				}
				node = node.right;
			} else {
				return; // No duplicates
			}
		}

		// Rebalance
		while (stack.length) {
			let current = stack.pop();

			current.height =
				Math.max(
					this.getHeight(current.left),
					this.getHeight(current.right),
				) + 1;
			const balance =
				this.getHeight(current.left) - this.getHeight(current.right);

			if (balance > 1 && key < current.left.key) {
				if (stack.length === 0) this.root = this.rotateRight(current);
				else
					stack[stack.length - 1].left === current
						? (stack[stack.length - 1].left =
								this.rotateRight(current))
						: (stack[stack.length - 1].right =
								this.rotateRight(current));
			} else if (balance < -1 && key > current.right.key) {
				if (stack.length === 0) this.root = this.rotateLeft(current);
				else
					stack[stack.length - 1].left === current
						? (stack[stack.length - 1].left =
								this.rotateLeft(current))
						: (stack[stack.length - 1].right =
								this.rotateLeft(current));
			} else if (balance > 1 && key > current.left.key) {
				current.left = this.rotateLeft(current.left);
				if (stack.length === 0) this.root = this.rotateRight(current);
				else
					stack[stack.length - 1].left === current
						? (stack[stack.length - 1].left =
								this.rotateRight(current))
						: (stack[stack.length - 1].right =
								this.rotateRight(current));
			} else if (balance < -1 && key < current.right.key) {
				current.right = this.rotateRight(current.right);
				if (stack.length === 0) this.root = this.rotateLeft(current);
				else
					stack[stack.length - 1].left === current
						? (stack[stack.length - 1].left =
								this.rotateLeft(current))
						: (stack[stack.length - 1].right =
								this.rotateLeft(current));
			}
		}
	}

	// In-order traversal (iterative)
	inOrder() {
		let stack = [];
		let node = this.root;
		const result = [];

		while (stack.length || node) {
			while (node) {
				stack.push(node);
				node = node.left;
			}

			node = stack.pop();
			result.push(node.key);
			node = node.right;
		}

		console.log("In-order:", result);
	}

	// Pre-order traversal (iterative)
	preOrder() {
		if (!this.root) return;

		let stack = [this.root];
		const result = [];

		while (stack.length) {
			let node = stack.pop();
			result.push(node.key);

			// Push right before left to ensure left is processed first
			if (node.right) stack.push(node.right);
			if (node.left) stack.push(node.left);
		}

		console.log("Pre-order:", result);
	}

	// Post-order traversal (iterative)
	postOrder() {
		if (!this.root) return;

		let stack1 = [this.root];
		let stack2 = [];
		const result = [];

		while (stack1.length) {
			let node = stack1.pop();
			stack2.push(node);

			if (node.left) stack1.push(node.left);
			if (node.right) stack1.push(node.right);
		}

		while (stack2.length) {
			result.push(stack2.pop().key);
		}

		console.log("Post-order:", result);
	}
}

// Example usage
const avl = new AVLTree();
avl.add(20);
avl.add(10);
avl.add(30);
avl.add(5);
avl.add(15);
avl.add(25);
avl.add(35);

avl.inOrder(); // Output: In-order: [5, 10, 15, 20, 25, 30, 35]
avl.preOrder(); // Output: Pre-order: [20, 10, 5, 15, 30, 25, 35]
avl.postOrder(); // Output: Post-order: [5, 15, 10, 25, 35, 30, 20]
