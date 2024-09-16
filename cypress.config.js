const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9yv4dp',
  viewportHeight: 768,
  viewportWidth: 1366,

  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

    },
    supportFile: false,
    specPattern: "cypress/e2e/integrations/*/features/*.feature"

  },
});
