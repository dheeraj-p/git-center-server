module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  coverageReporters: ['html', 'text'],
  verbose: true,
  timers: 'fake',
  collectCoverageFrom: [
    'components/**/*.js',
    'pages/api/**/*.js',
    '!**/*.style.js'
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  preset: '@shelf/jest-mongodb'
};
