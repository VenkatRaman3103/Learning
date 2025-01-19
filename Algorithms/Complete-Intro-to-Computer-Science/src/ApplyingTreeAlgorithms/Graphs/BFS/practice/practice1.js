function bfs(graphs, start) {
	let visited = new set();

	let queue = [start];
	let result = [];

	while (queue.length > 0) {
		const dequeue = queue.shift();
		if (!visited.has(dequeue)) {
			visited.add(dequeue);
			result.push(dequeue);

			const neighbors = graphs[dequeue];
			for (let i = 0; i < neighbors.length; i++) {
				const neighbor = neighbors[i];
				if (!visited.has(neighbor)) {
					queue.push(neighbor);
				}
			}
		}
	}
}
