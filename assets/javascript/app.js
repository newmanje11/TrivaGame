var smashQuestion = [
  {
    question: "What is the newest Super Smash Bros. game going to be released this year?",
    answers: {

      A: "Super Smash Bros. Battle Royale",
      B: "Super smash Bros. Wii U",
      C: "Super smash Bros. Ultimate",
      D: "super smash Bros. Melee"

    }, correctAnswer: "C"
  },
  {
    question: "How many character are gonna be in the newwest edition?",
    answers: {

      A: 10,
      B: 20,
      C: 55,
      D: 74

    }, correctAnswer: "D"
  },
  {
    question: "What is the name of one of Super Smash Bros. most famous pro players?",
    answers: {

      A: "Zero",
      B: "Mewtwo King",
      C: "Mango",
      D: "Hungry Box"

    }, correctAnswer: "A"
  },
  {
    question: "Who is the name and face of the creation of the Super Smash Bros. series?",
    answers: {

      A: "Reggie Fils-Aimé",
      B: "Masahiro Sakurai",
      C: "Satoru Iwata",
      D: "Shigeru Miyamoto"

    }, correctAnswer: "B"
  },
  {
    question: "Which of the new characters announced was once a boss character for the Smash Bros. Wii U",
    answers: {

      A: "King DeDede",
      B: "Boswer",
      C: "King K. Rool",
      D: "Ridley"

    }, correctAnswer: "B"
  }


];
// var smashChoices = [

// ];

// wait for the page to load
$(document).ready(function () {

  $(".startBtn").on("click", function () {

    console.log('youve pressed it')

    $(".content").hide();

    $(".submit").show();

    $(".questions").show();

  });
})

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
      showResults(questions);
      clearInterval(intervalId);

    }

  }
}

startGame(smashQuestion);

function startGame(smashQuestion) {

  var output = [];
  var answers;

  for (var i = 0; i < smashQuestion.length; i++) {

    answers = [];

    for (letter in smashQuestion[i].answers) {

      answers.push(
        '<label>'
        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
        + letter + ': '
        + smashQuestion[i].answers[letter]
        + '</label>'
      );
    }

    output.push(
      '<div class="question"><h4>' + smashQuestion[i].question + '</h4></div>'
      + '<div class="answers">' + answers.join(' ') + '</div>'
    );
  }
  $('.questions').append(output.join(' '));
  var submit = $('<button class="btn btn-large btn-primary" onclick="showResults(smashQuestion);">');
  submit.append("Submit");

  $('.questions').append(submit);


  // submit.onclick = function () {
  //   showResults(questions);
  //   console.log('preshed');

  // }

}

  function showResults(questions) {

    // gather answer containers from our quiz
    var answerContainers = $('.questions').find('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    $(".questions").append('<br>' + numCorrect + ' out of ' + smashQuestion.length) ;

  }
