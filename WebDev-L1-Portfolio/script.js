// Show a welcome message when the page loads
window.addEventListener("load", function () {
    console.log("Welcome to my portfolio!");
});

// Contact button message
const contactButton = document.querySelector(".btn");

contactButton.addEventListener("click", function () {
    console.log("Thank you for visiting my portfolio!");
});

// Highlight navigation link when clicked
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.style.color = "white";
        });

        this.style.color = "#38bdf8";
    });
});
