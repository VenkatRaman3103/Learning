import babelParser from "@babel/eslint-parser";

export default [
	{
		parser: babelParser,
		parserOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
		},
		rules: {},
	},
];
