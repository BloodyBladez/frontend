import {defineConfig} from "vite";
import preact from "@preact/preset-vite";

import {resolve} from "path";

import variables from "./src/styles/variables";

export default defineConfig({
    plugins: [
        preact({
            devToolsEnabled: true,
            devtoolsInProd: false
        })
    ],
    build: {
        rollupOptions: {
            input: {
                menu: resolve(__dirname, 'index.html'),
                profile: resolve(__dirname, 'profile.html'),
                character: resolve(__dirname, 'character.html')
            },
            output: {
                manualChunks(id) {
                    if(/node_modules\/.*preact.*/.test(id)) {
                        return 'lib';
                    }
                }
            },
            treeshake: 'recommended'
        },
        modulePreload: true,
        cssMinify: 'lightningcss',
        minify: 'esbuild'
    },
    css: {
        preprocessorOptions: {
            styl: {
                compress: true,
                additionalData: variables.map(([name, value]) =>
                    `$${name} = ${value}`
                ).join('\n')
            }
        }
    }
});