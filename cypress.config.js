const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://illuse-cli-parameter.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      envVar: "Hello from cypress.config.js",
      demoQA: "https://demoqa.com",
      theInternet: "https://the.internet.herokuapp.com",
      Angular: "https://www.globalsqa.com",
      protractor : "https://www.globalsqa.com/angularjs-protractor-practice-site"
    }
  },
  pageLoadTimeout:60000,
  //viewportHeight: 1000,
  //viewportWidth: 1400
});
