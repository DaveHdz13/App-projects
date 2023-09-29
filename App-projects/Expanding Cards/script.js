const cards = document.querySelectorAll(".card")

cards.forEach(card => {
  card.addEventListener("click", () => {
    removeClass()
    card.classList.add("active")
  })
});

const removeClass = () => {
  cards.forEach(card => {
    card.classList.remove("active")
  })
}