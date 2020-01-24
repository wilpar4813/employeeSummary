//Constructor for Employee object.
//Extend from Employee
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHubProfile) {
        //Get Employee Object name, ID, and email from extended class Employee
        super(name, id, email);
        //Assign GitHub username to "this" Employee object.
        this.gitHub = gitHubProfile;
    };
    //return GitHub Address
    getGitHub() {
        return this.gitHub;
    };
    //Return Engineer as role
    getRole() {
        return "Engineer";
    };
};
//Export to other files
module.exports = Engineer;