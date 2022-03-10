fetch('http://localhost:3000/characters')
.then(resp => resp.json())
.then(bobsData => renderRandomCharacter(bobsData))

function renderRandomCharacter(bobsData){
    let characterDetails = document.querySelector('#character-details')
    let random = Math.floor((Math.random() * bobsData.length-1) + 1);
    
    let details = bobsData[random]

    let characterName = document.querySelector('#characterName')
    characterName.innerText = details.name
    let characterAge = document.querySelector('#characterAge')
    characterAge.innerText = `Age: ${details.age}`
    let characterVoiceActor = document.querySelector('#characterVoiceActor')
    characterVoiceActor.innerText = `Voiced by: ${details.voicedBy}`
    let characterFirstEpisode = document.querySelector('#characterFirstEpisode')
    characterFirstEpisode.innerText = `First appearance in ${details.firstEpisode}`
    let characterImage = document.querySelector('#characterImage')
    characterImage.src = details.image
    let characterLikes = document.querySelector("#likes")
    characterLikes.innerText = details.likes
}

fetch('http://localhost:3000/characters')
.then(resp => resp.json())
.then(bobsData => renderCharacterList(bobsData))

function renderCharacterList(bobsData){
    let characterList = document.querySelector('#character-list')

    for(let characterObj of bobsData){
        let characterListName = document.createElement('li')
        characterListName.innerText = characterObj.name
        characterListName.addEventListener('click', function(e){
            let newArr = [characterObj]
            renderRandomCharacter(newArr)
        })
        characterList.appendChild(characterListName)
    }
}

let likeButton = document.querySelector('#likeButton')
let characterLikes = document.querySelector('#likes')

likeButton.addEventListener('click', function(e){
  characterLikes.innerText = parseInt(characterLikes.innerText) +1
  console.log(characterLikes.innerText)
})



  


