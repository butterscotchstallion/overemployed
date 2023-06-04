// eslint-disable-next-line no-undef
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'scss'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules'],
};
