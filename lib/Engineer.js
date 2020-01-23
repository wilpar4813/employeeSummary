//Constructor for Employee object.
//Extend from Employee
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, title, github) {
        //Get Employee Object name, ID, and email from extended class Employee
        super(name, id, email, title);
        this.github = github;
    };
    //return GitHub Address
    getGithub() {
        return this.github;
    };
    //Return Engineer as role
    getRole() {
        return "Engineer";
    };
};
//Export to other files
module.exports = Engineer;