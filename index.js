const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const { report } = require('process');

const allEmployees = [];

const questions = [
    {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to create?",
        choices: ["Manager", "Intern", "Engineer"]
    }

]

function start() {
    inquirer.prompt([
        {
            type: "list",
            name: "addMore",
            message: "Would you like to create an employee?",
            choices: ["Yes", "No"]
        }
    ]).then(response => {
        if (response.addMore === "Yes") {
            teamQuestions()
        }

        else if (response.addMore === "No") {
            createTeam()
        }
    })
}
//note wrap in a function
function teamQuestions() {
    inquirer.prompt(questions).then(response => {
        if (response.employeeType === "Manager") {
            createManager()
        }

        else if (response.employeeType === "Engineer") {
            createEngineer()
        }

        else if (response.employeeType === "Intern") {
            createIntern()
        }
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "EngineerName",
            message: "What is the Engineer's name?",
        },

        {
            type: "input",
            name: "EngineerID",
            message: "What is the Engineer's ID?",
        },

        {
            type: "input",
            name: "EngineerEmail",
            message: "What is the Engineer's email?",
        },

        {
            type: "input",
            name: "EngineerGithub",
            message: "What is the Engineer's Github?",
        }

    ]).then(response => {
        console.log(response)
        let engineer = new Engineer(response.EngineerName, response.EngineerID, response.EngineerEmail, response.EngineerGithub)
        console.log(engineer.name + " Engineer Created")
        allEmployees.push(engineer)
        start()
    })

}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "InternName",
            message: "What is the intern's name?",
        },

        {
            type: "input",
            name: "InternID",
            message: "What is the intern's ID?",
        },

        {
            type: "input",
            name: "InternEmail",
            message: "What is the intern's email?",
        },

        {
            type: "input",
            name: "InternSchool",
            message: "What is the intern's school?",
        },

    ]).then(response => {
        console.log(response)
        let intern = new Intern(response.InternName, response.InternID, response.InternEmail, response.InternSchool)
        console.log(intern.name + " Intern Created")
        allEmployees.push(intern)
        start()
    })

}

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "ManagerName",
            message: "What is the manager's name?",
        },

        {
            type: "input",
            name: "ManagerID",
            message: "What is the manager's ID?",
        },

        {
            type: "input",
            name: "ManagerEmail",
            message: "What is the manager's email?",
        },

        {
            type: "input",
            name: "OfficeNumber",
            message: "What is the manager's office number?",
        },

    ]).then(response => {
        let manager = new Manager(response.ManagerName, response.ManagerID, response.ManagerEmail, response.OfficeNumber)
        console.log(manager.name + " Manager Created")
        console.log(response)
        allEmployees.push(manager)
        start()
    })
}


function createTeam() {
    
    // const renderHTML = render (allEmployees)
    fs.writeFile("./team.html", htmlGen(allEmployees), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("file written");
    })
}

function htmlGen(allEmployees) {
    console.log(allEmployees)
    var HTMLstore = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="output/style.css">
    </head>
    
    <body>`
    for (let i = 0; i < allEmployees.length; i++) {
        const element = `<div class="card" style="width: 15rem; height: 15rem;">
        <div class="card-body">
          <h5 class="card-title">${allEmployees[i].name}</h5>
          <ul class="list-group">
            <li class="list-group-item">${allEmployees[i].email}</li>
            <li class="list-group-item">${allEmployees[i].id}</li>
            <li class="list-group-item">${alt(allEmployees[i])}</li>
            </ul>
        </div>
      </div>`;
        HTMLstore += element
    }
    HTMLstore += `<footer>
    </footer>
  </body>
  <script src="/index.js"></script>
  
  </html>`


    return HTMLstore

    // document.getElementById("card-title").innerHTML = response.name

    //     const engineerCard =

    //     const managerCard =

    //     const internCard =

}

function alt(employee){
    if (employee.getRole()==="Intern") {
        return employee.internschool()
    }

    else if(employee.getRole()==="Engineer") {
        return employee.engineergithub()
    }

    else if (employee.getRole()==="Manager") {
        return employee.managerofficeNumber()
    }
}

start()