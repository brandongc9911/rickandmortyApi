export default class Character{
    constructor({id,name,status,species,gender,image}){
        this.id = id
        this.name = name
        this.status = status
        this.species = species
        this.gender = gender
        this.image = image
        this.importantCharacter = document.querySelector(".content_personajes")
        this.sideCharacter = document.querySelector(".side-content")
        this.close = document.querySelector("#close-content")
        this.modalContent = document.querySelector(".modal__content--slider")
        // this.viewCard()
    }

    mostImportantImage(){
        return `
            <div class="personaje">
                <img  src="${this.image}" alt="${this.name}" value="${this.id}">
                <p>${this.name}</p>
            </div>
        `
    }

    sideCharacterContent(){
        return `
        <div>
        </div>
        <p class="side-content__name">${this.name}</p>
        <img class="side-content__img" src="${this.image}" alt="${this.name}">
        <div class="next">
            <p id="left"><</p>
            <p id="right">></p>
        </div>
        `
    }

    info(){
        return `
        
        <input type="radio" name="slider-1" id="radio-1" checked>
        <input type="radio" name="slider-1" id="radio-2">
        <input type="radio" name="slider-1" id="radio-3">

        <div class="cards">
            <label class="card-1 card" for="radio-1">
                <h2>Status:</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/103/103387.png">
                <p>${this.status}</p>
            </label>

            <label class="card-2 card" for="radio-2">
                <h2>Gender:</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Gender_symbols_side_by_side_solid.svg/1280px-Gender_symbols_side_by_side_solid.svg.png">
                <p>${this.gender}</p>
            </label>

            <label class="card-3 card" for="radio-3">
                <h2>Species:</h2>
                <img  src="https://cdn-icons-png.flaticon.com/512/30/30473.png">
                <p>${this.species}</p>
            </label>
        </div>
        `
    }

    

    // render(){
    //     this.importantCharacter.innerHTML += this.mostImportantImage()
    //     this.sideCharacter.innerHTML = this.sideCharacterContent()
    // }
}