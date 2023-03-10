
// MODAL
let openModalButtons = document.querySelectorAll('[data-modal-target]')
let closeModalButtons = document.querySelectorAll('[data-modal-close]')
let overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click',() => {
        let modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click',() => {
        let modal = button.closest('.accModal')
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// navigation
let toggleButton = document.getElementsByClassName('toggle-button')[0]
let navbarLinks = document.getElementsByClassName('nav-section')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})