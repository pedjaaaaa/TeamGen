const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const cheerio = require('cheerio');
const questions = require("./Questions");
const Employee = require("./classes/Employee");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");

const writefileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
let teamName;
let team = [];
let i = 0;

build();

//Manager Question//
function build() {
    inquirer.prompt(managerQuestions)
        .then(function (data) {
            let mangObj = new Manager(data.manager, data.managerID, data.managerEmail, data.managerOffice);
            team.push(mangObj);
            console.log(team);
            buildStaff(); //back to pick staff catagory
        }, function (error) {
            console.log(error);
        })
}

//Pick Staff Catagory to build for next
function buildStaff() {
    inquirer.prompt(pickTeam)
        .then(function (res) {
            switch (res.pick) {
                case "Engineer":
                    buildEngineer();
                    break;
                case "Intern":
                    buildIntern();
                    break;
                default:
                    buildHTML();
                    break;
            }
        }, function (error) {
            console.log(error);
        })
}

//build Engineer//
function buildEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(function (data) {
            let engObj = new Engineer(data.engineer, data.engineerID, data.engineerEmail, data.engineerGithub);
            team.push(engObj);
            console.log(engObj);
            buildStaff();  //back to pick staff catagory
        }, function (error) {
            console.log(error);
        })
}


function buildIntern() {
    inquirer.prompt(internQuestions)
        .then(function (data) {
            let intObj = new Intern(data.intern, data.internID, data.internEmail, data.internSchool);
            team.push(intObj);
            console.log(intObj);
            buildStaff(); //back to pick staff catagory
        }, function (error) {
            console.log(error);
        })
}


function buildHTML() {
    let html = fs.readFileSync("./temps/main.html", "utf8");
    let $html = cheerio.load(html);
    $html("#addMember").html("");
    $html("#title").html(teamName);
    writefileAsync("./temps/main.html", $html.html())
        .then(function () {
            console.log("Team was added to main.html");
            addMemberHTML();
        }, function (error) {
            console.log(error);
        });
}


function addMemberHTML() {
    if (i < team.length) {
        member = team[i++];
        if (member.getRole() === "Manager") addManager(member);
        else if (member.getRole() === "Engineer") addEngineer(member);
        else addIntern(member);
    } else {
        let html = fs.readFileSync("./temps/main.html", "utf8");
        writefileAsync(`./result/Team.html`, html)
            .then(function () {
                console.log("Team has been built.");
                readFileAsync("./temps/main.html", "utf8")
                    .then(async function (html) {
                        let $main = cheerio.load(html);
                        $main("#addMember").html(""); //empty 
                        writefileAsync("./temps/main.html", $main.html());
                    });
            }, function (error) {
                if (error) throw error;
            });
    }
}

function addManager(member) {
    let html = fs.readFileSync("./temps/Manager.html", "utf8");
    let $manager = cheerio.load(html);
    readFileAsync("./temps/main.html", "utf8")
        .then(function (data) {
            let $main = cheerio.load(data);
            $manager("#name").html(member.getName());
            $manager("#id").html(member.getId());
            $manager("#email").attr('href', `mailto:${member.getEmail()}`);
            $manager("#email").html(member.getEmail());
            $manager("#office").html(member.getOfficeNumber());
            $main("#addMember").append($manager.html());
            writefileAsync("./temps/main.html", $main.html())
                .then(function () {
                    console.log("Manager is added to main.html");
                    addMemberHTML();

                }, function (error) {
                    console.log(error);
                });
        });
}

function addEngineer(member) {
    let html = fs.readFileSync("./temps/Engineer.html", "utf8");
    let $engineer = cheerio.load(html);
    readFileAsync("./temps/main.html", "utf8")
        .then(function (data) {
            let $main = cheerio.load(data);
            $engineer("#name").html(member.getName());
            $engineer("#id").html(member.getId());
            $engineer("#email").attr('href', `mailto:${member.getEmail()}`);
            $engineer("#email").html(member.getEmail());
            $engineer("#github").attr('href', `https://github.com/${member.getGithub()}`);
            $engineer("#github").html(member.getGithub());
            $main("#addMember").append($engineer.html());
            writefileAsync("./temps/main.html", $main.html())
                .then(function () {
                    console.log("Engineer is added to main.html");
                    addMemberHTML();

                }, function (error) {
                    console.log(error);
                });
        });
}

function addIntern(member) {
    let html = fs.readFileSync("./temps/Intern.html", "utf8");
    let $intern = cheerio.load(html);
    readFileAsync("./temps/main.html", "utf8")
        .then(function (data) {
            let $main = cheerio.load(data);
            $intern("#name").html(member.getName());
            $intern("#id").html(member.getId());
            $intern("#email").attr('href', `mailto:${member.getEmail()}`);
            $intern("#email").html(member.getEmail());
            $intern("#school").html(member.getSchool());
            $main("#addMember").append($intern.html());
            writefileAsync("./temps/main.html", $main.html())
                .then(function () {
                    console.log("Intern is added to main.html");
                    addMemberHTML();
                }, function (error) {
                    console.log(error);
                });
        });
}