const list = document.querySelectorAll("li");
const indicator = document.querySelector(".indicator");

function activeLink() {
  list.forEach((li) => li.classList.remove("active")); // Remove "active" de todos
  this.classList.add("active"); // Adiciona "active" ao item clicado

  // Move o indicador para o item ativo
  const index = Array.from(list).indexOf(this);
  indicator.style.transform = `translateX(${index * 70}px) `;
  indicator.style.transition = "0.5s";
}

list.forEach((li) => li.addEventListener("click", activeLink));