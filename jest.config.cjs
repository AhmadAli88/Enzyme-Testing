module.exports = {
  // Other Jest configurations...

  // Tell Jest to transform JavaScript files using babel-jest
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  // Ignore node_modules, but allow specific libraries like cheerio to be transformed
  transformIgnorePatterns: [
    "node_modules/(?!cheerio)" // Add cheerio to exceptions
  ],
  setupFiles: ["<rootDir>/jest.setup.js"],
};
