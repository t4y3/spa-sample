import riot from 'rollup-plugin-riot';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';

// prefix
const AUTOPREFIXER_BROWSERS = [
  'last 2 version',
  'ie >= 9',
  'iOS >= 8',
  'Android >= 4'
];

export default {
  input: 'src/app.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    postcss({
      sourceMap: 'inline',
      plugins: [cssnext({ browsers: AUTOPREFIXER_BROWSERS })]
    }),
    riot({
      template: 'pug'
    }),
    nodeResolve({
      jsnext: true
    }),
    commonjs(),
    buble() /*,
    uglify()*/
  ]
};
