/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  endOfLine: 'lf',
  plugins: [],
  overrides: [
    {
      files: ['backend/**/*.ts', 'backend/**/*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
  ],
};

module.exports = config;

