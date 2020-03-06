// Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.

// Our code will break the game into 3 phases:
// 1. User makes a choice. How will we collect the user’s choice?
// 2. Computer makes a choice. How will we collect the computer’s choice?
// 3. A conditional that determines who wins.

// In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
// 1. Begin by prompting the user for their choice.
// 2. Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
// 3. Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
// 

// 4. Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
// 5. What if the result ends in a tie? Figure out how to handle that as well.
// 6. What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

let playerChoice, opponentChoice; pick = "rock";
let input = true;

do {
    playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        input = false;
    } else {
      window.alert("You need to enter rock, paper or scissors---Try again ");
      input = true;
    }
    } while (input);
    opponentChoice = Math.random(); { 
    if (opponentChoice < 0.33) {
        opponentChoice = "rock";
    } else if (opponentChoice <= 0.67) {
        opponentChoice = "paper";
    } else {
        opponentChoice = "scissors";
  }
}

function choice(playerChoice, opponentChoice) {
    if (playerChoice === opponentChoice) {
      return "The result is a tie!" + " " + "Lets play again.";
    }
    if (playerChoice === "rock") {
    if (opponentChoice === "paper") {
        return "Paper covers rock. Computer wins.";
    } else {
        return "Rock breaks scissors. You win!";
    }
}
    if (playerChoice === "paper") {
    if (opponentChoice === "scissors") {
        return "Scissors cut paper. Computer wins.";
        } else {
        return "Paper covers rock. You win!";
        }
    }

  if (playerChoice === "scissors") {
      if (opponentChoice === "rock") {
        return "Rock breaks scissors. Computer wins.";
    } else {
        return "Scissors cut paper. You win!.";
    }
  }
}  

choice(playerChoice, opponentChoice);
document.write("Computer chose: " + opponentChoice + "<br>");
document.write(choice(playerChoice,opponentChoice));
