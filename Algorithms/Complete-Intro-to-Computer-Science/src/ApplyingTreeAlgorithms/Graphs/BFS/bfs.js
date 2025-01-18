function bfs(graph, start) {
	const visited = new Set();
	const queue = [start];
	const result = [];

	while (queue.length > 0) {
		const node = queue.shift();
		if (!visited.has(node)) {
			visited.add(node);
			result.push(node);

			for (const neighbor of graph[node]) {
				if (!visited.has(neighbor)) {
					queue.push(neighbor);
				}
			}
		}
	}

	return result;
}

console.log("BFS:", bfs(graph, 0));
