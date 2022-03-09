fetch('https://bobsburgers-api.herokuapp.com/characters/[47,277,168,272,58,314,404,434,464,473]')
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
    let likeButton = document.querySelector('#likeButton')
    likeButton.innerContent = "♡"
    let characterImage = document.querySelector('#characterImage')
    characterImage.src = details.image
    console.log(characterImage.src)
 
}

fetch('https://bobsburgers-api.herokuapp.com/characters/[47,277,168,272,58,314,404,434,464,473]')
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
  
likeButton.addEventListener('click', function(e){
  e.preventDefault();
  if (characterLike.innerText = "♡"){
      characterLike.innerText = "♥"
  }else{
    characterLike.innerText = "♡"
    button.reset();
  }
  console.log(characterLike.innerContent)
})



// Comment Section //we can get rid of image at line 59. original was a broken link and its not necessary but put in a funny pic as a placeholder
//card
const detailsCard = (name, button) => {
    return {
      name,
      button,
      showDetails(){
      return `<div class="row">
  <div class="col-3">
   <img src="https://www.logolynx.com/images/logolynx/e2/e2e76ca6127f7d8b8086a9ed189303e0.jpeg"> 
  </div>
  <div class="col-9">
        <h4>${this.name}</h4>
        <textarea type="text" id="inputStatus" placeholder="I know all websites are good, but this is amazing. - Louise Belcher"></textarea>
  <div class="d-flex">
  <button class="ml-auto" onclick="addToFunc(); eraseText()" type="button">${this.button}</button>
  </div>
  </div>
  </div>
  <div class="row">
  <div class="col-12">
  <div id="addTask">
  </div>
  </div>
  </div>
  `
    }
  };
  };
  
  let detailsUpdate = detailsCard("Comment Below!", "Submit");
  
  document.querySelector("aside.card").innerHTML = detailsUpdate.showDetails();
  
  const addToFunc = () =>{
     // gets value from main text area
      let userName = detailsUpdate.name;
      let input = document.getElementById('inputStatus').value;
       // creates element for the value of input
      let title = document.createElement("h6");
      let status = document.createElement("p");
      let reply = document.createElement("ul");
      let deleteButton = document.createElement("li");
      let like = document.createElement("li");
      let replyList = document.createElement("li");
      like.innerHTML = "Like";
      replyList.innerHTML = "Add Comment";
      title.innerHTML = userName;
    //creates a node for the original input
      let textnode = document.createTextNode(input);
      status.appendChild(textnode);
      // status.prepend(title);
      // status.appendChild(reply);
      // reply.appendChild(like);
      // reply.appendChild(replyList);
      // reply.appendChild(deleteButton);
      document.getElementById('addTask').appendChild(status);
      // status.classList.add("statusBox");
      // like.classList.add("like");
      // replyList.classList.add("reply");
      //userName.classList.add("title");
    
      // //creates a container for the remove button
      // let statusBox = document.createElement("div");
      // //creates a button to delete status
      // let removeTask = document.createElement('input');
      // // adds type of which it is a button
      // removeTask.setAttribute('type', 'button');
      // removeTask.classList.add("removeButton");
      // // sets the buttons value 
      // removeTask.setAttribute("value", "delete");
      // // sets the button next to the status text
      // deleteButton.appendChild(removeTask);
      // //sets the button to remove status
      // removeTask.addEventListener('click', function() {
      //     status.parentNode.removeChild(status);
      // }, false);
      // like.addEventListener('click', function() {
      //     this.classList.add("likeClicked");
      // }, false);
    
    //For reply 
      // replyList.addEventListener('click', function() {
      //    this.classList.add("likeClicked");
      //    let luke = document.getElementById('addTask');
      //    let skywalker = document.createElement("textarea");
      //    let replied = document.createElement("p");
      //    let leia = document.createElement("input");
      //    leia.setAttribute('type', 'button');
      //    leia.setAttribute("value", "reply");
      //    leia.setAttribute("class","removeButton");
      //    skywalker.setAttribute("id","pushReply");
      //    skywalker.setAttribute("placeholder", "Reply to this comment");
      //    luke.appendChild(skywalker);
      //    luke.appendChild(leia);
      //    luke.appendChild(replied);
      //    leia.addEventListener('click', function(){
      //      let replyInput =     document.getElementById('pushReply').value;
      //      let replyNode = document.createTextNode(replyInput);
      //      replied.appendChild(replyNode);
      //      if(replyInput === ""){
      //      replied.classList.remove("statusBox");
      //      skywalker.parentNode.removeChild(skywalker);
      //      this.parentNode.removeChild(this);
      //      }else{
      //      let replyName = document.createElement("h6");
      //      let deleteComment = document.createElement("p");
      //      deleteComment.innerHTML = "Delete";
      //      deleteComment.classList.add("deleteComment");
      //      replyName.innerHTML = `${userName} says:`;
      //      replied.prepend(replyName);
      //      replied.prepend(deleteComment);
      //      replied.classList.add("statusBox");
      //      skywalker.parentNode.removeChild(skywalker);
      //      this.parentNode.removeChild(this);
      //        deleteComment.addEventListener('click', function() {
      //         replied.parentNode.removeChild(replied);
      //        }, false);
      //      }
      //    }, false);
      // }, false);
    
  };
  
  
  const eraseText = () => {
    //erases placeholder text in textarea
      document.getElementById("inputStatus").value = "";
  };


// let characterLikes = document.querySelector('#character-likes')
// characterLikes.innerText = details.likes

// let likeButton = document.querySelector('#like-button')
// let characterLikes = document.querySelector('#character-likes')

// likeButton.addEventListener('click', function(e){
//     characterLikes.innerContent = parseInt(characterLikes.innerContent) +1
//     console.log(characterLikes.innerContent)
// })
