// @ts-check

import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tsdocConfig from "eslint-plugin-tsdoc";
import tseslint from "typescript-eslint";

export default tseslint.config({
  ignores: ["**/dist/**", "**/node_modules/**", "**/coverage/**"],
  extends: [
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    eslintPluginPrettierRecommended,
  ],
  plugins: {
    tsdoc: tsdocConfig,
  },
  rules: {
    "tsdoc/syntax": "error",
    "sort-imports": "error",
  },
});
