//Install inquirer package
const inquirer = require("inquirer");
//Install class constructors
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//Include HTML Generator
const generateHTML = require("./generateHTML");
let address = "";
let i = 0;
let employees = [];
let IsThereAManager = false;

function init() {

    inquirer
        //prompt user for employee name, id number, email address, and title
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
                validate: validateEmployeeName
            },
            {
                type: "input",
                name: "id",
                message: "What is the employee's id number?",
                validate: validateOfficeNumber
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email?",
                validate: validateEmailAddress
            },
            {
                type: "list",
                name: "title",
                message: "What is the employee's title?",
                choices: ["manager", "engineer", "intern"]
            }      
        ])
        .then(res => {
                //From the response, if title is manager then ask for office number
                if (res.title == "manager") {
                    //Check to see if a manager has already been assigned
                    if (IsThereAManager === false) {
                        //If there is not a manager, set to there is a manager
                        IsThereAManager = true;
                        //Ask for Manager office number
                        inquirer
                            .prompt([
                            {
                                type: "input",
                                name: "officeNumber",
                                message: "Please provide the Manager's office number?",
                                validate: validateOfficeNumber
                            }
                            ])
                            //Use the second response to assign the managers office number to address
                            .then(res_two => {
                                const newManager = new Manager(res.name, res.id, res.email, res_two.officeNumber);
                                employees.push(newManager);
                                anotherEmployee();
                            })
                    } else {
                        console.log("A manager has already been assigned.  Please try again.");
                        init();
                    } // end of IsThereAManager if/else statement
                   
                } //End if for manager office number
                else if (res.title == "engineer") {
                    inquirer
                    //Ask for Engineer's GitHub Profile ID 
                        .prompt([
                            {
                                type: "input",
                                name: "gitHubProfile",
                                message: "Please provide the engineer's GitHub profile username?",
                                validate: validateGithubUsername
                            }
                        ])
                        .then(res_three => {
                            const newEngineer = new Engineer(res.name, res.id, res.email, res_three.gitHubProfile);
                            employees.push(newEngineer);
                            anotherEmployee();
                        })
                        
                } else if (res.title == "intern") {
                    inquirer
                        //Ask for intern's school name
                        .prompt([
                            {
                                type: "input",
                                name: "school",
                                message: "What is the employee's school name?",
                                validate: validateEmployeeName
                            }
                        ])
                        .then(res_four => {
                            const newIntern = new Intern(res.name, res.id, res.email, res_four.school);
                            employees.push(newIntern);
                            anotherEmployee();
                        })
                        
                } // end of ifs
       
        }) // end of .then
        //

        // Validation Functions  
        function validateEmployeeName(input) {
            //Check name to ensure it only contains letter and spaces
            if (!input.match(/^[A-Z][A-Z ]{0,}/i)) {
                return "Sorry, the employee's name must contain at least 1 character and must only contain letters and spaces!"; 
            } else {
                return true;
            }
        }
        function validateOfficeNumber(input) {
            //Ensure that office number only contains numbers
            if (!input.match(/^[0-9]+$/)) {
            return "Sorry, the office number must only contain numbers.";
            } else {
            return true;
            }
        }
        function validateEmailAddress(input) {
            //Ensure that the email address is in the proper format
            if (!input.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
            return "Sorry, the address you entered is not in the correct form";
            } else {
            return true;
            }
        }
        function validateGithubUsername(input) {
            if (!input.match(/^[A-Z0-9_]+$/i)) {
            return "Sorry, the Github username can only contain numbers and/or letters and/or _)";
            } else {
            return true;
        }
        }
        // end of Input validation functions 


        function anotherEmployee() {

            inquirer
            .prompt([
                {
                    type: "list",
                    name: "nextStep",
                    message: "Would you like to continue?",
                    choices: ["Add another employee", "Print to HTML", "Exit"] 
                }
            ])
            .then(res_five => {                
                if (res_five.nextStep == "Add another employee") {
                    init();  
                }                
                else if (res_five.nextStep == "Save to HTML file") {
        //===================================================================================================
                   //Need to code this 
                   //See Employee summary
                    //check weather program for adding cards dynamically 
                    //Loop through each employee object in the array.
                    //make html card for each employ on the team.
                   /* employees.forEach( => {



                    $("#teamLineUp").html("testing");
                    <div class='col card' id="employeeCard">
                    <div class="row" id="nameTitleRow">
                        <div class="row" id="nameRow">
                            <h2 id="name">Tripp</h2>
                        </div>
                        <br>
                        <div class="row" id="titleRow">
                            <h3 id="title">Engineer</h3>
                        </div>
                    </div>
                    <div class="row" id="idRow">
                        <div id="idBox">
                            <div class="row" id="idDetail">ID:
                            </div>
                            <div class="row" id="idDetail">Email:
                            </div>
                            <div class="row" id="location">Office Number:
                            </div>
                        </div>
                    </div>
                </div>*/

//=======================================================================================================
                } 
                else if (res_five.nextStep == "Exit") {
                    process.exit();
                }
            }) // end inquire prompt/then
        } // end anotherEmployee function
} // end function init

init();