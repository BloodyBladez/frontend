import {defineConfig} from "vite";
import preact from "@preact/preset-vite";
import replace from "@rollup/plugin-replace";

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
    ]
});