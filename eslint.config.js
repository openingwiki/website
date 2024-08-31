import js from "@eslint/js";
import query from "@tanstack/eslint-plugin-query";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import solid from "eslint-plugin-solid";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.strictTypeChecked.map((config) => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  })),
  { languageOptions: { globals: globals.browser } },
  ...tailwind.configs["flat/recommended"],
  jsxA11y.flatConfigs.strict,
  ...query.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx}"],
    ...solid.configs["flat/typescript"],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
  prettier,
  {
    ignores: [".output/", ".vinxi/"],
  },
);
