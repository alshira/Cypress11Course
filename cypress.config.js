const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://illuse-cli-parameter.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
