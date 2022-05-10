module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['*.spec.ts', '*.spec.tsx'],
  projects: [
    '<rootDir>/packages/**/jest.config.js',
    '<rootDir>/apps/**/jest.config.js',
  ],
};
