cardOne = document.getElementById("card1");
cardTwo = document.getElementById("card2");
cardThree = document.getElementById("card3");
cardFour = document.getElementById("card4");
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
	getRnmNumber();
});
