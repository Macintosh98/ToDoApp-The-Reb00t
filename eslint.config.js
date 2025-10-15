import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig(
        { ignores: ["dist"] },
        {
                files: ["**/*.{ts,tsx}"],
                extends: [
                        js.configs.recommended,
                        eslintPluginPrettierRecommended,
                        tseslint.configs.recommended,
                ],
                languageOptions: {
                        ecmaVersion: 2020,
                        globals: globals.browser,
                        parserOptions: {
                                project: ["./tsconfig.node.json", "./tsconfig.app.json"],
                                tsconfigRootDir: import.meta.dirname,
                        },
                },
                settings: { react: { version: "19.2.0" } },
                plugins: {
                        react,
                        "react-hooks": reactHooks,
                        "react-refresh": reactRefresh,
                },
                rules: {
                        ...react.configs.recommended.rules,
                        ...react.configs["jsx-runtime"].rules,
                        ...reactHooks.configs["recommended-latest"].rules,
                        ...reactRefresh.configs.vite.rules,
                        "prettier/prettier": ["error", { endOfLine: "auto" }],
                        "react-hooks/exhaustive-deps": "off",
                        "react-refresh/only-export-components": "off",
                        "@typescript-eslint/no-unsafe-member-access": "off",
                        "@typescript-eslint/no-explicit-any": "off",
                        "@typescript-eslint/no-empty-function": "off",
                        "@typescript-eslint/no-unsafe-argument": "off",
                        "@typescript-eslint/no-unsafe-assignment": "off",
                        "@typescript-eslint/no-unsafe-call": "off",
                        "@typescript-eslint/no-unsafe-return": "off",
                        "@typescript-eslint/no-misused-promises": "off",
                        "@typescript-eslint/prefer-nullish-coalescing": "off",
                        "@typescript-eslint/prefer-for-of": "off",
                },
        },
);
