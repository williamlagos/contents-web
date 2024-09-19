import { Linter } from 'eslint'

/** @type {Linter.Config} */
const config = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    'jest/globals': true // Add Jest environment
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended' // Extend Jest recommended rules
  ],
  ignorePatterns: ['dist', 'eslint.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jest', 'standard'], // Add StandardJS plugin
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
    // Add any additional rules or overrides here
  }
}

export default config
