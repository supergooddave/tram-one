import uglify from 'rollup-plugin-uglify'

const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const builtins = require('rollup-plugin-node-builtins')
const globals = require('rollup-plugin-node-globals')
const filesize = require('rollup-plugin-filesize')

const pkg = require('../package.json')

const plugins = [
  resolve({ main: true, preferBuiltins: true }),
  commonjs(),
  globals(),
  builtins(),
  babel({
    presets: [
      'es2015-rollup'
    ]
  }),
  uglify(),
  filesize()
]

export default {
  entry: 'tram-one.js',
  dest: pkg.browser,
  format: 'umd',
  plugins: plugins,
  moduleName: 'tram-one',
  sourceMap: true
}