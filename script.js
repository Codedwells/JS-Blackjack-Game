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
dealerMessage = document.getElementById("msgBox1");
var UI = document.querySelector(".UI");
var notif = document.querySelector(".notif");
var notifTxt = document.querySelector("#notif-text");
var btnTxt = document.querySelector(".notif-btn");
var randomNum = null;
////////////////////////////////////////////////////

//notif.style.backgroundColor = 'aqua'
var allCards = {
  1: "images/ace.png",
  2: "images/two.png",
  3: "images/three.png",
  4: "images/four.png",
  5: "images/five.png",
  6: "images/six.png",
  7: "images/seven.png",
  8: "images/eight.png",
  9: "images/nine.png",
  10: "images/ten.png",
  11: "images/ace.png",
  12: "images/jack.png",
  13: "images/king.png",
  14: "images/queen.png",
};
//DOM manipulation coming right up :)
//bid change http://127.0.0.1:5500/images/three.png%22
const getRnmNumber = () => {
  randomNum = Math.floor(Math.random() * 14) + 1;
};
bidUpBtn.addEventListener("click", () => {
  bidAmountCount.textContent++;
});
bidDownBtn.addEventListener("click", () => {
  bidAmountCount.textContent--;
  if (bidAmountCount.textContent < 0) {
    bidAmountCount.textContent = 0;
  }
});
var c1Val, c2Val, c3Val, c4Val, blown, dealer, sumedcards;
console.log(c2Val);
//New card
const firstCard = () => {
  getRnmNumber();
  c1Val = randomNum;
  cardOne.src = allCards[`${c1Val}`];
  getRnmNumber();
  dealer = randomNum;
  sumedcards = c1Val;
  //dealer message update
  sumCards.innerText = sumedcards;
  dealerMessage.innerText = dealer;
};
//Reload Happens
const refresh = () => {
  window.location.reload();
};

//Logic for getting a new card
newCardBtn.addEventListener("click", () => {
  if (c2Val == undefined) {
    getRnmNumber();
    c2Val = randomNum;
    cardTwo.src = allCards[`${c2Val}`];
    //setting blown boolean
    c2Val + c1Val > 21 ? (blown = true) : (blown = false);
    sumedcards = c2Val + c1Val;
    sumCards.innerText = sumedcards;
    //dealer getting card
    if (dealer < 21) {
      getRnmNumber();
      dealer += randomNum;
      dealerMessage.innerText = dealer;
    }
    //Show notification You Lose/Win
    if (sumedcards > 21) {
      notifTxt.innerText = "You Lose!";
      showNotif();
    }
  } else if (c3Val == undefined && !blown) {
    getRnmNumber();
    c3Val = randomNum;
    cardThree.src = allCards[`${c3Val}`];
    c2Val + c1Val + c3Val > 21 ? (blown = true) : (blown = false);
    sumedcards = c2Val + c1Val + c3Val;
    sumCards.innerText = sumedcards;
    //dealer
    if (dealer < 21 && 18 < dealer) {
      getRnmNumber();
      dealer += randomNum;
      dealerMessage.innerText = dealer;
    }
    //Show notification You Lose/Win
    if (sumedcards > 21) {
      notifTxt.innerText = "You Lose!";
      showNotif();
    }
  } else if (c4Val == undefined && !blown) {
    getRnmNumber();
    c4Val = randomNum;
    cardFour.src = allCards[`${c4Val}`];
    sumedcards = c2Val + c1Val + c3Val + c4Val;
    sumCards.innerText = sumedcards;
    //dealer
    if (dealer < 21 && 18 < dealer) {
      getRnmNumber();
      dealer += randomNum;
      dealerMessage.innerText = dealer;
    }
    //Show notification You Lose/Win
    if (sumedcards > 21) {
      notifTxt.innerText = "You Lose!";
      showNotif();
    }
  }
});
//Close notification function
const closeNotif = () => {
  notif.style.display = "none";
  blown || c4Val ? refresh() : 0;
};
//Show notification function
const showNotif = () => {
  btnTxt.innerText = "close";
  notif.style.display = "block";
};
