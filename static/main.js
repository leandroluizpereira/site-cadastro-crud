'use strict'

// parou no time 21  minutos 
//Mini projetos javascript (Iniciantes) - 08 CRUD Completo youtube  fernandp Leonid

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

const createClient = (client) => {
                    // ele esta lendo todo conteudo do localstorage transformando em json e envia para variável db_client 
    const db_client = JSON.parse(localStorage.getItem('db_client'))
    //acrescenta mais um push
    db_client.push (client)
    //convertento em string 
                           // key      value
    localStorage.setItem("db_client",JSON.stringify(db_client))
}



//Eventos 
document.getElementById('cadastrarCliente')
.addEventListener('click',openModal)

document.getElementById('click',closeModal)




