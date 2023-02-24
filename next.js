/**
 * Contains the next config.
 * @author Nico Hülscher
 */
'use strict';

module.exports = {
  extends: [
    'plugin:@next/eslint-plugin-next',
    'next/core-web-vitals',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    "plugin:prettier/recommended",
  ],
  plugins: ['next'],
  rules: {
    'react-in-jsx-scope': 'off'
  }
};
