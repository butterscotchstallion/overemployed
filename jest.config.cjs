// eslint-disable-next-line no-undef
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'clover',
    'json',
    'lcov',
    ['text', { skipFull: true }],
    'text-summary',
  ],
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node', 'scss'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules'],
};
