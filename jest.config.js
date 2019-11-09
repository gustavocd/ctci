const path = require('path');

module.exports = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    }
  },
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/src/helpers/*.ts',
    '!**/src/dataStructures/*.ts'
  ],
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: [
    '<rootDir>',
    'node_modules',
    path.join(__dirname, 'src')
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!@foo)'
  ]
};
