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

const tree = new Tree();

function passAnArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		const key = arr[i];

		tree.add(key);
	}
}

passAnArray([4, 3, 2, 1, 5, 6]);
tree.print();
