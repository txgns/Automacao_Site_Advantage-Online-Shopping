const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 768,
  viewportWidth: 1366,

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

    },
    supportFile: false,
    specPattern: "cypress/e2e/step_definitions/*.feature"

  },
});
