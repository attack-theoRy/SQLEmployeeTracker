// Employee Tracker

const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "omnicode",
    database: "company_db"

  });

  connection.connect(function(err) {
    if (err) throw err;
    runPrompts();
  });

  function runPrompts() {
      inquirer.prompt({
          name: "action",
          type: "list",
          message: "What would you like to do?"
      })
  }