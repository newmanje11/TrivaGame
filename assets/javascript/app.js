var smashQuestion = [
  {
    question: "What is the newest Super Smash Bros. game going to be released this year?",
    answers: {

      a: "Super Smash Bros. Battle Royale",
      b: "Super smash Bros. Wii U",
      c: "Super smash Bros. Ultimate",
      d: "super smash Bros. Melee"

    }, correctAnswer: "c"
  },
  {
    question: "How many character are gonna be in the newwest edition?",
    answers: {

      a: 10,
      b: 20,
      c: 55,
      d: 74

    }, correctAnswer: "d"
  },
  {
    question: "What is the name of one of Super Smash Bros. most famous pro players?",
    answers: {

      a: "Zero",
      b: "Mewtwo King",
      c: "Mango",
      d: "Hungry Box"

    }, correctAnswer: "a"
  },
  {
    question: "Who is the name and face of the creation of the Super Smash Bros. series?",
    answers: {

      a: "Reggie Fils-Aimé",
      b: "Masahiro Sakurai",
      c: "Satoru Iwata",
      d: "Shigeru Miyamoto"

    }, correctAnswer: "b"
  },
  {
  question: "Which of the new characters announced was once a boss character for the Smash Bros. Wii U",
    answers: {

      a: "King DeDede",
      b: "Boswer",
      c: "King K. Rool",
      d: "Ridley"

    }
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
          alert('Times up');
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

            for ( letter in smashQuestion[i].answers) {

              answers.push(
                '<label>'
                  + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                  + letter + ': '
                  + smashQuestion[i].answers[letter]
                + '</label>'
              );
            }

            output.push(
              '<div class="question">' + smashQuestion[i].question + '</div>'
              + '<div class="answers">' + answers.join(' ') + '</div>'
            );
          }
                 $('.questions').append(output.join(' '));
        }
   

      
           
      //     var question= $("<div>");
      //     question.addClass("questionDiv")

      //     question.html("<p><h3>"+smashQuestion[i]+"</p></h3>");

      //     $(".questions").append(question);

      //     console.log(question);
      //   }
      // }
      



//     }

//   });

// });
