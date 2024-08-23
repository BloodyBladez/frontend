import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";
import alias from "@rollup/plugin-alias";

import variables from "./src/styles/variables";

export default defineConfig({
    plugins: [
        alias({
            entries: [
                {
                    find: "@components",
                    replacement: resolve(__dirname, "src", "components")
                },
                {
                    find: "@managers",
                    replacement: resolve(__dirname, "src", "managers")
                },
                {
                    find: "@pages",
                    replacement: resolve(__dirname, "src", "pages")
                },
                {
                    find: "@data",
                    replacement: resolve(__dirname, "src", "data")
                },
                {
                    find: "@classes",
                    replacement: resolve(__dirname, "src", "classes")
                },
                {
                    find: "@config",
                    replacement: resolve(__dirname, "src", "config.ts")
                }
            ]
        }),
        preact({
            devToolsEnabled: true,
            devtoolsInProd: false
        })
    ],
    build: {
        rollupOptions: {
            input: {
                root: resolve(__dirname, "index.html")
            },
            output: {
                manualChunks(id) {
                    if (/node_modules\/.*preact.*/.test(id)) {
                        return "lib";
                    }
                }
            },
            treeshake: "recommended"
        },
        modulePreload: true,
        cssMinify: "lightningcss",
        minify: "esbuild"
    },
    css: {
        preprocessorOptions: {
            styl: {
                compress: true,
                additionalData: variables
                    .map(([name, value]) => `$${name} = ${value}`)
                    .join("\n")
            }
        }
    }
});
