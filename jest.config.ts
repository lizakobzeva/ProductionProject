import type { Config } from "jest";
import path from "path";

const config: Config = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  setupFilesAfterEnv: ["<rootDir>config/jest/SetupTests.ts"],
  testEnvironment: "jsdom",
  verbose: true,
  moduleNameMapper: {
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
    "\\.(css|scss)$": "identity-obj-proxy",
    "react-i18next": "<rootDir>config/jest/reacti18nextMock.ts",
  },
};

export default config;
