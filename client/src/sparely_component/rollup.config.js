import sass from 'rollup-plugin-sass';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [postcss({ extract: true, process: processScss})]
}