import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',

  extensionsToTreatAsEsm: ['.ts'],

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@/(.*)\\.js$': '<rootDir>/src/$1',
  },

  testMatch: ['<rootDir>/src/modules/**/*.test.ts'],

  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/modules/**/*.test.ts',
    '!src/modules/**/*.seed.ts',
    '!src/modules/**/*.types.ts',
    '!src/app.ts',
  ],

  coverageDirectory: 'coverage',

  coverageReporters: ['text', 'lcov', 'html'],

  clearMocks: true,
};

export default config;
