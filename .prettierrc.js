// @ts-check

/**
 * @type {import('prettier').Options}
 */
modulex.exports = {
  plugins: [require.resolve('@prettier/plugin-pug')],
  tabWidth: 2,
  printWidth: 100,
  arrowParens: 'avoid',
  semi: false,
  singleQuote: true,
  proseWrap: 'preserve',
  requirePragma: false,
  bracketSpacing: true,
  trailingComma: 'none'
}
