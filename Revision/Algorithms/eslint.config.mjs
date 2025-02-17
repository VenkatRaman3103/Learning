// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node, ...globals.jest },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    prettier,
];
