const deckOfNumbers = [];
const deckOfSuits = [];

// this will hold the random card properties
let cardProperties = {};
// this will hold the current score
let playerScore = 0;
let dealerScore = 0;

// this will hold the current bet amount
let playerBet = 0;

// this is the player's current credit
let playerCredits = parseInt($("#credits").text());
let userId = $("#credits").attr("data-id");

// boolean for game state
let inProgress = true;

// push 13 numbers to deckOfNumbers
for (let i = 1; i <= 14; i++) {
  deckOfNumbers.push(i);
}
// push 4 numbers to deckOfSuits
for (let i = 1; i <= 4; i++) {
  deckOfSuits.push(i);
}

// logic for bet 10 button
$("#bet-10").click(function() {
  playerBet += 10;
  console.log(playerCredits);
  if (playerCredits < playerBet) {
    alert(`You only have ${playerCredits} credits in your account`);
    playerBet = playerCredits;
    $("#bet-amount").text(`Bet: ${playerBet}`);
  } else {
    console.log(playerCredits);
    $("#bet-amount").text(`Bet: ${playerBet}`);
  }
});
// logic for bet 20 button
$("#bet-20").click(function() {
  playerBet += 20;
  if (playerCredits < playerBet) {
    alert(`You only have ${playerCredits} credits in your account`);
    playerBet = playerCredits;
    $("#bet-amount").text(`Bet: ${playerBet}`);
  } else {
    console.log(playerCredits);
    $("#bet-amount").text(`Bet: ${playerBet}`);
  }
});
// logic for bet 50 button
$("#bet-50").click(function() {
  playerBet += 50;
  if (playerCredits < playerBet) {
    alert(`You only have ${playerCredits} credits in your account`);
    playerBet = playerCredits;
    $("#bet-amount").text(`Bet: ${playerBet}`);
  } else {
    console.log(playerCredits);
    $("#bet-amount").text(`Bet: ${playerBet}`);
  }
});

// Clears bet on click
$("#clear-bet").click(function() {
  playerBet = 0;
  $("#bet-amount").text(`Bet: ${playerBet}`);
});

// logic for hit button
$("#hit").click(function() {
  console.log(playerBet);
  dealPlayerCards();
  $("#dealer").html(`<h1 id='dealer-score'>Dealer: ${dealerScore} </h1>`);
  $("#player-score").html(playerScore);
  $("#player").append(
    ` <img class="cardImg" src="/assets/images/cards/PNG/${cardProperties.cardSuit}/${cardProperties.cardNumber}.png"> </h4>`
  );
  console.log(playerScore + " This is your score");
  console.log(dealerScore + " This is the dealer's score");
  // if score is higher than 21, you bust
  if (playerScore > 21) {
    $("#win-loss-alert").append("<h1 class=win-loss>Dealer wins!</h1>");
    playerCredits = playerCredits - playerBet;
    $("#credits").html(playerCredits);
    $.ajax({
      type: "PUT",
      url: "/api/users",
      data: { credits: playerCredits, id: userId },
      success: () => {
        // initGame();
        setTimeout(() => {
          $("#win-loss-alert").empty();
          // initGame();
          location.reload();
        }, 2000);
      }
    });
  }
});

// Stay button
$("#stay").click(function() {
  if (dealerScore <= 17) {
    while (dealerScore < playerScore) {
      dealDealersCards();
      $("#dealer").html(`<h1 id='dealer-score'>Dealer: ${dealerScore} </h1>`);
      $("#dealer").append(
        `<h4 id="player-cards">Player cards: ${cardProperties.cardNumber} ${cardProperties.cardSuit} </h4>`
      );
      if (dealerScore <= 21 && dealerScore > playerScore) {
        $("#win-loss-alert").append("<h1 class=win-loss>Dealer wins!</h1>");
        playerCredits = playerCredits - playerBet;
        $("#credits").html(playerCredits);
        $.ajax({
          type: "PUT",
          url: "/api/users",
          data: { credits: playerCredits, id: userId },
          success: () => {
            setTimeout(() => {
              $("#win-loss-alert").empty();
              // initGame();
              location.reload();
            }, 2000);
          }
        });
        // initGame();
        // setTimeout(() => {
        // $("#win-loss-alert").empty();
        // }, 2000);
      } else if (dealerScore === playerScore) {
        $("#win-loss-alert").append("<h1>Push!</h1>");
        $.ajax({
          type: "PUT",
          url: "/api/users",
          data: { credits: playerCredits, id: userId },
          success: () => {
            setTimeout(() => {
              $("#win-loss-alert").empty();
              // initGame();
              location.reload();
            }, 2000);
          }
        });
      } else if (dealerScore > 21) {
        $("#win-loss-alert").append("<h1 class=win-loss>Player wins!</h1>");
        playerCredits = playerCredits + playerBet;
        $("#credits").html(playerCredits);
        $.ajax({
          type: "PUT",
          url: "/api/users",
          data: { credits: playerCredits, id: userId },
          success: () => {
            setTimeout(() => {
              $("#win-loss-alert").empty();
              // initGame();
              location.reload();
            }, 2000);
          }
        });
        // initGame();
        // setTimeout(() => {
        // $("#win-loss-alert").empty();
        // }, 2000);
      }
    }
  }
});

