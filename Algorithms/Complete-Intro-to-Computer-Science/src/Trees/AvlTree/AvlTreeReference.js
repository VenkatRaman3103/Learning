class Node {
	constructor(key) {
		this.key = key; // Value of the node
		this.left = null; // Left child
		this.right = null; // Right child
		this.height = 1; // Height of the node
	}
}

class AVLTree {
	constructor() {
		this.root = null; // Root of the tree
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
		let stack = []; // To keep track of the path
		let node = this.root;
		let newNode = new Node(key);

		// If tree is empty
		if (!this.root) {
			this.root = newNode;
			return;
		}

		// Traverse the tree to find the correct position
		while (node) {
			stack.push(node); // Keep track of visited nodes
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
				// Duplicate keys are not allowed
				return;
			}
		}

		// Backtrack to rebalance the tree
		while (stack.length) {
			let current = stack.pop();

			// Update height
			current.height =
				Math.max(
					this.getHeight(current.left),
					this.getHeight(current.right),
				) + 1;

			// Get balance factor
			const balance =
				this.getHeight(current.left) - this.getHeight(current.right);

			// Balance the tree
			if (balance > 1 && key < current.left.key) {
				// Left-Left case
				if (stack.length === 0) {
					this.root = this.rotateRight(current);
				} else {
					let parent = stack[stack.length - 1];
					if (parent.left === current)
						parent.left = this.rotateRight(current);
					else parent.right = this.rotateRight(current);
				}
			} else if (balance < -1 && key > current.right.key) {
				// Right-Right case
				if (stack.length === 0) {
					this.root = this.rotateLeft(current);
				} else {
					let parent = stack[stack.length - 1];
					if (parent.left === current)
						parent.left = this.rotateLeft(current);
					else parent.right = this.rotateLeft(current);
				}
			} else if (balance > 1 && key > current.left.key) {
				// Left-Right case
				current.left = this.rotateLeft(current.left);
				if (stack.length === 0) {
					this.root = this.rotateRight(current);
				} else {
					let parent = stack[stack.length - 1];
					if (parent.left === current)
						parent.left = this.rotateRight(current);
					else parent.right = this.rotateRight(current);
				}
			} else if (balance < -1 && key < current.right.key) {
				// Right-Left case
				current.right = this.rotateRight(current.right);
				if (stack.length === 0) {
					this.root = this.rotateLeft(current);
				} else {
					let parent = stack[stack.length - 1];
					if (parent.left === current)
						parent.left = this.rotateLeft(current);
					else parent.right = this.rotateLeft(current);
				}
			}
		}
	}

	// In-order traversal without recursion
	inOrder() {
		let stack = [];
		let node = this.root;

		while (stack.length || node) {
			while (node) {
				stack.push(node);
				node = node.left;
			}

			node = stack.pop();
			console.log(node.key);
			node = node.right;
		}
	}
}

// Example usage
const avl = new AVLTree();
avl.add(10);
avl.add(20);
avl.add(30);
avl.add(40);
avl.add(50);

console.log("In-order traversal:");
avl.inOrder();
