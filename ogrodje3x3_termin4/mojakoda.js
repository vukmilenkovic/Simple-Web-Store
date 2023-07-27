/****    GAME STATE (STANJE IGRE) ***/
let model = getNewModel()

onReset()

function onReset () {
  game.reset()
}

/****    CHANGE CLICK BEHAVIOUR (kaj se zgodi ob kliku na x,y) ***/
/** willbe caled from UI when user clicks the button on x,y
 * @param {Number} x - x coordinate of button clicked, left-right, 0 is left most
 * @param {Number} y  - the y coordinate of button clicked, top-down, 0 is top most
 */
function onClicked (x, y) {
  console.log("onClicked invoked", x, y)
  model.table[x][y].buttonClass = model.player;
  changePlayer(model)
  // Red player winning
  ticTacToe();
  

   //detectWinAny(model.table) 
   let winner = '';
  
  if (winner != '') {
    model.message = 'WE HAVE A WINNER: ' + winner + ' WON'
    game.reset()
  }
  game.draw(model)
}

/****    YOUR CODE HERE  ***/

/* UCENJE */
// test changeValueRow0
function changeValueRow0 (value, x) {
  console.log("changeValueRow invoked, x:", x)
  let y = 0; //row 0 - computer talk for row 1
  model.table[x][y].value = value;
  game.draw(model)
}

// make dice game:
// one dice using changeValueRow0, modify onClicked to call diceRoll
//TODO: implement
function getDiceRoll() {
  return Math.floor(Math.random() * 4) + 1;
}


function onRoll () {
  console.log("onRoll invoked")
  let dice = getDiceRoll();
  changeValueRow0('?', 1)
  model.playerTotalDice = model.playerTotalDice + dice;
  changeValueRow0(model.playerTotalDice, 0)
  
  //check busted TODO:
  if (model.playerTotalDice > 21){
    console.log("Sorry, you lost, RESTART THE GAME")

    game.setValueToXY('You lost', 1, 0)
    game.setClassToXY(game.PLAYERS[0], 0, 0)
    model.message = "Sorry, you lost, RESTART THE GAME"
    game.draw(model)
    
    
    
  }
  //TODO: add auto win on exact 21
  else if (model.playerTotalDice == 21){
    console.log("You win by default, RESTART THE GAME")
    game.setValueToXY('You won', 1, 0)
    game.setClassToXY(game.PLAYERS[1], 0, 0)
    model.message = "You win by default, RESTART THE GAME"
    game.draw(model)
    
    
  }
  
  game.draw(model)

}


