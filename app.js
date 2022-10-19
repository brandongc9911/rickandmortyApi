import API from "./api.js";
import Character from "./character.js";

const api = new API()
const modal = document.querySelector(".modal")
const close = document.querySelector("#close-content")
const boton = document.querySelector("#search")
const nameCharacter = document.querySelector("#nameCharacter")
let next
let contador = 1
let personajes
let sideCharacterImg


boton.addEventListener("click", async (e)=>{
    e.preventDefault()
    
    const characterData = await api.getCharacterName(nameCharacter.value)
    let character = new Character(characterData.results[0])    
    character.sideCharacter.innerHTML = character.sideCharacterContent()
    next = document.querySelector(".next")
    next.style.display = "flex"
    nextCharacterName(characterData)
    viewCardSide(character)
})

function nextCharacterName(characterData){
    
    let nextRight = document.querySelector("#right").addEventListener("click", (e)=>{
        contador++
        let character = new Character(characterData.results[contador])
        character.sideCharacter.children[2].src = character.image
        character.sideCharacter.children[1].textContent = character.name
        viewCardSide(character)
    })

    let nextLeft = document.querySelector("#left").addEventListener("click", (e)=>{
        contador--
        let character = new Character(characterData.results[contador])
        character.sideCharacter.children[2].src = character.image
        character.sideCharacter.children[1].textContent = character.name
        viewCardSide(character)
    })
    
}

function openCard(){
    personajes = document.querySelectorAll(".personaje").forEach((e)=>{
        e.addEventListener("click", (a)=>{
            modal.classList.remove("hidden")
            modal.classList.add("visible")
            let personaje = e.firstElementChild.getAttribute('value');
            infoCharacter(personaje)
        })
    })
    
}

function closeCard(){
    close.addEventListener("click", ()=>{
        modal.classList.remove("visible")
        modal.classList.add("hidden")

    })
}

async function infoCharacter(personaje){
    const characterData = await api.getCharacter(personaje)
    
    const character = new Character(characterData)
    character.modalContent.innerHTML = character.info()
}

async function principalCharacter(){
    for(let i = 1; i<=3; i++){
        const characterData = await api.getCharacter(i)
        const character = new Character(characterData)
        character.importantCharacter.innerHTML+= character.mostImportantImage()
    }
    openCard()
    closeCard()
}

async function sideCharacter(){
    let random = Math.floor((Math.random() * (100 - 1 + 1)) + 1)
    const characterData = await api.getCharacter(random)
    
    const character = new Character(characterData)
    character.sideCharacter.innerHTML = character.sideCharacterContent()
    
    viewCardSide(character)
}

function viewCardSide(character){
    sideCharacterImg = document.querySelector(".side-content__img")

    
    sideCharacterImg.addEventListener("click",(e)=>{
            modal.classList.remove("hidden")
            modal.classList.add("visible")
            
            infoCharacter(character.id)
    })
    
}

principalCharacter()
sideCharacter()







