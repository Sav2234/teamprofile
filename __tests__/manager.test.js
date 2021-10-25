const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../lib/manager.js');
let questions;

// async function createManager() {
//     let managerResponses = await inquirer.prompt(questions.manager);


//     let manager = new Manager
//         (managerResponses.managername,
//             managerResponses.managerid,
//             managerResponses.manageremail);
//     console.log("manager has been created!");
//     return;
//     }

test('manager_name', () => {
    const name = 'Anna Bella'
    let manager = new Manager(name);
    expect(manager.name).toBe(name)
})

test('manager_id', () => {
    const id = 2;
    let manager = new Manager('Ally Lotti', id);
    expect(manager.id).toBe(id)
})

test('manager_email', () => {
    const email = 'yea@mail.com'
    let manager = new Manager('Lina Jay', 6, email);
    expect(manager.email).toBe(email)
})

test('manager_role', () => {
    const role = 'Manager'
    let manager = new Manager('Lina Jay', 6, 'yea@mail.com');
    expect(manager.getManagerRole()).toBe(role)
})

test('manager_officeNumber', () => {
    const officeNumber = 310
    let manager = new Manager('Lina Jay', 6, 'yea@mail.com', officeNumber);
    expect(manager.officeNumber).toBe(officeNumber)
})

questions = [
    {
type: 'input',
message: "Enter the manager's full legal name",
name: "name",
validate: function (answer) {
    return true;
},

type: 'input',
message: "Enter the manager a new ID",
name: "id",

validate: function (answer) {
    if (answer.id = array[i].id) {
        return console.log("ID already exists");
    }
    return true;
},

type: 'input',
message: "Enter the manager's email address",
name: "email",
validate: function (answer) {
    return true;
},
}]