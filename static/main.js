'use strict'

// parou no time 49;15  minutos 
//Mini projetos javascript (Iniciantes) - 08 CRUD Completo youtube  fernandp Leonid

const openModal = () => document.getElementById('modal')
.classList.add('active')

const closeModal = () => document.getElementById('modal')
.classList.remove('active')



const tempClient = {
    nome: "Maria",
    email: "nicolas@gmail.com",
    celular: "99999999",
    cidade: "são roque"
}
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
  //convertento em string 
// key      value
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))
// Crud - create update delete
const deleteClient = (index) =>{
   const dbClient = readClient()
   dbClient.splice(index, 1)
   setLocalStorage(dbClient)
}
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)

}
const readClient = () => getLocalStorage()
const createClient = (client) => {
                    // ele esta lendo todo conteudo do localstorage transformando em json e envia para variável db_client 
    const dbClient =  getLocalStorage()
    //acrescenta mais um push
    dbClient.push (client)
    setLocalStorage(dbClient)
  
}
//interação com o layount
const isValidFields = () => {
    const client = {
        nome: document.getElementById('nome').nodeValue,
        email: document.getElementById('email').ariaValueMax,
        celular: document.getElementById('celular').ariaValueMax,
        cidade: document.getElementById('cidade').ariaValueMax
    }
    createClient(client)
 

}
const saveClient = () => {
    if (isValidFields()) {
        console.log("Cadastrando cliente")     
    }
}

//Eventos 
document.getElementById('cadastrarCliente')
.addEventListener('click', openModal)
document.getElementById('click',closeModal)
document.getElementById('salvar')
.addEventListener('click',saveClient)


