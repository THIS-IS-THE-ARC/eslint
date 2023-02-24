/**
 * @fileoverview Index file to allow YAML file to be loaded
 * @author Nico Hülscher
 */
'use strict';

module.exports = {
  extends: ['./default.yml'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/no-anonymous-default-export': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'jsdoc/check-tag-names': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'prettier/prettier': 2
  },
};