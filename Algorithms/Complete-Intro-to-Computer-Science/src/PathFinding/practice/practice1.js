const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

function modelTheData(data) {
	const visited = [];

	for (let y = 0; y < data.length; y++) {
		const yAxis = [];
		for (let x = 0; x < data[y].length; x++) {
			const coordinate = {
				closed: data[y][x] === 1,
				length: 0,
				openedBy: NO_ONE,
				x: x,
				y: y,
			};
			yAxis.push(coordinate);
		}
		visited.push(yAxis);
	}
	return visited;
}

function shortestPath(maze, [xA, yA], [xB, yB]) {
	const visited = modelTheData(maze);

	visited[yA][xA].openedBy = BY_A;
	visited[yB][xB].openedBy = BY_B;

	const aQueue = [visited[yA][xA]];
	const bQueue = [visited[yB][xB]];

	let iteration = 0;

	while (aQueue.length > 0 && bQueue.length > 0) {
		iteration++;

		// get neighours of a
		let aNeighbors = [];

		while (aQueue.length > 0) {
			const dequeue = aQueue.shift();

			aNeighbors = aNeighbors.concat(
				getNeighbors(visited, dequeue.x, dequeue.y),
			);
		}

		// process the a
		for (let i = 0; i < aNeighbors.length; i++) {
			const neighour = aNeighbors[i];

			if (neighour.openedBy === BY_B) {
				return neighour.length + iteration;
			} else if (neighour.openedBy === NO_ONE) {
				neighour.length = iteration;
				neighour.openedBy = BY_A;
				aQueue.push(neighour);
			}
		}

		// get neighours of b

		let bNeighbors = [];

		while (bQueue.length > 0) {
			const dequeue = bQueue.shift();

			bNeighbors = bNeighbors.concat(
				getNeighbors(visited, dequeue.x, dequeue.y),
			);
		}

		// process the a
		for (let i = 0; i < bNeighbors.length; i++) {
			const neighour = bNeighbors[i];

			if (neighour.openedBy === BY_A) {
				return neighour.length + iteration;
			} else if (neighour.openedBy === NO_ONE) {
				neighour.length = iteration;
				neighour.openedBy = BY_B;
				bQueue.push(neighour);
			}
		}
	}
	return -1;
}
function getNeighbors(maze, x, y) {
	let neighours = [];

	const leftBoundary = 0;
	const rightBoundary = maze[0].length - 1;
	const topBoundary = 0;
	const bottomBoundary = maze.length - 1;

	if (x - 1 >= leftBoundary && !maze[y][x - 1].closed) {
		neighours.push(maze[y][x - 1]);
	}

	if (x + 1 <= rightBoundary && !maze[y][x + 1].closed) {
		neighours.push(maze[y][x + 1]);
	}

	if (y - 1 >= topBoundary && !maze[y - 1][x].closed) {
		neighours.push(maze[y - 1][x]);
	}

	if (y + 1 <= bottomBoundary && !maze[y + 1][x].closed) {
		neighours.push(maze[y + 1][x]);
	}

	return neighours;
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
