import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            name: "toast",
            entry: resolve(__dirname, "src", "index.ts"),
            fileName: (format) => `toast.${format}.js`,
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            copyDtsFiles: true,
        }),
    ],
});
