module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/helpers/index.ts'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: ['TS151001'],
        },
      },
    ],
  },
  modulePaths: ['src/', '.jest'],
};
