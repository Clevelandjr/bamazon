var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table")

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "yourRootPassword",
  database: "employeeTracker_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log("Connected as id " + connection.threadId);
  start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
      .prompt({
        name: "create",
        type: "list",
        message: "Would you like to create a [Department] a [Roles] or [Employee] or would you like to [View] one of the following?",
        choices: ["Department", "Roles", "Employee", "View"]
      })
      .then(function(answer) {
        // users options
        if (answer.create === "Department") {
          addDepartment();
        }
        else if(answer.create === "Roles") {
          addRole();
        } 
        else if(answer.create === "Employee") {
          addEmployee();
        }
        else if(answer.create === "View") {
          view();
        }
        else{
          connection.end();
        }
      });
  }

  //function to add department
function addDepartment() {
    inquirer
      .prompt([
        {
          name: "division",
          type: "input",
          message: "What department would you like to add?",
        }
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO department SET ?",
          {
            name: answer.division
          },
          function(err) {
            if (err) throw err;
            console.log("Your department was added!");
            runSearch();
          }
        );
      });
  }
//function to add role
  function addRole() {
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "What role title are you adding?",
        },
        {
          name: "salary",
          type: "input",
          message: "What is the salary for this position?",
        },
        {
          name: "departmentId",
          type: "input",
          message: "What departmentID are we adding?",
        }
      ])
      .then(function(answer) {

        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.department,
            salary: answer.salary,
            department_id: answer.departmentId
          },
          function(err) {
            if (err) throw err;
            console.log("Roles Added!");
            runSearch();
          }
        );
      });
  }
//function to add employee
  function addEmployee() {
    inquirer
      .prompt([
        {
          name: "first",
          type: "input",
          message: "What is the first name of employee?",
        },
        {
          name: "last",
          type: "input",
          message: "What is the last name of employee?",
        },
        {
          name: "roleId",
          type: "input",
          message: "What role does the employee have?"
        },
        {
          name: "managerId",
          type: "input",
          message: "What is the managerID for this employee?",
        }
      ])
      .then(function(answer) {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first,
            last_name: answer.last,
            role_id: answer.roleId,
            manager_id: answer.managerId
          },
          function(err) {
            if (err) throw err;
            console.log("Employee Added!");
            runSearch();
          }
        );
      });
  }
  //function to view data
  function viewData() {
    inquirer
      .prompt({
        name: "table",
        type: "list",
        message: "What table would you like to view?",
        choices: ["Department", "Roles", "Employee"]
      })
      .then(function(answer) {
        if (answer.table === "Department") {
          viewDepartment();
        }
        else if(answer.table === "Roles") {
          viewRole();
        } 
        else if(answer.table === "Employee") {
          viewEmployee();
        }
        else{
          connection.end();
        }
      });
  }

  function viewDepartment() {
    connection.query("SELECT * FROM department", function(err,res){
      if (err) throw err;
      console.table(res);
      runSearch();
    })
  };
  
  function viewRole() {
    connection.query("SELECT * FROM roles", function(err,res){
      if (err) throw err;
      console.table(res);
      runSearch();
    })
  };
  
  function viewEmployee() {
    connection.query("SELECT * FROM employee", function(err,res){
      if (err) throw err;
      console.table(res);
      runSearch();
    })
  };
