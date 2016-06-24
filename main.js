console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardThree === cardFour) {
alert("You found a match!")
}
else {
	alert("Sorry, try again.")
}*/

function createBoard () {
	var gameboard = document.createElement('div')
	gameboard.id = 'gameboard'
	document.getElementById('Game').appendChild(gameboard)
	for (i=0;i<4;i+=1) {
		var card = document.createElement('div');
		card.className = 'card';
		document.getElementById('gameboard').appendChild(card);
	}
}







