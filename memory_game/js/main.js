//console.log("Up and running!");

var cards = [
// Storing an object for each card 
{
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
},

];

var cardsInPlay = [];

var checkForMatch = function ()
{
	if (cardsInPlay[0] === cardsInPlay[1]) 
	{
	console.log("You found a match!");
	}	 
	else 
	{
	console.log("Sorry, try again.");
	}
}

var flipCard = function (cardID)
{
	var length = cards.length;

	// Accessing the rank property of this object
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank); 

	// Test the cards flipped in console
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);


	if (checkForMatch)
	{
		if(cardsInPlay[0] === cardsInPlay[1])
			alert("You found a match!");
		else
			alert("Sorry, try again.");
	}

};

flipCard(0);
flipCard(2);



