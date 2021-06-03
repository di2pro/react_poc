const path = require("path");

module.exports = {
  testEnvironment: "jsdom",
  cacheDirectory: "jest-cache",
  collectCoverage: true,
  collectCoverageFrom: [path.join("src", "**", "*.js")],
  coverageDirectory: "jest-coverage",
  coverageProvider: "babel",
  coverageThreshold: {
    global: {
      branches: 25,
      functions: 25,
      lines: 25,
      statements: 25,
    },
  },
  roots: [path.join("src")],
  verbose: true,
};
