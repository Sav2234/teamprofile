const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');

const allEmployees = [];

const questions = [
    {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to create?",
        choices: ["Manager", "Intern", "Engineer"]
    }

]

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

    ]).then(response => {
        console.log(response)
        let engineer = new Engineer()
        console.log(engineer.name + " Engineer Created")
    })
    createTeam()
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
        let intern = new Intern()
        console.log(intern.name + " Intern Created")
    })
    createTeam()
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
        console.log(response)
        let manager = new Manager()
        console.log(manager.name + " Manager Created")
    })

}

function createTeam(){
    const renderHTML = render (allEmployees)
    fs.writeFile("./team.html", renderHTML, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("file written");
    })
}