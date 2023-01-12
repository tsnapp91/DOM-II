import "./less/index.less";

// Your code goes here!

console.log("hello world");

// 1- load

window.onload = function (event) {
  const heading = document.querySelector("h1");
  heading.textContent = "Ready To Go";

  // 2-copy

  window.addEventListener("copy", () => {
    navigator.clipboard.readText().then((text) => {
      heading.textContent += text;
    });
  });
};

// 3 click

document.body.addEventListener("click", (event) => {
  event.target.classList.toggle("mirrior");
});

// 4 double click

document.body.addEventListener("dblclick", (event) => {
  event.target.innerHTML = "yo";
});

// 5 keydown

document.addEventListener("keydown", (event) => {
  if (event.key == 6) {
    document.body.innerHTML = "<h1> say what!!! </h1>";
  }
});

// 6 mouse move
document.body.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  // console.log(`mouse is at ${clientX}, ${clientY}`);
});

// 7 mouse enter 8 mouse leave

const destinations = document.querySelectorAll(".destination");
for (let destination of destinations) {
  destination.addEventListener("mouseenter", () => {
    destination.style.fontWeight = "bold";
  });

  destination.addEventListener("mouseleave", () => {
    setTimeout(() => {
      destination.style.fontWeight = "initial";
    }, 500);
  });
}

// scroll

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  console.log(scrolled);
});

document.body.addEventListener("click", (event) => {
  event.preventDefault("mirrior");
  console.log("hello hello");
});
