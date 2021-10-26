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

function start(){
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
    htmlGen(allEmployees)
    // const renderHTML = render (allEmployees)
    fs.writeFile("./team.html", JSON.stringify(allEmployees), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("file written");
    })
}

function htmlGen(allEmployees){
    console.log(allEmployees)
    for (let i = 0; i < allEmployees.length; i++) {
        const element = allEmployees[i];
        console.log(element.name)
    }
    
    const engineerCard =

    const managerCard =

    const internCard =

}

start()