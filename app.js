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
    console.log("connected!")
    runPrompts();
  //  connection.end(); 
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
              "View roles",
              "View employees",
              "View employees by manager",
              "Update employee role",
              "Update employee's manager ID",
              "Exit",
          ]
      })
      .then(function(answer) {

        switch(answer.action){
            case "Add department":
                addDepartment()
                break;
            
            case "Add employee":
                addEmployee()
                break;

            case "Add role":
                addRole()
                break;
            
            case "View departments":
                viewDepartments()
                break;

            case "View roles":
                viewRoles()
                break;

            case "View employees":
                viewEmployees()
                break;

            case "Update employee role":
                updateEmployeeRole()
                break;

            case "Update employee's manager ID":
                updateEmployeeManager()
                break;
   
            case "View employees by manager":
                viewEmployeesByManager()
                break;

            case "Exit":
                connection.end()
                break; 
                

            default:
                break;
        }
      })
  }

  function addDepartment() {
    inquirer.prompt([
        {
        message: "Enter the name of the department you're adding",
        type: "input",
        name: "name",
        }
     ]).then(function(response) {
        
        connection.query("INSERT INTO department (name) values (?)", response.name, function(err, data) {
            if (err) throw (err);

            runPrompts();
        })
    })
}

function addEmployee(){
    inquirer.prompt([
        {
            message: "Enter the first name of the employee you're adding",
            type: "input",
            name: "first_name",
        },
        {
            message: "Enter the last name of the employee",
            type: "input",
            name: "last_name",

        },
        {
            message: "Enter the employee's role",
            type: "input",
            name: "role",
        },
        {
            message: "Enter the manager's id if there is one",
            type: "number",
            name: "manager_ID",
        }
    ]).then(function(response){
        connection.query("INSERT into employee (first_name, last_name, role, manager_ID) values (?, ?, ?, ?)" [response.first_name, response.last_name, response.role, response.manager_ID],
        function (err, data) {
        //    console.table(data)
            runPrompts();
        })
       
    })
}
function addRole() {
    inquirer.prompt([
        {
            message: "Enter the title of the role you're adding",
            type: "input",
            name: "title",
        },
        {
            message: "Enter the salary of the role",
            type: "number",
            name: "salary",
        },
        {
            message: "Enter the department ID of the role",
            type: "number",
            name: "dept_ID",
        }
    ]).then(function (response) {
        connection.query("INSERT INTO role (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.dept_ID], function (err, data) {
         //   console.table(data);
        })
        runPrompts();
    })
}



function viewDepartments()
  {
    connection.query("SELECT * FROM department", function (err, data) {
       console.table(data);
       runPrompts();
      
    })


}

function viewRoles()
  {
    connection.query("SELECT * FROM role", function (err, data) {
       console.table(data);
       runPrompts();

    })

}

function viewEmployees()
  {
    connection.query("SELECT * FROM employee", function (err, data) {
       console.table(data);
       runPrompts();

    })

}

function updateEmployeeRole()
{
    inquirer.prompt([

        {
            message: "Enter the first name of the employee you're updating",
            type: "input",
            name: "first_name",
        },
        {
            message: "Enter the new role ID for this employee",
            type: "number",
            name: "role_ID",

        }
    ]).then(function(response) {

        connection.query("UPDATE employee SET role_ID = ? WHERE first_name = ?", [response.role_ID, response.first_name], function (err, data){
            console.table(data);
            console.log("Updated employee role!")
            runPrompts();
        })
    })
    
}

function updateEmployeeManager()
{
    inquirer.prompt([
        {
            message: "Enter first name of the employee you are updating",
            type: "input",
            name: "first_name",

        },
        {
            message: "Enter the manager ID number you would like to update to",
            type: "number",
            name: "manager_ID",
        }
    ]).then(function(response) {

        connection.query("UPDATE employee SET manager_id = ? WHERE first_name = ?", [response.manager_ID, response.first_name], function (err, data) {
            console.log("Employee's manager updated!")
            runPrompts();
        })
    })
}

function viewEmployeesByManager()
{
    inquirer.prompt([
        {
            message: "Enter the manager ID to view employee's with that manager",
            type: "number",
            name: "manager_ID",
        }
    ]).then(function(response) {
        
        connection.query("SELECT * FROM employee WHERE manager_id = ?", [response.manager_ID], function (err, data) {
            console.table(data)
            runPrompts()
        })
    })
}



