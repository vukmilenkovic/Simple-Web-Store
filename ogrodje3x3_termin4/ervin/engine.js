
/**
	returns a field on the game table - 
	used to set properties on a button 
	buttonClass - the class of the button - how button will look like
	value - the value of the field - draw method will set the button value to this (its button "text")
*/
function getNewField() {
  let field = {}
  field.buttonClass = ""
  field.value = ""
	return field
}

/**
	returns a row - with 3 fields (can be modified)	
*/
function getNewRow() {
  console.log("getNewRow invoked, will return 3 elements")
  let column = [getNewField(), getNewField(), getNewField()]
	return column
}

/**
	returns new model - object that is used to hold game state.
	draw will update UI with data from model
	@param {String} playerString the name of the start player, isRed,  isGreen
  @returns {Object} the new initilized model for the game
*/
 function getNewModel(playerString) {
    console.log("getNewModel invoked")
    let model = {}
    model.column0 = getNewRow()
    model.column1 = getNewRow()
    model.column2 = getNewRow()
    model.table = [model.column0, model.column1, model.column2]
    model.player = playerString
    model.playerTotalDice = 0    
    model.message = 'New game (click field for tic-tac-toe), roll for numbers game'
    return model;
  }

/**
	main game object with game behavior set to be "frozen" -> it cannot be 
	"accidantaly" changed 
	implement all changes in your new methods
	if needed implement them here
*/
let game = Object.freeze({
  PLAYERS: ["isRed","isGreen"],

  /** Will reset model and board (calls draw)
   * @returns {Object} new model that was reset 
   */
  reset: function () {
    console.log("reset invoked")
    model = getNewModel(game.PLAYERS[0])
    game.draw(model);
    return model;
  },
/**
 * Will update UI - draw all that is in model
 * @param {Object} model the model to draw
 * @returns {boolean} true if success
 */
  draw: function (model) {
    console.log("draw invoked with model", model)
    if (!model) {
      console.error("model missing, call Ervin")
      return false
    }
    //update message
    let elem = document.getElementById("message")
    elem.innerHTML = model.message
    //update buttons on table
    let table = model.table
    for (let x = 0; x < table.length; x = x + 1) {
      for (let y = 0; y < table[x].length; y = y + 1) {
        let aCell = table[x][y];
        if (aCell) {
         game.setClassToXY(aCell.buttonClass, x, y)
         if (aCell.value != undefined) {
           game.setValueToXY(aCell.value, x, y)
         }
        }
      }
    }
    return true
  },

  /** here we check the document (UI) and find the correct button by Id
   * @param {Number} x - x coordinate, left-right, 0 is left most
   * @param {Number} y  - the y coordinate, top-down, 0 is top most
   * @returns  {Object} - the dom element
   */
  getButtonAtXY: function(x, y) {
    //console.log("getButtonAtXY invoked", x, y)
    let elemId = "x" + x + "y" + y;
    let elem = document.getElementById(elemId)
    return elem;
  },

  /** will set className (color) on button and model to the provided class
   * @param {String} newClass the class name
   * @param {Number} x - x coordinate, left-right, 0 is left most
   * @param {Number} y  - the y coordinate, top-down, 0 is top most
   * @returns  {Object} - the dom element
   */
  setClassToXY: function(newClass, x, y) {
  	//console.log("setClass invoked", newClass, x, y)
    let elem = game.getButtonAtXY(x,y)
    if (elem) {
      elem.className = newClass
      model.table[x][y].buttonClass=newClass
    }
    return elem;
  },
  
  /** will set value to display on button and on model to
   * @param {String} newVal the value to display on button 
   * @param {Number} x - x coordinate, left-right, 0 is left most
   * @param {Number} y  - the y coordinate, top-down, 0 is top most
   * @returns  {Object} - the dom element
   */
  setValueToXY: function(newVal, x, y) {
  	//console.log("setValueToXY invoked", newVal)
    let elem = game.getButtonAtXY(x,y)
    if (elem) {
      elem.value = newVal
      model.table[x][y].value=newVal
    }
    return elem;
  }
})