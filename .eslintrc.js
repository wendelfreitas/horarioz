module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config`
  extends: ['@stellar-cultures/eslint-config'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
