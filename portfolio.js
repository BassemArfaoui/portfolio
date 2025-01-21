// showing the projects descriptions
//<!-- more : add new source and new description twice -->
const descriptions = [
  "Tech e-commerce website built with MySQL-Javascript-native PHP",
  "Snippets Sharing Social Media Web and Desktop App built with Express.js React  Electron.js and Postgres ",
  "Web App presenting some solution for the grid optimization problems built using FastApi Gurobi React",
  "A tool leveraging data science tools to anlayse and manipulate wifi and locate phones built with FastApi React and other tools (scapy/ matplotlip etc)",
  "Tech e-commerce website built with MySQL-Js-PHP",
  "Snippets Sharing Social Media Web and Desktop App built with Express.js React  Electron.js and Postgres ",
  "Web App presenting some solution for the grid optimization problems built using FastApi Gurobi React",
  "Tech e-commerce website built with MySQL-Js-PHP",
];

// const sources = [
//   "./projects/techme.html",
//   "./projects/snippetup.html",
//   "./projects/griddy.html",
//   "./projects/wifinder.html",
//   "./projects/techme.html",
//   "./projects/snippetup.html",
//   "./projects/griddy.html",
//   "./projects/wifinder.html",
// ];


const sources = [
  "./check.html",
  "./check.html",
  "./projects/griddy.html",
  "./check.html",
  "./check.html",
  "./check.html",
  "./projects/griddy.html",
  "./check.html",
];




const project_images = document.querySelectorAll(".slider");
for (let i = 0; i < sources.length; i++) {
  project_images[i].addEventListener("click", () => {
    window.open(sources[i]);
  });
}

const sliders = document.querySelectorAll(".slider");
const textElement = document.querySelector(".text");

for (let i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("mouseover", () => {
    textElement.textContent = descriptions[i];
  });
}

for (let i = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("mouseout", () => {
    textElement.textContent = "";
  });
}

//scrolling
document.getElementById("buttonScroll").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("scroll3").scrollIntoView({
    behavior: "smooth",
  });
});

// hide the contact div
const hidden = document.querySelector(".hide");
const contact = document.querySelector(".contact");
const elements = document.getElementsByTagName("i");

const title = document.querySelector(".hero");
//media query
if (window.matchMedia("(max-width: 1000px)").matches) {
  hidden.style.setProperty("display", "none", "important");
  title.style.setProperty("margin-top", "100px", "important");
}

function changeDisplay() {
  hidden.style.setProperty("display", "none", "important");
  hidden.classList.remove("fade-out");
}

contact.addEventListener("click", function (event) {
  event.preventDefault();

  if (hidden.style.display == "none") {
    hidden.style.setProperty("display", "flex", "important");
  } else {
    hidden.classList.add("fade-out");
    setTimeout(changeDisplay, 300);
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) contact.style.opacity = "0.7";
  if (hidden.style.display != "none" && window.scrollY > 150) {
    hidden.classList.add("fade-out");
    setTimeout(changeDisplay, 300);
  }
  if (window.scrollY === 0) {
    hidden.style.setProperty("display", "flex", "important");
    if (window.matchMedia("(max-width: 1000px)").matches) {
      hidden.style.setProperty("display", "none", "important");
    }
    contact.style.opacity = "1";
  }
});

contact.addEventListener("mouseover", () => {
  contact.style.opacity = "1";
});

contact.addEventListener("mouseout", () => {
  contact.style.opacity = "0.7";
});

//small devices

const github = document.querySelector(".gitLogo");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) github.style.opacity = "0.7";
  if (window.scrollY === 0) github.style.opacity = "1";
});

//the projects carousel
//<!-- more : add new src and new desc  -->
let proj_scr = ["./check.html", "./check.html", "./projects/griddy.html", "./check.html"];


let proj_desc = [
  "Tech e-commerce website built with MySQL-Javascript-native PHP",
  "Snippets Sharing Social Media Web and Desktop App built with Express.js React  Electron.js and Postgres ",
  "Web App presenting some solution for the grid optimization problems built using FastApi Gurobi React",
  "A tool leveraging data science tools to anlayse and manipulate wifi and locate phones built with FastApi React and other tools (scapy/ matplotlip etc)",
];


const projs = document.querySelectorAll(".proj");

for (let i = 0; i < proj_scr.length; i++) {
  projs[i].addEventListener("click", () => {
    window.open(proj_scr[i]);
  });
}

const prev = document.querySelector(".prevv");
const next = document.querySelector(".nextt");
const textt = document.querySelector(".disapear p");
textt.textContent = proj_desc[0];
let i=0;
let len=proj_desc.length;
prev.addEventListener("click", () => {
  if(i==0) i=i+len-1;
  else i--;
  textt.textContent = proj_desc[i%len];
});


next.addEventListener("click", () => {
  if(i==len-1) i=i-len+1;
  else i++;
  textt.textContent = proj_desc[i%len];
});
