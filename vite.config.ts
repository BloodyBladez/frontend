import {defineConfig} from "vite";
import preact from "@preact/preset-vite";
import replace from "@rollup/plugin-replace";

import {resolve} from "path";

export default defineConfig({
    plugins: [
        preact({
            devToolsEnabled: true,
            devtoolsInProd: false
        }),
        replace({
            __APP_NAME__: 'BloodyBladez',
            preventAssignment: true
        })
    ],
    build: {
        rollupOptions: {
            input: {
                menu: resolve(__dirname, 'index.html'),
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
    }
});