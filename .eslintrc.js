module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    'no-unused-vars': 'off',
  },
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};
