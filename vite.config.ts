import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import * as path from "path";

export default defineConfig({
    plugins: [
        // генерация файла `index.d.ts`
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            // путь к основному файлу библиотеки
            entry: path.resolve(__dirname, "src/lib.ts"),
            // название библиотеки
            name: "AnimateWriter",
            // форматы генерируемых файлов
            formats: ["es", "umd"],
            // названия генерируемых файлов
            fileName: (format) => `animate-writer.${format}.js`,
        },
    },
});