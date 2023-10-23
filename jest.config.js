module.exports = {
  preset: 'react-native',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // Configura los paths para excluir de la cobertura
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/example/context/hooks/MyHook/useExitBackButton.tsx',
    '/src/example/components/screens/LoginScreen/LoginScreen.tsx',
  ],  
};
