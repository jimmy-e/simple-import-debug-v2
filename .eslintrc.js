module.exports = {
  plugins: ['simple-import-sort'],
  extends: 'airbnb',
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
