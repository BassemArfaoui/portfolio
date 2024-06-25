// showing the projects descriptions
const descriptions = [
  "Tech e-commerce website built with MySQL-Js-PHP",
  "animal adoption website built with MongoDB-Express-React-Node",
  "Blogging Website built with React-symfony",
  "Reviews website built with PostgreSQL-Express-React-Node",
  "Tech e-commerce website built with MySQL-Js-PHP",
  "animal adoption website built with MongoDB-Express-React-Node",
  "Blogging Website built with React-symfony",
  "Reviews website built with PostgreSQL-Express-React-Node",
];


const sources=['./test.html','./test.html','./test.html','./test.html','./test.html','./test.html','./test.html','./test.html'];

const project_images=document.querySelectorAll('.slider');
for(let i=0 ; i<sources.length ;i++)
{
  project_images[i].addEventListener('click', ()=> 
  {
    window.open(sources[i]);
  })
};

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
document.getElementById("navLink1").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("scroll1").scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("navLink2").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("scroll2").scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("navLink3").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("scroll3").scrollIntoView({
    behavior: "smooth",
  });
});

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

const title=document.querySelector('.hero');
//media query
if (window.matchMedia("(max-width: 1000px)").matches) 
{
    hidden.style.setProperty("display", "none", "important");
    title.style.setProperty("margin-top", "100px", "important");}



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
    setTimeout(changeDisplay,300);
  }
});

window.addEventListener("scroll", () => {
  if(window.scrollY > 150)  contact.style.opacity='0.7';
  if (hidden.style.display != "none" && window.scrollY > 150) {
    hidden.classList.add("fade-out");
    setTimeout(changeDisplay,300)  }
  if (window.scrollY  ===0) {
    hidden.style.setProperty("display", "flex", "important");
    if (window.matchMedia("(max-width: 1000px)").matches) 
    {
      hidden.style.setProperty("display", "none", "important");
    }
    contact.style.opacity='1';
  }
});


contact.addEventListener("mouseover",()=>{
    contact.style.opacity='1';
})


contact.addEventListener("mouseout",()=>{
    contact.style.opacity='0.7';
})



//small devices


const github = document.querySelector(".gitLogo");
window.addEventListener("scroll", () => {
  if(window.scrollY > 150) github.style.opacity='0.7';
  if(window.scrollY === 0) github.style.opacity='1';

});


//footerLinks
const education_link=document.querySelector('.footLink1');
const skills_link=document.querySelector('.footLink2');
const projects_link=document.querySelector('.footLink3');


education_link.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("scroll1").scrollIntoView({
    behavior: "smooth",
  });
});











