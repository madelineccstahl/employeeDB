const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3301,
    user: "root",
    password: "root",
    database: "employeedb"
});

connection.connect(function (err) {
    if (err) throw err;
    initialPrompt();
});

function initialPrompt() {
    inquirer
        .createPromptModule({
            type: "list",
            name: "task",
            message: "What would you like to do?",
            choices: [
                "View employees",
                "View by department",
                "Add employee",
                "Update role",
                "Add role",
                "Remove employee"]
        })
        .then(function ({ task }) {
            switch (task) {
                case "View employees":
                    viewEomployee();
                    break;
                case "View by department":
                    viewByDpt();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "Update role":
                    updRole();
                    break;
                case "Add roll":
                    addRole();
                    break;
                case "Remove employee":
                    rmvEmployee();
                    break;
            }
        });
}

function viewEmployee() {
}

function viewEmployeeByDpt() {

}

function addEmployee() {
    var query = 
    `SELECT e.id, e.title, e.wage
    FROM role r`

    connection.query(query, function (err, res) {
        if (err) throw err;
    })
}

function removeEmployee() {
    var query =
    `SELECT e.id, e.first_name, e.last_name
    FROM employee e`

    connection.query(query, function (err, res) {
        if (err) throw err;
    })
}

function addRole() {
    var query = 
    `SELECT d.id, d.name, r.salary AS budget
    FROM employee e
    JOIN role r
    ON e.role_id = r.id
    JOIN department d
    ON d.id = r.deparment_id
    GROUP BY d.id, d.name`

    connection.query(query, function (err, res) {
        if (err) throw err;
    })
}