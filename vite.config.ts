import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
        server: {
                port: 3000, // Set your desired port here
                // strictPort: true, // Optional: Exit if port is already taken
        },
        plugins: [
                checker({
                        // // e.g. use TypeScript check
                        typescript: {
                                root: "./vite.config.ts",
                                buildMode: true,
                                tsconfigPath: "./tsconfig.app.json",
                        },
                        eslint: {
                                useFlatConfig: true,
                                watchPath: "./**/*",
                                // for example, lint .ts and .tsx
                                lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
                        },
                }),
                react({
                        babel: {
                                plugins: [["babel-plugin-react-compiler"]],
                        },
                }),
        ],
});