//TIC TAC TOE
ticTacToe = function(){
  //Red player wins
  // first row up to down
  if(model.table[0][0].buttonClass == game.PLAYERS[0] && model.table[0][1].buttonClass == game.PLAYERS[0] && model.table[0][2].buttonClass == game.PLAYERS[0]){
    console.log("red player won")
    model.message = "The Red player won!"
    
  }
  // second row up to down 
  else if (model.table[1][0].buttonClass == game.PLAYERS[0] && model.table[1][1].buttonClass == game.PLAYERS[0] && model.table[1][2].buttonClass == game.PLAYERS[0]){
    console.log("red player won")
    model.message = "The Red player won!"
    
  }
  // third row up to down
  else if (model.table[2][0].buttonClass == game.PLAYERS[0] && model.table[2][1].buttonClass == game.PLAYERS[0] && model.table[2][2].buttonClass == game.PLAYERS[0]){
    console.log("red player won")
    model.message = "The Red player won!"
    
  }
  //left to right first row
  else if (model.table[0][0].buttonClass == game.PLAYERS[0] && model.table[1][0].buttonClass == game.PLAYERS[0] && model.table[2][0].buttonClass == game.PLAYERS[0]){
    console.log("red player won")
    model.message = "The Red player won!"
    
  }
  // left to right second row
  else if (model.table[0][1].buttonClass == game.PLAYERS[0] && model.table[1][1].buttonClass == game.PLAYERS[0] && model.table[2][1].buttonClass == game.PLAYERS[0]){
    console.log("red player won")
    model.message = "The Red player won!"
    
  }
   //left to right third row
  else if (model.table[0][2].buttonClass == game.PLAYERS[0] && model.table[1][2].buttonClass == game.PLAYERS[0] && model.table[2][2].buttonClass == game.PLAYERS[0]){
    console.log("red player won")
    model.message = "The Red player won!"
    
  }
 
  // diagonal left to right top
  else if (model.table[0][0].buttonClass == game.PLAYERS[0] && model.table[1][1].buttonClass == game.PLAYERS[0] && model.table[2][2].buttonClass == game.PLAYERS[0]){
    console.log("red player won")
    model.message = "The Red player won!"
  }
  // diagonal left to right bottom
  else if (model.table[0][2].buttonClass == game.PLAYERS[0] && model.table[1][1].buttonClass == game.PLAYERS[0] && model.table[2][0].buttonClass == game.PLAYERS[0]){
    console.log("red player won")
    model.message = "The Red player won!"
  }



  //Green player winning
  if(model.table[0][0].buttonClass == game.PLAYERS[1] && model.table[0][1].buttonClass == game.PLAYERS[1] && model.table[0][2].buttonClass == game.PLAYERS[1]){
    console.log("Green player won")
    model.message = "The Green player won"
    
  }
  // second row up to down 
  else if (model.table[1][0].buttonClass == game.PLAYERS[1] && model.table[1][1].buttonClass == game.PLAYERS[1] && model.table[1][2].buttonClass == game.PLAYERS[1]){
    console.log("Green player won")
    model.message = "The Green player won"
    
  }
  // third row up to down
  else if (model.table[2][0].buttonClass == game.PLAYERS[1] && model.table[2][1].buttonClass == game.PLAYERS[1] && model.table[2][2].buttonClass == game.PLAYERS[1]){
    console.log("Green player won")
    model.message = "The Green player won"
    
  }
  //left to right first row
  else if (model.table[0][0].buttonClass == game.PLAYERS[1] && model.table[1][0].buttonClass == game.PLAYERS[1] && model.table[2][0].buttonClass == game.PLAYERS[1]){
    console.log("Green player won")
    model.message = "The Green player won"
    
  }
  // left to right second row
  else if (model.table[0][1].buttonClass == game.PLAYERS[1] && model.table[1][1].buttonClass == game.PLAYERS[1] && model.table[2][1].buttonClass == game.PLAYERS[1]){
    console.log("Green player won")
    model.message = "The Green player won"
    
  }
   //left to right third row
  else if (model.table[0][2].buttonClass == game.PLAYERS[1] && model.table[1][2].buttonClass == game.PLAYERS[1] && model.table[2][2].buttonClass == game.PLAYERS[1]){
    console.log("Green player won")
    model.message = "The Green player won"
    
  }
 
  // diagonal left to right top
  else if (model.table[0][0].buttonClass == game.PLAYERS[1] && model.table[1][1].buttonClass == game.PLAYERS[1] && model.table[2][2].buttonClass == game.PLAYERS[1]){
    console.log("Green player won")
    model.message = "The Green player won"
  }
  // diagonal left to right bottom
  else if (model.table[0][2].buttonClass == game.PLAYERS[1] && model.table[1][1].buttonClass == game.PLAYERS[1] && model.table[2][0].buttonClass == game.PLAYERS[1]){
    console.log("Green player won")
    model.message = "The Green player won"
  }
 

}

//changePlayer
/**
* change model.player to next player (either game.PLAYERS[0] or game.PLAYERS[1])
* update model.message  "Please pick a field player: isRed"
*/
changePlayer = function(model) {
  if (model.player == game.PLAYERS[0]){
    model.player = game.PLAYERS[1]
    return model.player
  }
  else if(model.player == game.PLAYERS[1]){
    model.player = game.PLAYERS[0]
    return model.player
  }
}

//DICE POKER
/**
 * simulate AI playing
 * LEARN: separate method with no sideeffects - can be tested, refactored and reused
 * @param {Number} diceSumToBeat - AI will try to throw more1
 * @returns {Number} the sum off all dices thrown by AI
 */
function getAIDiceRolls(diceSumToBeat) {
  let dicePC = 0
  while (dicePC <= diceSumToBeat) {
    let dice = getDiceRoll()
    console.log(dice)
    dicePC = dicePC + dice
    if (dicePC > 21) {
      console.log("bust")
      break
    }
  }
  return dicePC;
}


// blackJack - implement pass
function onPass () {
  console.log("onPass invoked")
  changeValueRow0(" vs ", 1)
  //computer play
  changeValueRow0(getAIDiceRolls(model.playerTotalDice), 2);

  //check if player won and show winner
  let theAIDiceSum = getAIDiceRolls(model.playerTotalDice)
  changeValueRow0(theAIDiceSum, 2)
  //check if player won and show winner
  if (theAIDiceSum < model.playerTotalDice || theAIDiceSum>21) {
    updateModelWithDiceWinner(true)
  } else {
    updateModelWithDiceWinner(false)
  }
  game.draw(model)
  
  
}

function updateModelWithDiceWinner (isPlayerWinning) {
  console.log("updateModelWithDiceWinner invoked", isPlayerWinning)
  if(isPlayerWinning == true){
    game.setClassToXY(game.PLAYERS[1], 0, 0)
    model.message = "You have won "
  } else {
    game.setClassToXY(game.PLAYERS[0], 2, 0)
    model.message = "The computer has won"
  }
}

function detectWinAny (playTableArray) {
  console.log("detectWinAny invoked", playTableArray)
   
  let winningPlayerName = '' //start with noone won, no name
  return winningPlayerName
  
 
  
}
  
  


function detectWinOnRowForColumnY (playTableArray, y) {
  return false
}

function detectWinOnRow (playTableArray) {
  return false
}

function test_getAIDiceRolls(testRuns) {
return true;
}