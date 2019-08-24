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

// push 13 numbers to deckOfNumbers
for (let i = 1; i <= 14; i++) {
  deckOfNumbers.push(i);
}
// push 4 numbers to deckOfSuits
for (let i = 1; i <= 4; i++) {
  deckOfSuits.push(i);
}

// REPLACE THIS FOR LOOP WITH ON CLICK ONCE IT'S SET UP. FOR LOOP IS FOR TESTING PURPOSES ONLY.
// REPLACE THIS FOR LOOP WITH ON CLICK ONCE IT'S SET UP. FOR LOOP IS FOR TESTING PURPOSES ONLY.
// REPLACE THIS FOR LOOP WITH ON CLICK ONCE IT'S SET UP. FOR LOOP IS FOR TESTING PURPOSES ONLY.
// for (let i = 1; i < 3; i++) {
//   dealPlayerCards();
//   dealDealersCards();
// }

$("#hit").click(function() {
  dealPlayerCards();
  $("#dealer").html(`<h1>Dealer: ${dealerScore} </h1>`);
  $("#player").html(`<h1>Player: ${playerScore} </h1>`);
  $("#player").append(
    `<h4>Player cards: ${cardProperties.cardNumber} ${cardProperties.cardSuit} </h4>`
  );
  console.log(playerScore + " This is your score");
  console.log(dealerScore + " This is the dealer's score");
  // if score is higher than 21, you bust
  if (playerScore > 21) {
    alert("Dealer wins");
  }
  // if dealers goes above 21 you win
  else if (dealerScore > 21) {
    console.log("You win");
  }
  // if its a tie, push
  else if (playerScore === dealerScore) {
    console.log("push");
  }
  // if your score is 21 and the dealer's is less than 21, you win
  else if (playerScore === 21 && dealerScore < 21) {
    alert("You win");
  }
  // if your score is below 21 and the dealer's score is less than yours, you win
  else if (playerScore <= 21 && dealerScore < playerScore) {
    console.log("You win");
  }
  // same as previous but for dealer
  else if (dealerScore <= 21 && playerScore < dealerScore) {
    console.log("dealer wins");
  }
});
// Stay button
$("#stay").click(function() {
  while (dealerScore < playerScore) {
    dealDealersCards();
    $("#dealer").html(`<h1>Dealer: ${dealerScore} </h1>`);
    $("#dealer").append(
      `<h4>Dealer cards: ${cardProperties.cardNumber} ${cardProperties.cardSuit} </h4>`
    );
    if (dealerScore <= 21 && dealerScore > playerScore) {
      alert("dealer wins");
    } else if (dealerScore === playerScore) {
      alert("push");
    } else if (dealerScore > 21) {
      alert("Player wins");
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
