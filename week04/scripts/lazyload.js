const today = new Date();
const year = today.getFullYear();

document.getElementById("currentyear").textContent = year;
document.getElementById("lastmodified").textContent = `Last modified: ${document.lastModified}`;