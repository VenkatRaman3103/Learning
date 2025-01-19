function bfs(graphs, start) {
	let visited = new Set();
	let queue = [start];
	let result = [];

	while (queue.length > 0) {
		const dequeue = queue.shift();

		if (!visited.has(dequeue)) {
			result.push(dequeue);
			visited.add(dequeue);
		}

		const neighbors = graphs[dequeue];

		for (let i = 0; i < neighbors.length; i++) {
			const key = neighbors[i];

			if (!visited.has(key)) {
				queue.push(key);
			}
		}
	}
}
