const postcss = require('rollup-plugin-postcss');
const {babel} = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');

const plugins = [
    postcss({
        inject: false,
        extract: false,
    }),
    babel({
        "presets": [[
            "@babel/preset-env",
            {
		plugins: [
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-transform-classes',
		],
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
