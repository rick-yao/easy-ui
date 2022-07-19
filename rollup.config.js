import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"
import typescript from 'rollup-plugin-typescript'

export default {
    input: 'src/lib/index.ts',
    output: {
        globals: {
            vue: 'Vue'
        },
        name: 'easy-ui',
        file: 'dist/lib/gulu.js',
        format: 'umd',
        plugins: [terser()]
    },
    external: ['vue'],
    plugins: [
        scss({ include: /\.scss$/, sass: dartSass }),
        typescript({
            tsconfig: false,
            experimentalDecorators: true,
            module: 'es2015'
        }),
        vue()
    ],
}