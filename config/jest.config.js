module.exports = {
    collectCoverageFrom: [
      'components/**/*.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!**/.next/**',
      '!**/coverage/**',
      '!**/generated/**',
    ],
    testPathIgnorePatterns: ['node_modules/', '.next/', 'coverage/', 'generated/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '../node_modules/babel-jest',
    },
  }
  