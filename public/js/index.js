// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

const deckOfNumbers = [];
const deckOfSuits = [];

// this will hold the random card properties
let cardProperties = {};
// this will hold the current score
let playerScore = 0;
let dealerScore = 0;

// this will hold the current bet amount
let playerBet = 0;

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
  // TO DO: create logic, if playerBet > user credit amount, show error
  playerBet += 10;
  $("#bet-amount").text(`Bet Amount: ${playerBet}`);
});
$("#bet-20").click(function() {
  // TO DO: create logic, if playerBet > user credit amount, show error
  playerBet += 20;
  $("#bet-amount").text(`Bet Amount: ${playerBet}`);
});
$("#bet-50").click(function() {
  // TO DO: create logic, if playerBet > user credit amount, show error
  playerBet += 50;
  $("#bet-amount").text(`Bet Amount: ${playerBet}`);
});

// logic for hit button
$("#hit").click(function() {
  console.log(playerBet);
  dealPlayerCards();
  $("#dealer").html(`<h1 id='dealer-score'>Dealer: ${dealerScore} </h1>`);
  $("#player").html(`<h1 id='player-score'>Player: ${playerScore} </h1>`);
  $("#player").append(
    `<h4 id="player-cards">Player cards: ${cardProperties.cardNumber} ${cardProperties.cardSuit} </h4>`
  );
  console.log(playerScore + " This is your score");
  console.log(dealerScore + " This is the dealer's score");
  // if score is higher than 21, you bust
  if (playerScore > 21) {
    $("#win-loss-alert").append("<h1>Dealer wins!</h1>");
    setTimeout(() => {
      $("#win-loss-alert").empty();
      initGame();
    }, 3000);
  }
});

// Stay button
$("#stay").click(function() {
  if (dealerScore <= 17) {
    while (dealerScore < playerScore) {
      dealDealersCards();
      $("#dealer").html(`<h1 id='dealer-score'>Dealer: ${dealerScore} </h1>`);
      $("#dealer").append(
        `<h4 id="dealer-cards">Dealer cards: ${cardProperties.cardNumber} ${cardProperties.cardSuit} </h4>`
      );
      if (dealerScore <= 21 && dealerScore > playerScore) {
        $("#win-loss-alert").append("<h1>Dealer wins!</h1>");
        initGame();
        setTimeout(() => {
          $("#win-loss-alert").empty();
        }, 2000);
      } else if (dealerScore === playerScore) {
        $("#win-loss-alert").append("<h1>Push!</h1>");
        initGame();
        setTimeout(() => {
          $("#win-loss-alert").empty();
        }, 2000);
      } else if (dealerScore > 21) {
        $("#win-loss-alert").append("<h1>Player wins!</h1>");
        initGame();
        setTimeout(() => {
          $("#win-loss-alert").empty();
        }, 2000);
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
    $("#player-score").text("Player: 0");
  }, 2000);
  $("#dealer-cards").empty();
  $("#player-cards").empty();
  playerScore = 0;
  dealerScore = 0;
}

// });
// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
