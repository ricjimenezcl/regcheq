module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: './',
    testRegex: '.*\\.spec\\.ts$',
    collectCoverage: true,
    coverageDirectory: './coverage',
    coverageProvider: 'v8',
  };
  