// function to deal the players card
function dealPlayerCards() {
  // chooses a random number
  let randomNumber =
    deckOfNumbers[Math.floor(Math.random() * deckOfNumbers.length)];
  // Chooses a random suit
  let randomSuit = deckOfSuits[Math.floor(Math.random() * deckOfSuits.length)];

  // assigns each of the 4 numbers to a suit
  if (randomNumber < 11) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: randomNumber,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: randomNumber,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: randomNumber,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: randomNumber,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  // if random number hits 10, assign card number to 10
  else if (randomNumber === 11) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  // if random number hits 11, assign card number to 10
  else if (randomNumber === 12) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  // if random number hits 12, assign card number to 10
  else if (randomNumber === 13) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  // if random number hits 13, assign card number to 11 if score won't go over 21.
  else if (randomNumber === 14 && playerScore + 11 <= 21) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: 11,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: 11,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: 11,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: 11,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  // if random number hits 13, assign card number to 1 if score will go over 21.
  else if (randomNumber === 14 && playerScore + 11 > 21) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: 1,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: 1,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: 1,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: 1,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  console.log(cardProperties);
  playerScore += cardProperties.cardNumber;
}

// function to deal dealer's card
function dealDealersCards() {
  // chooses a random number
  let randomNumber =
    deckOfNumbers[Math.floor(Math.random() * deckOfNumbers.length)];
  // Chooses a random suit
  let randomSuit = deckOfSuits[Math.floor(Math.random() * deckOfSuits.length)];

  // assigns each of the 4 numbers to a suit
  if (randomNumber < 11) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: randomNumber,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: randomNumber,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: randomNumber,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: randomNumber,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  // if random number hits 10, assign card number to 10
  else if (randomNumber === 11) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  // if random number hits 11, assign card number to 10
  else if (randomNumber === 12) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  // if random number hits 12, assign card number to 10
  else if (randomNumber === 13) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: 10,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  // if random number hits 13, assign card number to 11 if score won't go over 21.
  else if (randomNumber === 14 && dealerScore + 11 <= 21) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: 11,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: 11,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: 11,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: 11,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  // if random number hits 13, assign card number to 1 if score will go over 21.
  else if (randomNumber === 14 && dealerScore + 11 > 21) {
    if (randomSuit === 1) {
      cardProperties = {
        cardNumber: 1,
        cardSuit: "Hearts"
      };
    } else if (randomSuit === 2) {
      cardProperties = {
        cardNumber: 1,
        cardSuit: "Spades"
      };
    } else if (randomSuit === 3) {
      cardProperties = {
        cardNumber: 1,
        cardSuit: "Clubs"
      };
    } else if (randomSuit === 4) {
      cardProperties = {
        cardNumber: 1,
        cardSuit: "Diamonds"
      };
    } else {
      console.log("something went wrong");
    }
  }
  console.log(cardProperties);
  dealerScore += cardProperties.cardNumber;
}

function initGame() {
  setTimeout(() => {
    $("#dealer-score").text("Dealer: 0");
  }, 2000);
  setTimeout(() => {
    $("#player-score").text("0");
  }, 2000);
  $("#dealer-cards").empty();
  $("#player-cards").empty();
  playerScore = 0;
  dealerScore = 0;
}
