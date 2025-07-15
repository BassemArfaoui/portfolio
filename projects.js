// const sources = [
//   "./projects/snippetup.html",
//   "./projects/griddy.html",
//   "./projects/wifinder.html",
//   "./projects/techme.html",

// ];

const sources = [
  "./projects/weazy.html",
  "./projects/snippetup.html",
  "./projects/griddy.html",
  "./check.html",
  "./check.html",
];


const project_images = document.querySelectorAll(".slider");
for (let i = 0; i < sources.length; i++) {
  project_images[i].addEventListener("click", () => {
    window.open(sources[i]);
  });
}
