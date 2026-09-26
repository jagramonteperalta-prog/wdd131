const temperature = 31;
const wind = 2;
const windSpeedKmh = wind * 3.6;

const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

if (temperature <=10 && windSpeedKmh > 4.8) {
    const windChill = 13.12 + (0.6215 * temperature) - (11.37 * windSpeedKmh ** 0.16) + (0.3965 * temperature * windSpeedKmh ** 0.16)
    
    document.querySelector("#windChill").textContent = `${windChill.toFixed(1)} °C`;
}
else {
    document.querySelector("#windChill").textContent = "N/A";
}