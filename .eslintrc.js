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
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/first': 'off',
    'import/order': 'off',
    indent: 'off',
    '@typescript-eslint/index': [
      'error',
      'tab'
    ],
    'no-new': 'off',
    'no-tabs': 'off',
    semi: ['error', 'always'],
    'vue/html-index': ['error', 'tab'],
    'vue/order-in-components': 'off'
  },
}
