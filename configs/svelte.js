/**
 * Contains the svelte config.
 * @author Nico Hülscher
 */
'use strict';

module.exports = {
  extends: [
    '@the-arc-gmbh/eslint-config',
  ],
  plugins: [
    'svelte3',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    'svelte3/typescript': true,
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.svelte']
      }
    }
  }
};
