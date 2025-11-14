module.exports = {
  root: true,
  env: { node: true, jest: true },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  ignorePatterns: ['**/*.d.ts'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': 'off',
    'eol-last': 'off',
    'no-new': 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off',
        'eol-last': 'off',
      },
    },
  ],
};