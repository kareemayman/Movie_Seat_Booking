const seats = document.querySelector('.seats')

seats.addEventListener('click', e => {

    if (e.target.matches('.seat:not(.occupied)')) {

        e.target.classList.toggle('selected')
    }
})