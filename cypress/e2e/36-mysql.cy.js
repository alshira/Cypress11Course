// npm install mysqljs/mysql
//In cypress.config.js add: 
//const mysql = require("mysql")
//In cypress.config.js aget export default defineCongi add a function
/*
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
*/ 
/*In cypress.config.js add task
 //adding task for mysql
 on('task',{
    queryDb: (query) => {
      return queryTestDb(query,config)
    }
  }) 
  */
 /*In cypress.config.js add env vars
    env:{
      db: {
        host: "localhost",
        user: "root",
        password: "",
        database: "my_database_here"
      }
    }
 */
