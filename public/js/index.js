var cardSuit = ["hearts", "diamonds", "clubs", "spades"],
    cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
    cardDeck = [],
    playersCards = [],
    playerScore = 0,
    playerWinsTotal = 0,
    dealersCards = [],
    dealerScore = 0,
    dealerWinsTotal = 0,
    gameOver = false,
    playerWon = false;

var startButton = document.getElementById('startButton'),
    hitButton = document.getElementById('hitButton'),
    stayButton = document.getElementById('stayButton'),
    yesButton = document.getElementById('yesButton'),
    noButton = document.getElementById('noButton'),
    dealButton = document.getElementById('dealButton'),
    gameArea = document.getElementById('gameArea');

gameArea.style.display = 'none';
startButton.style.display = 'inline';

startButton.addEventListener('click', function(){
    startButton.style.display = 'none';
    gameArea.style.display = 'grid';
    dealButton.style.display = 'inline';
    cardDeck = newDeck();
});

dealButton.addEventListener('click', function(){
    playersCards.push(dealCard());
    playerUpdate();
    playersCards.push(dealCard());
    playerUpdate();

    dealersCards.push(dealCard());
    dealerUpdate();
    dealersCards.push(dealCard());
    dealerUpdate();

    dealButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
});

hitButton.addEventListener('click', function(){
    playersCards.push(dealCard());
    playerUpdate();
    checkForWinner();
});

stayButton.addEventListener('click', function(){
    gameOver = true;
    checkForWinner();
});

yesButton.addEventListener('click', function(){
    reset();
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    dealButton.style.display = 'inline';
});

noButton.addEventListener('click', function(){
    reset();
    playerWinsTotal = 0;
    dealerWinsTotal = 0;
    playerWins.innerText ='';
    dealerWins.innerText ='';
    gameArea.style.display = 'none';
    startButton.style.display = 'inline';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
});
    

function newDeck() {

    //Creates a full deck of 52 cards.

    var deck = [];

    for (var suitIndex = 0; suitIndex < cardSuit.length; suitIndex++){
        for (var valueIndex = 0; valueIndex < cardValue.length; valueIndex++){
            var card = {
                suit: cardSuit[suitIndex],
                value: cardValue[valueIndex]
            };
            deck.push(card);
        }
    }

    //Shuffles the cards and returns a full shuffled deck.

    var ctr = deck.length,
        index,
        temp;

    while(ctr > 0){
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = deck[ctr];
        deck[ctr] = deck[index];
        deck[index] = temp;
    }
    return deck;
}

    
function dealCard(){

	//Checks to see if there are any cards left in the deck.
	//If not, a new, shuffled deck is created.

	if(cardDeck.length === 0) {
		cardDeck = newDeck();
		return cardDeck.shift();
	}

	//Otherwise it returns the next card in the deck.

	else {
		return cardDeck.shift(); 
	}
}

function displayPlayerCard(cardHand){
        var dealtCard = cardHand[cardHand.length - 1];
        var card = document.createElement("div"),
            suit = dealtCard.suit,
            cardTop = document.createElement("div"),
            cardCenter = document.createElement("div"),
            cardBottom = document.createElement("div");
            playerHand = document.getElementById('playerHand');

        card.classList.add('card', suit);
        cardTop.classList.add('top-suit');
        cardCenter.classList.add('card-value');
        cardBottom.classList.add('bottom-suit');

        cardTop.innerHTML = cardFaceSuit(dealtCard);
        cardCenter.innerHTML = dealtCard.value;
        cardBottom.innerHTML = cardFaceSuit(dealtCard);

        card.appendChild(cardTop);
        card.appendChild(cardCenter);
        card.appendChild(cardBottom);
        playerHand.appendChild(card);

}

function displayDealerCard(cardHand){
    var dealtCard = cardHand[cardHand.length - 1];
    var card = document.createElement("div"),
        suit = dealtCard.suit,
        cardTop = document.createElement("div"),
        cardCenter = document.createElement("div"),
        cardBottom = document.createElement("div");
        dealerHand = document.getElementById('dealerHand');

    card.classList.add('card', suit);
    cardTop.classList.add('top-suit');
    cardCenter.classList.add('card-value');
    cardBottom.classList.add('bottom-suit');

    cardTop.innerHTML = cardFaceSuit(dealtCard);
    cardCenter.innerHTML = dealtCard.value;
    cardBottom.innerHTML = cardFaceSuit(dealtCard);

    card.appendChild(cardTop);
    card.appendChild(cardCenter);
    card.appendChild(cardBottom);
    dealerHand.appendChild(card);
}

