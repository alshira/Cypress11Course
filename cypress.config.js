const { defineConfig } = require("cypress");
//verify download import
const {isFileExist, findFiles} = require('cy-verify-downloads')
//Excel requirements
const xlsx = require("node-xlsx").default
const fs = require("fs") //for file
const path = require("path"); //for filepath
const { resolve } = require("path");
const mysql = require("mysql") //for mysql supprt

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://illuse-cli-parameter.com",
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      /*********************************/
      //adding cy-verify-downloads node event
      on('task',{isFileExist,findFiles})
      /*********************************/
      require('cypress-mochawesome-reporter/plugin')(on)
      //adding support for excel 
      on('task',{
        parseXlsx({filePath}){
          return new Promise((resolve,reject)=>{
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath))
              resolve(jsonData)
            } catch(e) {
              reject(e)
            }
          })
        }
      })
      //adding task for mysql
      on('task',{
        queryDb: (query) => {
          return queryTestDb(query,config)
        }
      })

    },
    env:{
      envVar: "Hello from cypress.config.js",
      demoQA: "https://demoqa.com",
      theInternet: "https://the.internet.herokuapp.com",
      Angular: "https://www.globalsqa.com",
      protractor : "https://www.globalsqa.com/angularjs-protractor-practice-site",
      db: {
        host: "localhost",
        user: "root",
        password: "",
        database: "my_database_here"
      }
    }
  },
  pageLoadTimeout:60000,
  //viewportHeight: 1000,
  //viewportWidth: 1400,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts:true,
    reportPageTipe: "This is my report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttemps:false,
  },
  retries: {
    "openMode":0,
    "runMode":2,
  },
});

function queryTestDb(query, config){
  //create new mysql connection usuing credentials from cypress.json env
  const connection = mysql.createConnection(config.env.db) 
  //start connection
  connection.connect()
  //exec query + disconect from db as a Promise
  return new Promise((resolve, reject)=>{
    connection.query(query, (error,results)=>{
      if (error) {
        reject(error)
      } else {
        connection.end()
        console.log(results)
        return resolve(results)
      }
    })
  })
}