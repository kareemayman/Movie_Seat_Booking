const seats = document.querySelector(".seats")
const selectedSeatsCount = document.querySelector(".selection .num-of-seats")

let seatsArr = [] // 0 => empty, 1 => selected, 2 => occupied

for (i = 0; i < 48; i++) {
    
    if (document.querySelector(`.seat[data-sn="${i}"]`).classList.contains('occupied')) {

        seatsArr[i] = 2
    } else {

        seatsArr[i] = 0
    }
}

seats.addEventListener("click", (e) => {
  if (e.target.matches(".seat:not(.occupied)")) {

    e.target.classList.toggle("selected")

    if (e.target.classList.contains('selected')) {

        seatsArr[e.target.dataset.sn] = 1
        selectedSeatsCount.textContent++
    } else {

        seatsArr[e.target.dataset.sn] = 0
        selectedSeatsCount.textContent--
    }
  }
})
