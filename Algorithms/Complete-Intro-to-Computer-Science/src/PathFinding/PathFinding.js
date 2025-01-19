const fourByFour = [
	[2, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 2],
];

const sixBySix = [
	[0, 0, 0, 0, 0, 0],
	[0, 2, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0],
	[0, 0, 2, 0, 0, 0],
];

let NO_ONE = 0;
let BY_A = 1;
let BY_B = 2;

function generateVisited(data) {
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

const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
	const visited = generateVisited(maze);

	visited[yA][xA].openedBy = BY_A;
	visited[yB][xB].openedBy = BY_B;

	let aQueue = [visited[yA][xA]];
	let bQueue = [visited[yB][xB]];
	let iteration = 0;

	while (aQueue.length && bQueue.length) {
		iteration++;

		let aNeighbors = [];

		while (aQueue.length) {
			const coordinate = aQueue.shift();
			aNeighbors = aNeighbors.concat(
				getNeighbors(visited, coordinate.x, coordinate.y),
			);
		}

		for (let i = 0; i < aNeighbors.length; i++) {
			const neighbor = aNeighbors[i];
			if (neighbor.openedBy === BY_B) {
				return neighbor.length + iteration;
			} else if (neighbor.openedBy === NO_ONE) {
				neighbor.length = iteration;
				neighbor.openedBy = BY_A;
				aQueue.push(neighbor);
			}
		}

		let bNeighbors = [];

		while (bQueue.length) {
			const coordinate = bQueue.shift();
			bNeighbors = bNeighbors.concat(
				getNeighbors(visited, coordinate.x, coordinate.y),
			);
		}

		for (let i = 0; i < bNeighbors.length; i++) {
			const neighbor = bNeighbors[i];
			if (neighbor.openedBy === BY_A) {
				return neighbor.length + iteration;
			} else if (neighbor.openedBy === NO_ONE) {
				neighbor.length = iteration;
				neighbor.openedBy = BY_B;
				bQueue.push(neighbor);
			}
		}
		logMaze(visited);
	}
	return -1;
};

const getNeighbors = (visited, x, y) => {
	const neighbors = [];

	if (x - 1 >= 0 && !visited[y][x - 1].closed) {
		// left
		neighbors.push(visited[y][x - 1]);
	}

	if (x + 1 < visited[0].length && !visited[y][x + 1].closed) {
		// right
		neighbors.push(visited[y][x + 1]);
	}

	if (y - 1 >= 0 && !visited[y - 1][x].closed) {
		// up
		neighbors.push(visited[y - 1][x]);
	}

	if (y + 1 < visited.length && !visited[y + 1][x].closed) {
		// down
		neighbors.push(visited[y + 1][x]);
	}

	return neighbors;
};

function logMaze(maze) {
	console.log("================");
	let header = "XX | ";
	let subheader = "-----";
	for (let i = 0; i < maze[0].length; i++) {
		const num = i >= 10 ? i : "0" + i;
		header += `${num} `;
		subheader += "---";
	}
	console.log(header);
	console.log(subheader);
	maze.forEach((row, i) => {
		const num = i >= 10 ? i : "0" + i;
		let buffer = `${num} | `;
		const colors = [];

		row.forEach((item) => {
			if (item.closed) {
				buffer += "%cXX ";
				colors.push("color: gray");
			} else if (item.openedBy === NO_ONE) {
				buffer += "%c•• ";
				colors.push("color: lightgray");
			} else {
				buffer +=
					"%c" +
					(item.length >= 10 ? item.length : "0" + item.length) +
					" ";
				colors.push(
					item.openedBy === BY_A ? "color: lime" : "color: hotpink",
				);
			}
		});

		console.log(buffer, ...colors);
	});
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
findShortestPathLength(eightByEight, [1, 7], [7, 7]);
