import globals from "globals";
import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import pluginPromise from "eslint-plugin-promise";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  pluginPromise.configs['flat/recommended'],
  { ignores: ["*.config.*"] },
  {
    plugins: {
        '@stylistic': stylistic
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        "axios": "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "module",   
    },
    rules: {
      "@stylistic/array-bracket-spacing": "warn",
      "@stylistic/comma-dangle": ["warn", "only-multiline"],
      "@stylistic/indent": ["warn", 2],
      "@stylistic/max-len": [1, 120, 2, { "ignoreComments": true }],
      "@stylistic/no-multi-spaces": ["error", { "ignoreEOLComments": true }],
      "@stylistic/no-trailing-spaces": "warn",
      "@stylistic/padded-blocks": "off",
      "@stylistic/quotes": [2, "single", {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/space-before-function-paren": "off",
      "camelcase": ["error", { "properties": "always" }],
      "dot-notation": "warn",
      "no-console": "off",
      "no-unused-vars": "warn",
      "no-var": "error",
    },
  },
];