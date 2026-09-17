const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

document.querySelector("#currentyear").textContent = new
Date().getFullYear();
document.querySelector("#lastmodified").textContent = `Last Modification: ${document.lastModified}`;