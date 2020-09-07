const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());

  return Object.assign({}, config, {
    fixturesFolder: "./stubs",
    integrationFolder: "tests/e2e/features",
    screenshotsFolder: "tests/e2e/screenshots",
    videosFolder: "tests/e2e/videos",
    supportFile: "tests/e2e/support/index.js"
  });
};
