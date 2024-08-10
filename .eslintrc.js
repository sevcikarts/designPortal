module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/payload-types.ts', '**/migrations/*'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': ['error', { allow: ['error'] }],
  },
}
