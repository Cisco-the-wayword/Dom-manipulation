const createDiv = (className) => {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
};

const createHeading = (className, text) => {
  const heading = document.createElement("h1");
  heading.classList.add(className);
  heading.textContent = text;
  return heading;
};

const createParagraph = (className, text) => {
  const paragraph = document.createElement("p");
  paragraph.classList.add(className);
  paragraph.textContent = text;
  return paragraph;
};

const createList = (className, items) => {
  const list = document.createElement("ul");
  list.classList.add(className);

  items.forEach((itemText) => {
    const listItem = document.createElement("li");
    listItem.textContent = itemText;
    list.appendChild(listItem);
  });

  return list;
};

const createButton = (className, text) => {
  const button = document.createElement("button");
  button.classList.add(className);
  button.textContent = text;
  return button;
};

document.addEventListener("DOMContentLoaded", function() {
  const parentDiv = createDiv("card");
  const childDiv1 = createDiv("card-top");
  const miniParent = createDiv("card-bottom");
  const childDiv2 = createDiv("card-bottomLeft");
  const childDiv3 = createDiv("card-bottomRight");

  const join = createHeading("header", "Join our community");
  const guarantee = createParagraph("guarantee", "30-day, hassle-free money back guarantee");
  const someText = createParagraph("someText", "Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.");
  const sub = createHeading("sub", "Monthly subscription");
  const price = createHeading("price", "$29");
  const perMonth = createParagraph("", "per month");
  const button = createButton("button", "Sign Up");
  const whyUs = createHeading("header", "Why Us");
  const whyUslist = createList("", [
    "Tutorials by Cisco industry experts",
    "Peer & expert code review",
    "Coding exercises",
    "Access to our GitHub repos",
    "Community forum",
    "Flashcard decks",
    "New videos every week"
  ]);

  parentDiv.appendChild(childDiv1);
  childDiv1.appendChild(join);
  childDiv1.appendChild(guarantee);
  childDiv1.appendChild(someText);
  miniParent.appendChild(childDiv2);
  miniParent.appendChild(childDiv3);
  parentDiv.appendChild(miniParent);
  document.body.appendChild(parentDiv);
  childDiv2.appendChild(sub);
  childDiv2.appendChild(price);
  childDiv2.appendChild(perMonth);
  childDiv2.appendChild(button);
  childDiv3.appendChild(whyUs);
  childDiv3.appendChild(whyUslist);
});
