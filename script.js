const seats = document.querySelector(".seats")
const selectedSeatsCount = document.querySelector(".selection .num-of-seats")
const selectedMovie = document.querySelector('.select-movie select')
const price = document.querySelector('.selection .price')

let moviePrice = parseInt(selectedMovie.value)

let seatsArr = [] // 0 => empty, 1 => selected, 2 => occupied

for (i = 0; i < 48; i++) {
    
    if (document.querySelector(`.seat[data-sn="${i}"]`).classList.contains('occupied')) {

        seatsArr[i] = 2
    } else {

        seatsArr[i] = 0
    }
}

// When Clicking On An Empty Seat
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

    calculatePrice()
  }
})

// When Changing The Movie
selectedMovie.addEventListener('change', e => {

    moviePrice = selectedMovie.value

    calculatePrice()
})

// Calculate Total Price For Selected Seats & Movie
function calculatePrice() {

    let newPrice = moviePrice * selectedSeatsCount.textContent

    price.textContent = newPrice
}