import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'dist/esm/index.js',
  output: [
    {
      file: 'dist/plugin.js',
      format: 'iife',
      name: 'CapacitorPassToWallet',
      sourcemap: true,
      inlineDynamicImports: true,
    },
    {
      file: 'dist/plugin.cjs.js',
      format: 'cjs',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],

  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
  ],

  // IMPORTANT: do NOT externalize capacitor
  external: [],
};
