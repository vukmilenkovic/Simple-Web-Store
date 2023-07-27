
//TIC TAC TOE
//changePlayer
changePlayer = function(model) {
  if (model.player === game.PLAYERS[0]) {
    model.player = game.PLAYERS[1]
  } else {
    model.player = game.PLAYERS[0]
  }
  model.message = "Please pick a field player: " + model.player
  return model;
}

//DICE POKER
/**
 * simulate AI playing
 * LEARN: separate method with no sideeffects - can be tested, refactored and reused
 * @param {Number} diceSumToBeat - AI will try to throw more
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
  if (isPlayerWinning == true) {
    game.setClassToXY(game.PLAYERS[0], 0, 0)
  } else {
    game.setClassToXY(game.PLAYERS[1], 2, 0)
  }
}

function detectWinProLevel (playTableArray) {
  console.log("detectWinProLevel invoked", playTableArray)
  let isWin = detectWinOnRowProLevel(playTableArray)
  if (!isWin) {
    // TODO: check column 
    // isWin = detectWinOnColumn(playTableArray)
  } 
  return isWin
}

function detectWinOnRowProLevelWithY (playTableArray, y) {
    for(let x=0; x<2; x++) {
      if (playTableArray[x][y].buttonClass != playTableArray[x+1][y].buttonClass) {
        return false
      }
    }
  return playTableArray[0][y].buttonClass
}

function detectWinOnRowProLevel (playTableArray) {
  for(let y=0; y<3; y++) {
    let winner = detectWinOnRowProLevelWithY(playTableArray,y)
    if (winner) {
      return winner;
    }
  }
  return false
}

function test_getAIDiceRolls(testRuns) {
  let diceTestValue = 0
  let testRunCount = 0
  //test case where AI cannot lose - max throw is 6 so if user rolls 21-6 -> AI should win
  //
  while (diceTestValue < 21-6) {
    while (testRunCount <= testRuns) {
    let testCase = getAIDiceRolls(diceTestValue);
    //to not break rules testCase cannot be bigger than 6
    if (testCase-diceTestValue>6) {
      console.error('win to big: cannot be bigger than 6')
      return false
    }
    //AI should win
    if (testCase < diceTestValue) {
      console.error('AI should win: ai testCase must be bigger than player dice', testCase, diceTestValue)
      return false
    } 
    testRunCount = testRunCount + 1
    diceTestValue = diceTestValue + 1   
  }
}
return true;
}