const seats = document.querySelector(".seats")
const selectedSeatsCount = document.querySelector(".selection .num-of-seats")
const selectedMovie = document.querySelector('.select-movie select')
const price = document.querySelector('.selection .price')

selectedMovie.value = localStorage.getItem('selectedMovie') || selectedMovie.value

let moviePrice = parseInt(localStorage.getItem('selectedMovie')) || parseInt(selectedMovie.value)

price.textContent = parseInt(localStorage.getItem('price')) || 0

selectedSeatsCount.textContent = parseInt(localStorage.getItem('seatsCount')) || 0

let seatsArr = JSON.parse(localStorage.getItem('seatsArr')) || [] // 0 => empty, 1 => selected, 2 => occupied

if (!JSON.parse(localStorage.getItem('seatsArr'))) {

    for (i = 0; i < 48; i++) {
        
        if (document.querySelector(`.seat[data-sn="${i}"]`).classList.contains('occupied')) {
        
            seatsArr[i] = 2
        } else {
        
            seatsArr[i] = 0
        }
    }
} else {

    for (i = 0; i < 48; i++) {

        if (seatsArr[i] === 0) {
            
            document.querySelector(`.seat[data-sn="${i}"`).className = "seat"
        } else if (seatsArr[i] === 1) {

            document.querySelector(`.seat[data-sn="${i}"`).className = "seat selected"
        } else {

            document.querySelector(`.seat[data-sn="${i}"`).className = "seat occupied"
        }
    }
}

// When Clicking On A Seat
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

    localStorage.setItem('seatsCount', selectedSeatsCount.textContent)

    calculatePrice()

    localStorage.setItem('seatsArr', JSON.stringify(seatsArr))
  }
})

// When Changing The Movie
selectedMovie.addEventListener('change', e => {

    moviePrice = selectedMovie.value

    calculatePrice()

    localStorage.setItem('selectedMovie', moviePrice)
})

// Calculate Total Price For Selected Seats & Movie
function calculatePrice() {

    let newPrice = moviePrice * selectedSeatsCount.textContent

    price.textContent = newPrice

    localStorage.setItem('price', newPrice)
}