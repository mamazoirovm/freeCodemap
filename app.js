const dark = document.querySelector(".dark");
const Body = document.querySelector("body");
let isDarkMode = false;

dark.addEventListener("click", () => {
    if (isDarkMode) {
        Body.style.background = "white";
        dark.style.marginLeft = "70px"
        dark.textContent = "OFF"
        isDarkMode = false;
    } else {
        Body.style.background = "#1B1B32"; 
        dark.style.marginLeft = "0px"
        dark.textContent = "ON"
        isDarkMode = true;
    }
});
