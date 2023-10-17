module.exports = {
  preset: 'react-native',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  testPathIgnorePatterns: [
    ".history", // From Visual Studio Code
  ], 
};
