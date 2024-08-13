const parentDiv = document.createElement("div");
parentDiv.classList.add("card");
const childDiv1 = document.createElement("div");
childDiv1.classList.add("card-top");
const miniParent = document.createElement("div")
miniParent.classList.add("card-bottom");
const childDiv2 = document.createElement("div");
childDiv2.classList.add("card-bottomLeft");
const childDiv3 = document.createElement("div");
childDiv3.classList.add("card-bottomRight");
const join = document.createElement("h1");
join.classList.add("header");
join.textContent = "Join our community";



document.addEventListener("DOMContentLoaded", function() {
  parentDiv.appendChild(childDiv1);
  childDiv1.appendChild(join);
  miniParent.appendChild(childDiv2);
  miniParent.appendChild(childDiv3);
  parentDiv.appendChild(miniParent);
  document.body.appendChild(parentDiv);
});
