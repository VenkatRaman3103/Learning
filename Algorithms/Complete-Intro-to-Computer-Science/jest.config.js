module.exports = {
	testEnvironment: "node",
	testMatch: ["**/__test__/**/*.test.js"], // Specify test folder and file pattern
	transform: {
		"^.+\\.[tj]sx?$": "babel-jest", // Use Babel for transforming .js, .ts, .jsx, .tsx files
	},
};
