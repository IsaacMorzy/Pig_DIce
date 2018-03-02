# Pig_DIce
Dice game of two players(Practice of  constructors, prototypes, objects, properties, methods, jQuery and DOM manipulation and traversal)
##An exciting game of probabality

##Description
* Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold" that is end their turn:
* If the player rolls a 1, they score nothing and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
* The first player to score 100 or more points wins._

###Specifications

* Assigns player names and starting score of 0 into object.
  * Example Input: Isaac
  * Example Output: Player 1 {Isaac, 0}

* Generate random, whole number between 1-6 when prompted
  * Example Input: Roll.click()
  * Example Output: 1 || 2 || 3 || 4 || 5 || 6

* Sums all subsequent rolls in a single turn
  * Example Input: Rolls of (2, 3, 4, 6)
  * Example Output: Turn total: 15

* Removes turn total and ends turn if 1 is rolled.
  * Example Input: Roll = 1
  * Example Output: " points! End turn"Oops you dont get points"

* Adds turn total to given player's total score.
  * Example Input: (Player 1 total score =20) endTurn.click(), turn total = 30
  * Example Output: Player 1 total = 50

* Change display and inputs for second player's turn.
  * Example Input: Player 1 turn ends (endTurn.click() or 1 is rolled)
  * Example Output: Player 2- GO!

* Ends game when player reaches 100 points
  * Example Input: Player1 total score => 100
  * Example Output: "Player one wins!"
