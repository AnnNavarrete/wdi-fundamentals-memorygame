//console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
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
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);

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



