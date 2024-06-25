const sources = [
  "./test.html",
  "./test.html",
  "./test.html",
  "./test.html",
  "./test.html",
  "./test.html",
  "./test.html",
  "./test.html",
  "./test.html",
];

const project_images = document.querySelectorAll(".slider");
for (let i = 0; i < sources.length; i++) {
  project_images[i].addEventListener("click", () => {
    window.open(sources[i]);
  });
}
