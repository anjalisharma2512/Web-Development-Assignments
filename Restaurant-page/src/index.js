import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";
import "./style.css";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");

function clearContent() {
    content.innerHTML = "";
}

loadHomePage();

//Home Button
homeButton.addEventListener("click", () => {
    clearContent();
    loadHomePage();
});

//Menu Button
menuButton.addEventListener("click", () =>{
    clearContent();
    loadMenuPage();
});

//Contact Button
contactButton.addEventListener("click", () => {
    clearContent();
    loadContactPage();
})



