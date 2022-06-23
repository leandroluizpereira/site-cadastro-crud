'use strict'

const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => document.getElementById('modal')
.classList.remove('active')

const tempClient = {
    nome: "Fulano",
    email: "fulano@gmail.com",
    celular: "99999999",
    cidade: "são roque"


}

// Crud - create update delete

const createCliente = (clent) => {

    localStorage.setItem("teste","teste para o crud")

}

//Eventos 
document.getElementById('cadastrarCliente')
.addEventListener('click',openModal)

document.getElementById('click',closeModal)
