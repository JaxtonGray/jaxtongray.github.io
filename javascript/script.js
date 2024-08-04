function buttonHover(event) {
    event.target.style.backgroundColor = "red";
}

function buttonOut(event) {
    event.target.style.backgroundColor = ""; // Revert to original color
}

const navButtons = document.querySelectorAll("nav ul li");

navButtons.forEach(button => {
    button.addEventListener("mouseover", buttonHover);
    button.addEventListener("mouseout", buttonOut);
});