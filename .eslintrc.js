module.exports = {
  parser: 'babel-eslint',
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            "^react",
            "^@?\\w",
            "^(main|core|arc-storybook|viz|design-system|placement|reporting|onboarding)(/.*|$)",
            "^\\u0000",
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^.+\\.s?css$",
          ],
        ],
      }
    ],
  },
};
