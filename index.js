/**
 * @fileoverview Index file to allow YAML file to be loaded
 * @author Nico Hülscher
 */
'use strict';

module.exports = {
  extends: ['./default.yml'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/no-anonymous-default-export': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/react-in-jsx-scope': 'off',
      'sort-keys-fix/sort-keys-fix': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-shadow': [
        'error'
      ],
      'jsdoc/check-tag-names': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      'prettier/prettier': 2,
      'indent': 'off',
      '@typescript-eslint/indent': ['error']
    },
    settings: {
      'svelte3/typescript': () => require('typescript'),
      'svelte3/typescript': true,
    }
};