function playerUpdate(){
	//Lists the player's cards and calculates and lists
	//their current score

	displayPlayerCard(playersCards);
	playerScore = getScore(playersCards);
	playerScoreboard.innerText = playerScore;	
}

function dealerUpdate(){

	//Lists the dealer's cards and calculates and lists
	//their current score

	displayDealerCard(dealersCards);
	dealerScore = getScore(dealersCards);
	dealerScoreboard.innerText = dealerScore;	
}


function cardFaceSuit(card){
	switch(card.suit){
		case 'hearts':
			return '&hearts;';
			break;
		case 'diamonds':
			return '&diams;';
			break;
		case 'clubs':
			return '&clubs;';
			break;
		case 'spades':
			return '&spades;';
			break;
	}
}

function getScore(cardHand){

	//Calculates the score of the given hand. 

	var score = 0,
		hasAce = false;

	for(i = 0; i < cardHand.length; i++){
		var card = cardHand[i];
		score += cardPoints(card);
		if(card.value === 'A'){
			hasAce = true;
		}
	}

	if(hasAce && score + 10 <= 21){
		return score + 10;
	}

	return score;
}

function cardPoints(card){

    //Returns the numeric value to each card for the purpose of scores

    switch(card.value){
        case 'A':
            return 1;
            break;
        case 'J':
            return 10;
            break;
        case 'Q':
            return 10;
            break;
        case 'K':
            return 10;
            break;
        default:
            return card.value;
            break;
    }
}

function checkForWinner(){

	//If the player is done drawing cards, the dealer is dealt cards
	//and a winner is determined based on scores and Blackjack rules

	if(playerScore > 21){
		gameOver = true;
	}

	if(gameOver){

		while(dealerScore < playerScore && playerScore <= 21 && dealerScore <=21){
			dealersCards.push(dealCard());
			dealerUpdate();
		}
		if(playerScore > 21){
			playerWon = false;
		}
		else if(playerScore < 22 && dealerScore > 21){
			playerWon = true;
		}
		else if(playerScore > dealerScore){
			playerWon = true;
		}
		else{
			playerWon = false;
		}

		declareWinner();
	}
}

function declareWinner(){

	//Declares the winner of the hand based on the status of
	//the playerWon variable, and updates the winner's win
    //total.
    var playerWins = document.getElementById('playerWins'),
        dealerWins = document.getElementById('dealerWins'),
        gameStatus = document.getElementById('gameStatus');

	if(playerWon == true){
		gameStatus.innerText = 'YOU WIN!\nPlay Again?';
		playerWinsTotal++;
        playerWins.innerText = playerWinsTotal;
        dealerWins.innerText = dealerWinsTotal;
	}
	else if(playerWon == false){
		gameStatus.innerText = 'DEALER WINS!\nPlay Again?';
		dealerWinsTotal++;
        dealerWins.innerText = dealerWinsTotal;
        playerWins.innerText = playerWinsTotal;
	}
	
	hitButton.style.display = 'none';
	stayButton.style.display = 'none';
	yesButton.style.display = 'inline';
	noButton.style.display = 'inline';

}


function reset(){

	//Resets the completed game in order to start a new hand

	playersCards = [];
	dealersCards = [];
	playerScore = 0;
	dealerScore = 0;
	gameOver = false;
	playerWon = false;
	playerScoreboard.innerText = '';
	dealerScoreboard.innerText = '';
    gameStatus.innerText = '';
    
    var dealerHand = document.getElementById('dealerHand');
    var playerHand = document.getElementById('playerHand');

    while (dealerHand.hasChildNodes()){
        dealerHand.removeChild(dealerHand.firstChild);
    }

    while (playerHand.hasChildNodes()){
        playerHand.removeChild(playerHand.firstChild);
    }
}