const fs = require('fs');
const inquirer = require('inquirer');
const Intern = require('../lib/intern.js');
let questions;

test('intern_name', () => {
    const name = 'Anna Coleen'
    let intern = new Intern(name);
    expect(intern.name).toBe(name)
})

test('intern_id', () => {
    const id = 4;
    let intern = new Intern('Jan Feb', id);
    expect(intern.id).toBe(id)
})

test('intern_email', () => {
    const email = 'yeah@mail.com'
    let intern = new Intern('Jarad Higgins', 5, email);
    expect(intern.email).toBe(email)
})

test('intern_role', () => {
    const role = 'Intern'
    let intern = new Intern('Jarad Higgins', 5, 'yeah@mail.com', role);
    expect(intern.role).toBe(role)
})

questions = [
    {
type: 'input',
message: "Enter the intern's full legal name",
name: "name",
validate: function (answer) {
    return true;
},

type: 'input',
message: "Enter the intern a new ID",
name: "id",

validate: function (answer) {
    if (answer.id = array[i].id) {
        return console.log("ID already exists");
    }
    return true;
},

type: 'input',
message: "Enter the intern's email address",
name: "email",
validate: function (answer) {
    return true;
},
}]