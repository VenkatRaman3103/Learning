const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

function modelTheData(maze) {
	const visited = [];

	for (let y = 0; y < maze.length; y++) {
		const yAxis = [];

		for (let x = 0; x < maze[y].length; x++) {
			const coordinates = {
				x,
				y,
				length: 0,
				closed: maze[y][x] == 1,
				openedBy: NO_ONE,
			};

			yAxis.push(coordinates);
		}
		visited.push(yAxis);
	}
	return visited;
}

function setAndProcessNeighbor(visited, queue, point1, point2, iteration) {
	let neighbors = [];
	while (queue.length > 0) {
		const dequeue = queue.shift();
		neighbors = neighbors.concat(
			getNeighbors(visited, dequeue.x, dequeue.y),
		);
	}

	for (let i = 0; i < neighbors.length; i++) {
		const neighbor = neighbors[i];

		if (neighbor.openedBy === point2) {
			return neighbor.length + iteration;
		} else if (neighbor.openedBy === NO_ONE) {
			neighbor.openedBy = point1;
			neighbor.length = iteration;
			queue.push(neighbor);
		}
	}

	return null;
}

export function shortestPath(mave, [xa, ya], [xb, yb]) {
	if (xa === xb && ya === yb) {
		return 0;
	}

	const visited = modelTheData(mave);

	visited[ya][xa].openedBy = BY_A;
	visited[yb][xb].openedBy = BY_B;

	const aQueue = [visited[ya][xa]];
	const bQueue = [visited[yb][xb]];

	let iteration = 0;

	while (aQueue.length > 0 && bQueue.length > 0) {
		iteration++;

		let result = setAndProcessNeighbor(
			visited,
			aQueue,
			BY_A,
			BY_B,
			iteration,
		);
		if (result !== null) return result;

		result = setAndProcessNeighbor(visited, bQueue, BY_B, BY_A, iteration);
		if (result !== null) return result;
	}

	return -1;
}

function getNeighbors(maze, x, y) {
	const neighbors = [];

	if (x - 1 >= 0 && !maze[y][x - 1].closed) {
		neighbors.push(maze[y][x - 1]);
	}

	if (x + 1 < maze[0].length && !maze[y][x + 1].closed) {
		neighbors.push(maze[y][x + 1]);
	}

	if (y - 1 >= 0 && !maze[y - 1][x].closed) {
		neighbors.push(maze[y - 1][x]);
	}

	if (y + 1 < maze.length && !maze[y + 1][x].closed) {
		neighbors.push(maze[y + 1][x]);
	}
	return neighbors;
}

const eightByEight = [
	[0, 0, 1, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 1, 0, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 1, 0, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 1, 0],
	[0, 2, 0, 0, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 1, 2],
];

console.log(shortestPath(eightByEight, [1, 7], [7, 7]));
