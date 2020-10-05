module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:vue/recommended',
    'plugin:eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-unused-vars': ['warn'],
    'prettier/prettier': ['error', { singleQuote: false }],
  },
};
