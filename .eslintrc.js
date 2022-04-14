module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/first': 'off',
    'import/order': 'off',
    indent: 'off',
    'no-new': 'off',
    'no-tabs': 'off',
    semi: ['off', 'always'],
  },
}
