cardOne = document.getElementById("card1");
cardTwo = document.getElementById("card2");
cardThree = document.getElementById("card3");
cardFour = document.getElementById("card4");
sumCards = document.getElementById("sumOfCards");
newGameBtn = document.getElementById("newGame");
newCardBtn = document.getElementById("newCard");
bidUpBtn = document.getElementById("bidUp");
bidDownBtn = document.getElementById("bidDown");
bidAmountCount = document.getElementById("bidAmount");
remCredits = document.getElementById("creditsAvailable");
dealerMessage = document.getElementById("msgBox");
var randomNum = null;

//DOM manipulation coming right up :)
//bid change
function getRnmNumber() {
	randomNum = Math.floor(Math.random() * 13) + 1;
}
bidUpBtn.addEventListener("click", function () {
	bidAmountCount.textContent++;
});
bidDownBtn.addEventListener("click", function () {
	bidAmountCount.textContent--;
	if (bidAmountCount.textContent < 0) {
		bidAmountCount.textContent = 0;
	}
});
//New card
newCardBtn.addEventListener("click", function () {
	let sum = 0;
	getRnmNumber();
	const card1 = randomNum;
	getRnmNumber();
	const card2 = randomNum;
	getRnmNumber();
	const card3 = randomNum;
	getRnmNumber();
	const card4 = randomNum;
	//sum
	if (card1 + card2 < 21) {
		sum = card1 + card2 + card3;
	} else if (sum1 < 21) {
		sum += card4;
	}
	sumCards.textContent += " " + sum;
	dealerMessage.textContent += card1 + " ";
	console.log(card1, card2, card3, card4);
});
