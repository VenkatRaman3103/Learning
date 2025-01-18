function dfsIterative(graph, start) {
	const visited = new Set();
	const stack = [start];
	const result = [];

	while (stack.length > 0) {
		const node = stack.pop(); // Pop the last element
		if (!visited.has(node)) {
			visited.add(node);
			result.push(node);

			// Add neighbors to the stack (reverse order for consistent traversal)
			for (const neighbor of graph[node].slice().reverse()) {
				if (!visited.has(neighbor)) {
					stack.push(neighbor);
				}
			}
		}
	}

	return result;
}

console.log("DFS (Iterative):", dfsIterative(graph, 0)); // DFS: [0, 2, 6, 5, 1, 4, 3]
