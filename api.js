export default class API{
    async getCharacter(id){
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        return data
    }

    async getCharacterName(name){
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
        const data = await response.json()
        return data
    }
}