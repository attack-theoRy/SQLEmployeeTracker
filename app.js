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
          message: "What would you like to do?",
          choices: [
              "Add department", 
              "Add role",
              "Add employee",
              "View departments",
              "View role",
              "View employees",
              "Update employee roles",
              "exit"
          ]
      })
      .then(function(answer) {

        switch(answer.action){
            case "Add department":
                addDepartment();
                break;
            
            case "Add employee":
                addEmployee();
                break;

            case "Add role":
                addRole();
                break;
            
            case "View department":
                viewDepartments();
                break;

        }
      })
  }

  function addDepartment() {
    inquirer.prompt([
        {
        type: "input",
        name: "name",
        message: "Enter the name of the department you're adding"
    } ]).then(function(res) {
        
        connection.query("INSERT INTO department SET ?", res.name, function(err, data) {
            if (err) throw (err);
            
            console.table("Department Added!");
            runPrompts();
        })
    })
}


function viewDepartments()
  {
    connection.query("SELECT * FROM department", function (err, data) {
        cTable.table(data);
        runPrompts();
    })
}

/*function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter role you're adding"
        }]).then(function(response) {

            connection.query("INSERT INTO role SET ?", response.name, function(err, data) {
                if (err) throw (err);
                console.table("Role added!");
                runPrompts();   

            })
        })
}

*/

