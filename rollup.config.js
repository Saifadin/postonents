import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

import pkg from './package.json';

const input = './compiled/index.js';
const external = id => !id.startsWith('.') && !id.startsWith('/');
const babelOptions = {
  exclude: /node_modules/,
  plugins: ['annotate-pure-calls', 'dev-expression'],
};

const buildCjs = ({ env }) => ({
  input,
  external,
  output: {
    file: `./dist/${pkg.name}.cjs.${env}.js`,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    sourceMaps(),
    sizeSnapshot(),
  ],
});

export default [
  buildCjs({ env: 'production' }),
  buildCjs({ env: 'development' }),
  {
    input,
    external,
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), babel(babelOptions), sizeSnapshot(), sourceMaps()],
  },
];
