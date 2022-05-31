/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
  // Tell Jest to look for source and test files in only these directories
  roots: [
    '<rootDir>/lib/',
    '<rootDir>/test/'
  ],
  // Identify which files are test files
  testMatch: ['**/*.test.ts'],
  // Use the ts-jest to transform Typescript into a form that jest can consume and run, instead of
  // the default babel-jest transformer
  transform: {
    '\\.ts$': 'ts-jest'
  },
  // Section for global vars
  globals: {
    // Configuration specific to ts-jest
    'ts-jest': {
      // Path to component's tsconfig file (relative directory where Jest runs from)
      tsconfig: '../../tsconfig.json'
    }
  },
  // Enable coverage reporting
  collectCoverage: true,
  // Identify which folders/files should be considered in code coverage
  collectCoverageFrom: [
    'lib/*',
    '!lib/*.d.ts'
  ],
  // Update coverage reporters to add coverage summary to default list
  coverageReporters: [
    'clover', 'json', 'lcov', 'text', 'text-summary'
  ]
};

// Config must be exported
module.exports = config;
