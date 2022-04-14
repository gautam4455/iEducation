// console.log('iEducation');

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");
const myForm = document.getElementById("myForm");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    } else {
        menu.classList.add("showMenu");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", toggleMenu);
});


// Submit Form
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    myForm.reset();
    alert("Form Submitted Successfully.");
});