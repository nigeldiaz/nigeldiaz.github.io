/*
  Created by: Nigel Diaz
  Created on: July 2, 2022
  Last Updated on: July 6, 2022
 */

//create objects
const project1 = {
    name: "This Profile Does Not Exist",
    description: "This is a webpage that generates profiles that do not exist every time it is refreshed.", 
    type: "JavaScript", 
    projectLink: "https://nigeldiaz.github.io/thisprofiledoesnotexist",
    sourceCodeLink: "https://github.com/nigeldiaz/thisprofiledoesnotexist", 
    image: "images/thisprofiledoesnotexist.jpg"
};
const project2 = {
    name: "Palindrome Checker", 
    description: "A JavaScript app that checks if a word or sentence inputted by the user is a palindrome or not.", 
    type: "JavaScript", 
    projectLink: "https://nigeldiaz.github.io/palindrome-checker", 
    sourceCodeLink: "https://github.com/nigeldiaz/palindrome-checker", 
    image: "images/palindrome-checker.jpg"
};
const project3 = {
    name: "MCU Trivia", 
    description: "As a fan of the MCU, I created a trivia game that tests the player how well they know the MCU.", 
    type: "JavaScript", 
    projectLink: "https://nigeldiaz.github.io/mcu-trivia", 
    sourceCodeLink: "https://github.com/nigeldiaz/mcu-trivia", 
    image: "../images/mcu-trivia.jpg"
};
const project4 = {
    name: "", 
    description: "", 
    type: "", 
    projectLink: "", 
    sourceCodeLink: "", 
    image: ""
};
//declare global variables
const portfolioProjects = [project1, project2, project3, project4];
const projects = document.getElementById("projects");
const currentYear = document.getElementById("currentYear");
const iconEmail = document.getElementById("iconEmail");
const iconLinkedIn = document.getElementById("iconLinkedIn");
const iconGitHub = document.getElementById("iconGitHub");
const iconEmailProfile = document.getElementById("iconEmailProfile");
const iconLinkedInProfile = document.getElementById("iconLinkedInProfile");
const iconGitHubProfile = document.getElementById("iconGitHubProfile");
//displays projects in portfolio
function displayProjects() {
    for (var project = 0; project < portfolioProjects.length-1; project++) {
        let div = document.createElement("div");
        div.setAttribute("id", "div-"+project);
        projects.appendChild(div);
        div = document.getElementById("div-"+project);

        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        let img = document.createElement("img");        
        let btnViewSourceCode = document.createElement("button");
        let table = document.createElement("table")
        let tr = document.createElement("tr")
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        img.setAttribute("src", portfolioProjects[project].image)

        const name = document.createTextNode(portfolioProjects[project].name);
        const description = document.createTextNode(portfolioProjects[project].description);

        h3.appendChild(name);
        p.appendChild(description);

        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);        

        if (portfolioProjects[project].projectLink !== ""){
            let btnViewProject = document.createElement("button");
            btnViewProject.setAttribute("onclick", "window.location.href='"+portfolioProjects[project].projectLink+"';");
            btnViewProject.setAttribute("title", "View Project");
            let btnViewProjectName = document.createTextNode("View Project");
            btnViewProject.appendChild(btnViewProjectName);
            td1.appendChild(btnViewProject);
            tr.appendChild(td1);
            //div.appendChild(btnViewProject);
        }

        btnViewSourceCode.setAttribute("onclick", "window.location.href='"+portfolioProjects[project].sourceCodeLink+"';");
        btnViewSourceCode.setAttribute("title", "View Source Code");
        let btnViewSourceCodeName = document.createTextNode("View Source Code");
        btnViewSourceCode.appendChild(btnViewSourceCodeName);
        td2.appendChild(btnViewSourceCode);
        tr.appendChild(td2);
        table.appendChild(tr);
        div.appendChild(table);
        //div.appendChild(btnViewSourceCode);
    }

}
//displays current year
function displayCurrentYear() {
    const date = new Date();
    currentYear.innerHTML = date.getFullYear();
}
//adds hover effect on icons 
function addIconHoverEffect() {
    iconEmail.onmouseover = hoverEmailIcon;
    iconEmail.onmouseout = unhoverEmailIcon;
    iconLinkedIn.onmouseover = hoverLinkedInIcon;
    iconLinkedIn.onmouseout = unhoverLinkedInIcon;
    iconGitHub.onmouseover = hoverGitHubIcon;
    iconGitHub.onmouseout = unhoverGitHubIcon;
    iconEmailProfile.onmouseover = hoverEmailProfileIcon;
    iconEmailProfile.onmouseout = unhoverEmailProfileIcon;
    iconLinkedInProfile.onmouseover = hoverLinkedInProfileIcon;
    iconLinkedInProfile.onmouseout = unhoverLinkedInProfileIcon;
    iconGitHubProfile.onmouseover = hoverGitHubProfileIcon;
    iconGitHubProfile.onmouseout = unhoverGitHubProfileIcon;
}
function hoverEmailIcon () {
    iconEmail.setAttribute("src", "images/email-icon-hovered.jpg");
}
function unhoverEmailIcon () {
    iconEmail.setAttribute("src", "images/email-icon.jpg");
}
function hoverLinkedInIcon () {
    iconLinkedIn.setAttribute("src", "images/linkedin-icon-hovered.jpg");
}
function unhoverLinkedInIcon () {
    iconLinkedIn.setAttribute("src", "images/linkedin-icon.jpg");
}
function hoverGitHubIcon () {
    iconGitHub.setAttribute("src", "images/github-icon-hovered.jpg");
}
function unhoverGitHubIcon () {
    iconGitHub.setAttribute("src", "images/github-icon.jpg");
}
function hoverEmailProfileIcon () {
    iconEmailProfile.setAttribute("src", "images/email-icon-profile-hovered.jpg");
}
function unhoverEmailProfileIcon () {
    iconEmailProfile.setAttribute("src", "images/email-icon-profile.jpg");
}
function hoverLinkedInProfileIcon () {
    iconLinkedInProfile.setAttribute("src", "images/linkedin-icon-profile-hovered.jpg");
}
function unhoverLinkedInProfileIcon () {
    iconLinkedInProfile.setAttribute("src", "images/linkedin-icon-profile.jpg");
}
function hoverGitHubProfileIcon () {
    iconGitHubProfile.setAttribute("src", "images/github-icon-profile-hovered.jpg");
}
function unhoverGitHubProfileIcon () {
    iconGitHubProfile.setAttribute("src", "images/github-icon-profile.jpg");
}
//sets up page
displayProjects();
displayCurrentYear();
addIconHoverEffect();