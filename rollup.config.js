const postcss = require('rollup-plugin-postcss');
const { terser } = require('rollup-plugin-terser');

const plugins = [
    postcss({
        inject: false,
        extract: false,
    }),
    terser(),
]

const esBundle = {
    input: './src/es.js',
    output: {
        dir: `dist`,
        entryFileNames: 'youtube-privacy.es.js',
        format: 'es'
    },
    plugins,
};

const iifeBundle = {
    input: './src/iife.js',
    output: {
        dir: `dist`,
        entryFileNames: 'youtube-privacy.js',
        format: 'iife'
    },
    plugins,
};

export default [ esBundle, iifeBundle ];
