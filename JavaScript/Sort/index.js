var courses = [
  {
    name: "Reactjs",
    price: "1000",
  },
  {
    name: "Vuejs",
    price: "2000",
  },
  {
    name: "Angularjs",
    price: "500",
  },
  {
    name: "javascript",
    price: "10",
  },
];

function sortList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";

  courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    li.appendChild(span);

    const price = document.createTextNode(course.price);
    span.appendChild(price);

    ul.appendChild(li);
  });
}
sortList();
const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  sortList();
});
const buttons = document.querySelector(".sort-btn-high-to-low");
buttons.addEventListener("click", () => {
  courses.sort((a, b) => b.price - a.price);
  sortList();
});
