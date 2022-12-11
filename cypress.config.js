const { defineConfig } = require("cypress");
//verify download import
const {isFileExist, findFiles} = require('cy-verify-downloads')

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://illuse-cli-parameter.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      /*********************************/
      //adding cy-verify-downloads node event
      on('task',{isFileExist,findFiles})
      /*********************************/

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
