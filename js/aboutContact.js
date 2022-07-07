/*
  Created by: Nigel Diaz
  Created on: July 2, 2022
  Last Updated on: July 6, 2022
 */

//declare global variables
const currentYear = document.getElementById("currentYear");
const iconEmail = document.getElementById("iconEmail");
const iconLinkedIn = document.getElementById("iconLinkedIn");
const iconGitHub = document.getElementById("iconGitHub");
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
//sets up page
displayCurrentYear();
addIconHoverEffect();