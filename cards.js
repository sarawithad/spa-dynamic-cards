console.log("hi Dara");

// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. 

var deleteButton = document.createElement("button");

var userInput = document.getElementById('userInput');

var createButton = document.getElementById("createButton");
	//add eventListener to create button and call function that will execute upon click
	createButton.addEventListener("click", createCard);

var creation = document.getElementById("cardsGoHere");

var cardRemover = document.getElementById("delete");


function createCard() {
	//grab what user types into input field
	var textAreaInput = userInput.value;
	//set up inside of created card and add delete button with ID to refer to later
	var cardDiv = `<div class="card">${textAreaInput}
				   <button id="delete" type="button">Delete</button></div>`

	//create variables to hold created elements (cards)
	var createdCard = document.createElement("div");
	createdCard.innerHTML = cardDiv;
	
	//add eventListener to delete button and call function that will execute upon click
	createdCard.addEventListener("click", removeCard);

	//append created card element to DOM
	creation.appendChild(createdCard);

};


// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. 
//Not just made invisible, actually removed from the DOM.


//add functionality for delete button here
function removeCard(event) {
	//target which card to remove using event.currentTarget
	creation.removeChild(event.currentTarget);
};


  

