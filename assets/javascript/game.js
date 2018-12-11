var targetNumber = [Math.floor(Math.random() * 120) + 19];
var userNumber = 0;
var crystalOne = [Math.floor(Math.random() * 12) + 1];
var crystalTwo = [Math.floor(Math.random() * 12) + 1];
var crystalThree = [Math.floor(Math.random() * 12) + 1];
var crystalFour = [Math.floor(Math.random() * 12) + 1];
var wins = 0;
var losses = 0;

$('#wins').text(wins);
$('#losses').text(losses);
$("#targetNumber").append(targetNumber);

function reset(){
    userNumber = 0;
    $("#targetNumber").text(targetNumber);


};


$("#crystalOne").on("click", function() {
    
    crystalOne = parseInt(crystalOne);
    userNumber += crystalOne;
    $("#userNumber").text(userNumber);

    if (userNumber === targetNumber) {
        wins++;
        reset()
      }
  
      else if (userNumber >= targetNumber) {
        losses++;
        reset()
      };

});
$("#crystalTwo").on("click", function() {
    
    crystalTwo = parseInt(crystalTwo);
    userNumber += crystalTwo;
    $("#userNumber").text(userNumber);

    if (userNumber === targetNumber) {
        wins++;
        reset()
      }
  
      else if (userNumber >= targetNumber) {
        losses++;
        reset()
      };
});

$("#crystalThree").on("click", function() {
    
    crystalThree = parseInt(crystalThree);
    userNumber += crystalThree;
    $("#userNumber").text(userNumber);

    if (userNumber === targetNumber) {
        wins++;
        reset()
      }
  
      else if (userNumber >= targetNumber) {
        losses++;
        reset()
      };

});

$("#crystalFour").on("click", function() {
    
    crystalFour = parseInt(crystalFour);
    userNumber += crystalFour;
    $("#userNumber").text(userNumber);

    if (userNumber === targetNumber) {
        wins++;
        reset()
      }
  
      else if (userNumber >= targetNumber) {
        losses++;
        reset()
      };

});

