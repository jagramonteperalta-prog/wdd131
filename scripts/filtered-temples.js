const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const templeContainer = document.querySelector("#temples");
const templeName = document.createElement("h2");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

document.querySelector("#currentyear").textContent = new
Date().getFullYear();
document.querySelector("#lastmodified").textContent = `Last Modification: ${document.lastModified}`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Apia Samoa",
    location: "Apia, Samoa",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-8660.jpg"
  },
  {
    templeName: "Las Vegas Nevada",
    location: "Las Vegas, Nevada, United States",
    dedicated: "1989, December, 16",
    area: 80350,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-69881.jpg"
  },
  {
    templeName: "Santo Domingo Dominican Republic",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, September, 17",
    area: 67000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-13028.jpg"
  },
  {
    templeName: "Draper Utah",
    location: "Draper, Utah, United States",
    dedicated: "2009, March, 20",
    area: 58300,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/draper-utah-temple/draper-utah-temple-55286.jpg"
  },
  {
    templeName: "Fortaleaxa Brazil",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 3600,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5871-thumb.jpg"
  }
];

temples.forEach((temple) => {
  const card = document.createElement("div");
  card.classList.add("temple-card");
  const templeName = document.createElement("h2");
  templeName.textContent = temple.templeName;
  card.appendChild(templeName);
  const templeLocation = document.createElement("p");
  templeLocation.textContent = `Location: ${temple.location}`;
  card.appendChild(templeLocation);
  const templeDedicated = document.createElement("p");
  templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
  card.appendChild(templeDedicated);
  const templeArea = document.createElement("p");
  templeArea.textContent = `Area: ${temple.area} sq ft`;
  card.appendChild(templeArea);
  const templeImage = document.createElement("img");
  templeImage.setAttribute("src", temple.imageUrl);
  templeImage.setAttribute("alt", `${temple.templeName} image`);
  templeImage.setAttribute("loading", "lazy");
  card.appendChild(templeImage);
  templeContainer.appendChild(card);
});