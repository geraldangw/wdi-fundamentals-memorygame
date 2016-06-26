console.log("JS file is connected to HTML! Woo!")

var cards = ["king", "king", "queen", "queen"]

var cardsInPlay = [];

function createBoard () {
		var gameboard = document.createElement('div')
		gameboard.id = 'gameboard'
		document.getElementById('Game').appendChild(gameboard);
	for (var i = 0; i< cards.length; i++) {
		var card = document.createElement('div')
		card.className = 'card';
		card.setAttribute('data-card', cards[i]);
		card.addEventListener('click', isTwoCards)
		document.getElementById('gameboard').appendChild(card);
		}
}

function isTwoCards () {
  cardsInPlay.push(this.getAttribute('data-card'));
  if(this.getAttribute('data-card') === "king") {
  	this.innerHTML = '<img src="my_king.png" alt="King of Hearts"/>';
  }
  else {
  	this.innerHTML = '<img src="my_queen.png" alt="Queen of Diamonds"/>';
  }
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
}
}


function isMatch () {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
}
	else {
		alert("Sorry, try again.");
}
 for (var i = 0; i< cards.length; i++) {
        document.getElementsByClassName('card')[i].innerHTML = " ";
    }
}

createBoard ()

