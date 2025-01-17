export class AvlTree {
	constructor() {
		this.root = null;
	}

	getHeight(node) {
		return node ? node.height : 0;
	}

	rotateToLeft(a) {
		let b = a.right;
		a.right = b.left;
		b.left = a;

		// Recalculate heights after rotation
		a.height =
			Math.max(this.getHeight(a.left), this.getHeight(a.right)) + 1;
		b.height =
			Math.max(this.getHeight(b.left), this.getHeight(b.right)) + 1;

		return b;
	}

	rotateToRight(a) {
		let b = a.left;
		a.left = b.right;
		b.right = a;

		// Recalculate heights after rotation
		a.height =
			Math.max(this.getHeight(a.left), this.getHeight(a.right)) + 1;
		b.height =
			Math.max(this.getHeight(b.left), this.getHeight(b.right)) + 1;

		return b;
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
			} else if (traverse.value < value) {
				if (traverse.right == null) {
					traverse.right = newNode;
					break;
				}
				traverse = traverse.right;
			} else {
				return; // No duplicate values
			}
		}

		// Update heights and check for balancing
		while (stack.length > 0) {
			let current = stack.pop();

			// Update height after insertion
			current.height =
				Math.max(
					this.getHeight(current.left),
					this.getHeight(current.right),
				) + 1;

			// Get the balance factor
			const balance =
				this.getHeight(current.left) - this.getHeight(current.right);

			// Left-Left Case
			if (balance > 1 && value < current.left.value) {
				if (stack.length == 0) {
					this.root = this.rotateToRight(current);
				} else {
					let parent = stack[stack.length - 1];
					if (parent.left == current) {
						parent.left = this.rotateToRight(current);
					} else {
						parent.right = this.rotateToRight(current);
					}
				}
			}
			// Right-Right Case
			else if (balance < -1 && value > current.right.value) {
				if (stack.length == 0) {
					this.root = this.rotateToLeft(current);
				} else {
					let parent = stack[stack.length - 1];
					if (parent.right == current) {
						parent.right = this.rotateToLeft(current);
					} else {
						parent.left = this.rotateToLeft(current);
					}
				}
			}
			// Left-Right Case
			else if (balance > 1 && current.left.value < value) {
				current.left = this.rotateToLeft(current.left);
				if (stack.length == 0) {
					this.root = this.rotateToRight(current);
				} else {
					let parent = stack[stack.length - 1];
					if (parent.left == current) {
						parent.left = this.rotateToRight(current);
					} else {
						parent.right = this.rotateToRight(current);
					}
				}
			}
			// Right-Left Case
			else if (balance < -1 && current.right.value > value) {
				current.right = this.rotateToRight(current.right);
				if (stack.length == 0) {
					this.root = this.rotateToLeft(current);
				} else {
					let parent = stack[stack.length - 1];
					if (parent.right == current) {
						parent.right = this.rotateToLeft(current);
					} else {
						parent.left = this.rotateToLeft(current);
					}
				}
			}
		}
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
