module.exports = {
  root: true,
  env: { node: true, jest: true },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  }
}