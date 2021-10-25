const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('../lib/Employee.js');
let questions;

// async function createEmployee() {
//     let employeeResponses = await inquirer.prompt(questions.employee);


//     let Employee = new Employee
//         (employeeResponses.employeename,
//             employeeResponses.employeeid,
//             employeeResponses.employeeemail);
//     console.log("Employee has been created!");
//     return;
//     }

test('employee_name', () => {
    const name = 'JT COol'
    let employee = new Employee(name);
    expect(employee.name).toBe(name)
})

test('employee_id', () => {
    const id = 2;
    let employee = new Employee('Jen Hen', id);
    expect(employee.id).toBe(id)
})

test('employee_email', () => {
    const email = 'yes@mail.com'
    let employee = new Employee('John Smith', 1, email);
    expect(employee.email).toBe(email)
})

questions = [
    {
        type: 'input',
        message: "Enter the employee's full legal name",
        name: "name",
validate: function (answer) {
    return true;
},

type: 'input',
message: "Enter the employee a new ID",
name: "id",
email: "What  is the employee's email?",

validate: function (answer) {
    if (answer.id = array[i].id) {
        return console.log("ID already exists");
    }
    return true;
},

type: 'input',
message: "Enter the employee's email address",
name: "email",
validate: function (answer) {
    return true;
},
}]