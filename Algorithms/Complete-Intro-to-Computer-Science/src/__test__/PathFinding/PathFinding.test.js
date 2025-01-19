import { shortestPath } from "../../PathFinding/practice/practice2";

describe("shortestPath function", () => {
	test("should find the shortest path in a basic 2x2 maze", () => {
		const maze = [
			[0, 0],
			[0, 0],
		];
		expect(shortestPath(maze, [0, 0], [1, 1])).toBe(2); // Diagonal path is 2 steps
	});

	test("should handle a simple 3x3 maze with no obstacles", () => {
		const maze = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		];
		expect(shortestPath(maze, [0, 0], [2, 2])).toBe(4); // Path is along the edges
	});

	test("should return -1 when there is no valid path", () => {
		const maze = [
			[0, 1, 0],
			[1, 1, 1],
			[0, 1, 0],
		];
		expect(shortestPath(maze, [0, 0], [2, 2])).toBe(-1); // No path exists
	});

	test("should handle a maze where the start and end points are the same", () => {
		const maze = [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0],
		];
		expect(shortestPath(maze, [1, 1], [1, 1])).toBe(0); // Start and end are the same
	});

	test("should handle a larger 8x8 maze with obstacles", () => {
		const maze = [
			[0, 0, 1, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0, 0, 1],
			[0, 0, 0, 0, 0, 1, 0, 0],
			[0, 0, 0, 1, 0, 1, 1, 0],
			[0, 0, 0, 0, 0, 0, 1, 0],
			[0, 2, 0, 0, 0, 0, 1, 0],
			[0, 0, 0, 0, 0, 0, 1, 2],
		];
		expect(shortestPath(maze, [1, 7], [7, 7])).toBe(12); // Shortest path is 12 steps
	});

	test("should handle a fully blocked maze", () => {
		const maze = [
			[1, 1, 1],
			[1, 1, 1],
			[1, 1, 1],
		];
		expect(shortestPath(maze, [0, 0], [2, 2])).toBe(-1); // Fully blocked
	});

	test("should handle a single-cell maze", () => {
		const maze = [[0]];
		expect(shortestPath(maze, [0, 0], [0, 0])).toBe(0); // Start and end are the same in a 1x1 maze
	});

	test("should handle a maze where the path must go around obstacles", () => {
		const maze = [
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 1, 1, 1],
			[0, 0, 0, 0],
		];
		expect(shortestPath(maze, [0, 0], [3, 4])).toBe(9); // Longest valid path
	});

	test("should handle a 5x5 maze with complex obstacles", () => {
		const maze = [
			[0, 1, 0, 0, 0],
			[0, 1, 0, 1, 0],
			[0, 0, 0, 1, 0],
			[1, 1, 0, 1, 0],
			[0, 0, 0, 0, 0],
		];
		expect(shortestPath(maze, [0, 0], [4, 4])).toBe(8); // Path snakes around obstacles
	});
});
