const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('../lib/engineer.js');
let questions;

// async function createEngineer() {
//     let engineerResponses = await inquirer.prompt(questions.engineer);


//     let engineer = new Engineer
//         (engineerResponses.engineername,
//             engineerResponses.engineerid,
//             engineerResponses.engineeremail);
//     console.log("engineer has been created!");
//     return;
//     }

test('engineer_name', () => {
    const name = 'Anna Coleen'
    let engineer = new Engineer(name);
    expect(engineer.name).toBe(name)
})

test('engineer_id', () => {
    const id = 2;
    let engineer = new Engineer('Jenna Jass', id);
    expect(engineer.id).toBe(id)
})

test('engineer_email', () => {
    const email = 'yas@mail.com'
    let engineer = new Engineer('Jo Bangles', 1, email);
    expect(engineer.email).toBe(email)
})

test('engineer_role', () => {
    const role = 'Engineer'
    let engineer = new Engineer('Jo Bangles', 1, 'yas@mail.com');
    expect(engineer.getRole()).toBe(role)
})

questions = [
    {
type: 'input',
message: "Enter the engineer's full legal name",
name: "name",
validate: function (answer) {
    return true;
},

type: 'input',
message: "Enter the engineer a new ID",
name: "id",

validate: function (answer) {
    if (answer.id = array[i].id) {
        return console.log("ID already exists");
    }
    return true;
},

type: 'input',
message: "Enter the engineer's email address",
name: "email",
validate: function (answer) {
    return true;
},
}]