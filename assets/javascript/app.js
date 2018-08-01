var smashQuestion = [
  "What is the newest Super Smash Bros. to be released this year?",
  "How many character are gonna be in the newwest edition?",
  "What is the name of one of Super Smash Bros. most famous pro players?",
  "Who is the name and face of the creation of the Super Smash Bros. series?",
  "Which of the new characters announced was once a boss character for the Smash Bros. Wii UI?"


];
var smashChoices = [

];

// wait for the page to load
$(document).ready(function () {

  $(".startBtn").on("click", function () {

    $(".start").hide();

    $(".submit").show();

    $(".question").show();


    timestart();

    

    // getting timer to start

    function timestart() {
      clearInterval(intervalId);

      var time = 60;
      var intervalId;
      intervalId = setInterval(timeDown, 1000);
      function timeDown() {
        time--;
        $(".time").html("<h2>Time remaining: " + time + "</h2>");

        if (time === 0) {
          clearInterval(intervalId);

        }

      }

      function startGame() {
        var arrayLength = smashQuestion.length;
        for (var i = 0; i < arrayLength; i++) {
          $(".question").append("<p><h2>"+smashQuestion[i]+"</p></h2>");
        }
      }
      startGame();



    }

  });

});
