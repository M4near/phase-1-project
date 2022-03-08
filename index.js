// See a random mountain displayed in the #mountain-details div when the page loads. A user will see the mountain's image, name, location and number of likes.

//create a fetch request to GET mountain data
//create funciton that provides random mountain data for mountain-details div
//Replace img ID and src in mountain-details div so that they grab a random image with its affiliated name, location, and number of likes

fetch('https://bobsburgers-api.herokuapp.com/characters/[47,58,168,277,272,473]')
.then(resp => resp.json())
.then(bobsData => renderRandomCharacter(bobsData))

function renderRandomCharacter(bobsData){
    let characterDetails = document.querySelector('#character-details')
    let random = Math.floor((Math.random() * bobsData.length-1) + 1);
    
    let details = bobsData[random]

    let characterName = document.querySelector('#character-name')
    characterName.innerText = details.name
    let characterVoiceActor = document.querySelector('#character-VoiceActor')
    characterVoiceActor.innerText = details.voicedBy
    let characterLikes = document.querySelector('#character-likes')
    characterLikes.innerText = details.likes
    let characterImage = document.querySelector('#character-image')
    characterImage.src = details.image
    console.log(characterImage.src)
 
}


// See a list of all mountain names at the bottom of the page in the #mountains-list ul when the page loads. A user should be able to click on a mountain in the list, and display the information for that mountain in the #mountain-details div.

//possibly create another fetch request for mountain data
//insert moutain names in mountains-list UL
//create click events for names so that when  user clicks on name, infomration from that clicked mountain reflects in mountain-details div


fetch('https://bobsburgers-api.herokuapp.com/characters/[47,58,168,277,272,473]')
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


// A user should be able to click on the like button and the number that is displayed on the button should increment by 1. This number of likes does not need to persist upon page refresh.

//create a click event for the like button
//have event increment displayed number by 1 for each time it is clicked

let likeButton = document.querySelector('#like-button')
let mountainLikes = document.querySelector('#mountain-likes')

likeButton.addEventListener('click', function(e){
    mountainLikes.innerText = parseInt(mountainLikes.innerText) +1
    console.log(mountainLikes.innerText)
})




// Comment Section
//card
const detailsCard = (name, button) => {
    return {
      name,
      button,
      showDetails(){
      return `<div class="row">
  <div class="col-3">
   <img src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/92546767_154523512694636_6384440811794683111_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=108&_nc_ohc=VNxfWJo3OdYAX_dMBd4&oh=5acd1a7cf0c7044ee74dc95cc8bf95de&oe=5EC8E7AB" class="rounded-circle img-fluid">
  </div>
  <div class="col-9">
        <h4>${this.name}</h4>
        <textarea type="text" id="inputStatus" placeholder="King Kong Is Cool"></textarea>
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
  
  let detailsUpdate = detailsCard("Bob's Burger", "Update Status");
  
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
      status.prepend(title);
      status.appendChild(reply);
      reply.appendChild(like);
      reply.appendChild(replyList);
      reply.appendChild(deleteButton);
      document.getElementById('addTask').appendChild(status);
      status.classList.add("statusBox");
      like.classList.add("like");
      replyList.classList.add("reply");
      //userName.classList.add("title");
    
      //creates a container for the remove button
      let statusBox = document.createElement("div");
      //creates a button to delete status
      let removeTask = document.createElement('input');
      // adds type of which it is a button
      removeTask.setAttribute('type', 'button');
      removeTask.classList.add("removeButton");
      // sets the buttons value 
      removeTask.setAttribute("value", "delete");
      // sets the button next to the status text
      deleteButton.appendChild(removeTask);
      //sets the button to remove status
      removeTask.addEventListener('click', function() {
          status.parentNode.removeChild(status);
      }, false);
      like.addEventListener('click', function() {
          this.classList.add("likeClicked");
      }, false);
    
    //For reply 
      replyList.addEventListener('click', function() {
         this.classList.add("likeClicked");
         let luke = document.getElementById('addTask');
         let skywalker = document.createElement("textarea");
         let replied = document.createElement("p");
         let leia = document.createElement("input");
         leia.setAttribute('type', 'button');
         leia.setAttribute("value", "reply");
         leia.setAttribute("class","removeButton");
         skywalker.setAttribute("id","pushReply");
         skywalker.setAttribute("placeholder", "Reply to this comment");
         luke.appendChild(skywalker);
         luke.appendChild(leia);
         luke.appendChild(replied);
         leia.addEventListener('click', function(){
           let replyInput =     document.getElementById('pushReply').value;
           let replyNode = document.createTextNode(replyInput);
           replied.appendChild(replyNode);
           if(replyInput === ""){
           replied.classList.remove("statusBox");
           skywalker.parentNode.removeChild(skywalker);
           this.parentNode.removeChild(this);
           }else{
           let replyName = document.createElement("h6");
           let deleteComment = document.createElement("p");
           deleteComment.innerHTML = "Delete";
           deleteComment.classList.add("deleteComment");
           replyName.innerHTML = `${userName} says:`;
           replied.prepend(replyName);
           replied.prepend(deleteComment);
           replied.classList.add("statusBox");
           skywalker.parentNode.removeChild(skywalker);
           this.parentNode.removeChild(this);
             deleteComment.addEventListener('click', function() {
              replied.parentNode.removeChild(replied);
             }, false);
           }
         }, false);
      }, false);
    
  };
  
  
  const eraseText = () => {
    //erases placeholder text in textarea
      document.getElementById("inputStatus").value = "";
  };


  