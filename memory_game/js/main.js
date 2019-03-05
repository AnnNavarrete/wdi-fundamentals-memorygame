//console.log("Up and running!");

// Storing an object for each card in an array
var cards = 
	[{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	},];


var cardsInPlay = [];

// Check for a match function and logging into console
var checkForMatch = function ()
	{	
		if (cardsInPlay.length === 2) 
		{
			if (cardsInPlay[0] === cardsInPlay[1]) 
			{
				console.log("You found a match!");
				alert("You found a match!");
			}	 
			else 
			{
				console.log("Sorry, try again.");
				alert("Sorry, try again.");
			}
		}
	};

// Adding a flipcard function and clean up code to remove repetition
var flipCard = function ()
	{
		var cardID = this.getAttribute('data-id');
		this.setAttribute('src', cards[cardID].cardImage);
		var length = cards.length;

		// Accessing the rank property of this object
		console.log("User flipped " + cards[cardID].rank);
		cardsInPlay.push(cards[cardID].rank); 

		// Test the cards flipped in console
		console.log(cards[cardID].cardImage);
		console.log(cards[cardID].suit);

		checkForMatch();

	};

// Creating the board
var createBoard = function ()
	{
		for (var i = 0; i < cards.length; i++)
		{
			var cardElement = document.createElement('img');
			cardElement.setAttribute('src', 'images/back.png');
			cardElement.setAttribute('data-id', i);
			cardElement.addEventListener('click', flipCard);
			document.getElementById('game-board').appendChild(cardElement);
		}
	};

createBoard();
