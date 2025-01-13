import js from "@eslint/js";

export default [
	{
		...js.configs.recommended,
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				jest: "readonly",
				describe: "readonly",
				beforeEach: "readonly",
				it: "readonly",
				expect: "readonly",
			},
		},
		rules: {},
	},
];

