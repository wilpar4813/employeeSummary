//Install inquirer package
const inquirer = require("inquirer");
var fs = require('fs');
//Install class constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let employees = [];
let IsThereAManager = false;
var x = "";

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
                choices: ["Manager", "Engineer", "Intern"]
            }      
        ])
        .then(res => {
                //From the response, if title is manager then ask for office number
                if (res.title == "Manager") {
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
                else if (res.title == "Engineer") {
                    inquirer
                    //Ask for Engineer's GitHub Profile ID 
                        .prompt([
                            {
                                type: "input",
                                name: "gitHubProfile",
                                message: "Please provide the Engineer's GitHub profile username?",
                                validate: validateGitHubUsername
                            }
                        ])
                        .then(res_three => {
                            const newEngineer = new Engineer(res.name, res.id, res.email, res_three.gitHubProfile);
                            console.log(newEngineer);
                            employees.push(newEngineer);
                            anotherEmployee();
                        })
                        
                } else if (res.title == "Intern") {
                    inquirer
                        //Ask for intern's school name
                        .prompt([
                            {
                                type: "input",
                                name: "school",
                                message: "What is the Employee's school name?",
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
        function validateGitHubUsername(input) {
            if (!input.match(/^[A-Z0-9_]+$/i)) {
            return "Sorry, the Github username can only contain numbers and/or letters and/or _)";
            } else {
            return true;
        }
        }
        // end of Input validation functions 


        function anotherEmployee() {
            console.log(employees);
            inquirer
            .prompt([
                {
                    type: "list",
                    name: "nextStep",
                    message: "Would you like to continue?",
                    choices: ["Add another employee", "Save to HTML file", "Exit"] 
                }
            ])
            .then(res_five => {                
                if (res_five.nextStep == "Add another employee") {
                    init();  
                }                
                else if (res_five.nextStep == "Save to HTML file") {
                    
                    
                    fs.readFile("./templates/main.html", 'utf8', function (err,data) {
                     if (err) {
                        return console.log(err);
                        }
                        x = x + data;
                        //console.log(x);
                    
                    var cardString = [];
                    
                    for(let i = 0 ; i<employees.length ; i++){
                        
                        if(employees[i].getRole() === "Manager"){
                            cardString = '<div class="col card" id="employeeCard"><div class="row" id="nameTitleRow"><div class="row" id="nameRow"><h2 id="name">' + employees[i].getName() + '</h2></div><br><div class="row" id="titleRow"><h3 id="title">' + employees[i].getRole() + '</h3></div></div><div class="row" id="idRow"><div id="idBox"><div class="row" id="idDetail">ID:  ' + employees[i].getId() + '</div><div class="row" id="idDetail">Email:  ' + employees[i].getEmail() + '</div><div class="row" id="location">Office Number:  ' + employees[i].getOfficeNumber() + '</div></div></div></div>';
                        }else if(employees[i].getRole() === "Engineer"){
                            cardString = '<div class="col card" id="employeeCard"><div class="row" id="nameTitleRow"><div class="row" id="nameRow"><h2 id="name">' + employees[i].getName() + '</h2></div><br><div class="row" id="titleRow"><h3 id="title">' + employees[i].getRole() + '</h3></div></div><div class="row" id="idRow"><div id="idBox"><div class="row" id="idDetail">ID:  ' + employees[i].getId() + '</div><div class="row" id="idDetail">Email:  ' + employees[i].getEmail() + '</div><div class="row" id="location">GitHub Username:  ' + employees[i].getGitHub() + '</div></div></div></div>';
                        }else if(employees[i].getRole() === "Intern"){
                            cardString = '<div class="col card" id="employeeCard"><div class="row" id="nameTitleRow"><div class="row" id="nameRow"><h2 id="name">' + employees[i].getName() + '</h2></div><br><div class="row" id="titleRow"><h3 id="title">' + employees[i].getRole() + '</h3></div></div><div class="row" id="idRow"><div id="idBox"><div class="row" id="idDetail">ID:  ' + employees[i].getId() + '</div><div class="row" id="idDetail">Email:  ' + employees[i].getEmail() + '</div><div class="row" id="location">School:  ' + employees[i].getSchool() + '</div></div></div></div>'; 
                        };
                        
                        x = x.concat(cardString);
                        //console.log(x);
                    }
                    x = x.concat("</div></div></body></html>");
                    //console.log(x);
                    fs.writeFile('./output/myEmployeeSummary.html', x, function (err) {
                        if (err) throw err;
                       // console.log('Saved!');
                    });//End of fs.writeFile 
                    //}//end for loop
                });//end fs.readfile
                }
        //===================================================================================================
                   //Need to code this 
                   //See Employee summary
                    //check weather program for adding cards dynamically 
                    //Loop through each employee object in the array.
                    //make html card for each employ on the team.
                   /* employees.forEach( => 



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
                
                else if (res_five.nextStep == "Exit") {
                    process.exit();
                }
            }) // end inquire prompt/then
        } // end anotherEmployee function
} // end function init

init();