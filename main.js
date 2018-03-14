
let questionNumber = 0;
let score = 0;
let answers = [];

/* --- Genertion of Html data --- */
function generateScore (){
    return `<div class="floatL fade-in">
              <p class='scoreSize'>Question :</p>
              <p class='scoreSize'><span class='js-questNum numSize'>${questionNumber + 1}</span> of 10</p>
            </div>
            <div class="floatR fade-in">
              <p class='scoreSize'>Score : ${score}</p>
            </div>`;
}

function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<form class="fade-in">
              <img class="chordImg" src=${STORE[questionNumber].questImg} alt=${STORE[questionNumber].alt}>
                <fieldset>
                  <legend id="radio_label">Name the Chord Above</legend>
                  <div role="group" aria-labelledby="radio_label">
                    <label class="answerOption labelL" for="choice1">
                      <input type="radio" value="${STORE[questionNumber].choice[0]}" name="option" id="choice1" aria-label="choice 1" required >
                      <span class="choiceText">\xa0\xa0${STORE[questionNumber].choice[0]}</span>
                    </label>
                
                    <label class="answerOption labelR" for="choice2">
                      <input type="radio" value="${STORE[questionNumber].choice[1]}" name="option" id="choice2" aria-label="choice 2" required>
                      <span class="choiceText">\xa0\xa0${STORE[questionNumber].choice[1]}</span>
                    </label>
                  </div>

                  <div>
                    <label class="answerOption labelL" for="choice3">
                      <input type="radio" value="${STORE[questionNumber].choice[2]}" name="option" id="choice3" aria-label="choice 3" required>
                      <span class="choiceText">\xa0\xa0${STORE[questionNumber].choice[2]}</span>
                    </label>
                
                    <label class="answerOption labelR" for="choice4">
                      <input type="radio" value="${STORE[questionNumber].choice[3]}" name="option" id="choice4" aria-label="choice 4" required>
                      <span class="choiceText">\xa0\xa0${STORE[questionNumber].choice[3]}</span>
                    </label>
                    </fieldset>
                  </div>
                    <button type="submit" class="submitAnswer">Submit answer</button>
                  </div>
                  </div>
              </form>`;
           } else {
             questionNumber = 10;
             $(document).find('.js-scoreBlock').removeClass('shown');
             playAudio('startAudio');
             renderResults();
             restartQuiz();
           } 
        }

function generateCorrectFeedback(){
  return `<div class="feedbackContainer fade-in">
            <h2 class="correct">AWESOME!! You nailed it!</h2>
          <div>
            <p class="answerFeedback">Your answer was<br><span class="answer">${STORE[questionNumber].answer}</span></p>
            <p class="encourage">Let's see if you can get the next one correct</p>
            <img class="feedbackImg"  src=${STORE[questionNumber].resultImg} alt=${STORE[questionNumber].alt2}>
            <audio id="correctAudio" src="http://cd.textfiles.com/cubase/CUBASIS/GUITAR/ELECTRIC/MAJOR.WAV"></audio>
          </div>
          <form>
            <div>
              <button type="submit" class="nextButton nextSubmit">Next</button>
            </div>
          </form>
          </div>`;
     }


function generateIncorrectFeedback(){
  return `<div class="feedbackContainer fade-in">
            <h2 class="incorrect">Sorry, wrong answer</h2>
          <div>
            <p class="answerFeedback">The correct answer is<br><span class="answer">${STORE[questionNumber].answer}</span></p>
            <p class="encourage">Let's see if you can get the next one correct</p>
            <img class="feedbackImg" src=${STORE[questionNumber].resultImg} alt=${STORE[questionNumber].alt2}>
            <audio id="incorrectAudio" src="http://cd.textfiles.com/cubase/CUBASIS/GUITAR/ELECTRIC/DIMIN.WAV"></audio>
          </div>
          <form>
            <div>
              <button type="submit" class="nextButton nextSubmit">Next</button>
            </div>
          </form>
          </div>`;
}

function generateResultsTemplate() {
  console.log(answers);
  return `<div class='fade-in'>
            <div class='inline slide-in'>
              <img class='resultImg' src=${STORE[0].resultImg} alt=${STORE[0].alt2}>
              <p class='resultText'>Question 1:<br>${answers[0].validity}</p>
              <p class='resultText'>Your answer was: ${answers[0].id}</p>
            </div>
            <div class='inline slide-in'>
              <img class='resultImg' src=${STORE[1].resultImg} alt=${STORE[1].alt2}>
              <p class='resultText'>Question 2:<br>${answers[1].validity}</p>
              <p class='resultText'>Your answer was: ${answers[1].id}</p>
            </div>
            <div class='inline slide-in'>
            <img class='resultImg' src=${STORE[2].resultImg} alt=${STORE[2].alt2}>
            <p class='resultText'>Question 3:<br>${answers[2].validity}</p>
            <p class='resultText'>Your answer was: ${answers[2].id}</p>
            </div>
            <div class='inline slide-in'>
              <img class='resultImg' src=${STORE[3].resultImg} alt=${STORE[3].alt2}>
              <p class='resultText'>Question 4:<br>${answers[3].validity}</p>
              <p class='resultText'>Your answer was: ${answers[3].id}</p>
              </div>
            <div class='inline slide-in'>
              <img class='resultImg' src=${STORE[4].resultImg} alt=${STORE[4].alt2}>
              <p class='resultText'>Question 5:<br>${answers[4].validity}</p>
              <p class='resultText'>Your answer was: ${answers[4].id}</p>
            </div>
            <div class='inline slide-in'>
              <img class='resultImg' src=${STORE[5].resultImg} alt=${STORE[5].alt2}>
              <p class='resultText'>Question 6:<br>${answers[5].validity}</p>
              <p class='resultText'>Your answer was: ${answers[5].id}</p>
            </div>
            <div class='inline slide-in'>
              <img class='resultImg' src=${STORE[6].resultImg} alt=${STORE[6].alt2}>
              <p class='resultText'>Question 7:<br>${answers[6].validity}</p>
              <p class='resultText'>Your answer was: ${answers[6].id}</p>
            </div>
            <div class='inline slide-in'>
              <img class='resultImg' src=${STORE[7].resultImg} alt=${STORE[7].alt2}>
              <p class='resultText'>Question 8:<br>${answers[7].validity}</p>
              <p class='resultText'>Your answer was: ${answers[7].id}</p>
            </div>
            <div class='inline slide-in'>
              <img class='resultImg' src=${STORE[8].resultImg} alt=${STORE[8].alt2}>
              <p class='resultText'>Question 9:<br>${answers[8].validity}</p>
              <p class='resultText'>Your answer was: ${answers[8].id}</p>
            </div>
            <div class='inline slide-in'>
              <img class='resultImg' src=${STORE[9].resultImg} alt=${STORE[9].alt2}>
              <p class='resultText'>Question 10:<br>${answers[9].validity}</p>
              <p class='resultText'>Your answer was: ${answers[9].id}</p>
            </div>
            <div>
              <button type="submit" class="restartButton js-restart">Retake Quiz</button>
            </div>
          </div>`;
}

function generateResult1() {
    return `<div>
              <p class="resultGreeting">Keep working and you will be rocking in no time!</p>
              <p class="resultScore">Your score was</p>
              <p class="resultScore">${score} out of 10.</p>
              <div class="centerResults"></div>
            </div>`;
}

function generateResult2() {
    return `<div>
              <p class="resultGreeting">You're no slouch! Nice skills!</p>
              <p class="resultScore">Your score was</p>
              <p class="resultScore">${score} out of 10.</p>
              <div class="centerResults"></div>  
            </div>`;
}

function generateResult3() {
    return `<div>
              <p class="resultGreeting">Incredible!! Excellent work!</p>
              <p class="resultScore">Your score was</p>
              <p class="resultScore">${score} out of 10.</p>
              <div class="centerResults"></div>
            </div>`;
}

function clearModal() {
  $('.clearModal').on('click', function() {
    $('.warningButton').remove();
    $('.warning').addClass('fade-out')
    $('.warning').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() {
    $('.modal').remove();
      });
    });
}

/* Function to play audio */ 
function playAudio(id) { 
  console.log(`playing media for id ` + id);
  let media = document.getElementById(id);
  media.play(); 
}

function audioToggle() {
  $(document).one('click', '#soundToggle', function() {
    console.log('Audio Diabled');
    window.playAudio = function(){};
  });
}

/* Toggle playAudio function on/off */ 
/*
function audioToggle() {
  $('#soundToggle').one('click', disablePlayAudio);
  
  function disablePlayAudio(){
    console.log('Audio Diabled');
    window.playAudio = function(){};
    $('#soundToggle').one('click', enablePlayAudio);
  }
  function enablePlayAudio(){
    console.log('Audio Enabled'); 
    window.playAudio = playAudio;
    $('#soundToggle').one('click', disablePlayAudio);
  }
  function playAudio(id) { 
    let media = document.getElementById(id);
    media.play(); 
  } 
}
   */

/* --- Rendering of Html data to DOM --- */

function incrementScore () {
  score ++;
  console.log('adding 1 to score count');
  $('.js-score').text(score);
}

function incrementQuestion() {
  questionNumber ++;
  console.log('adding 1 to question count')
  $('.js-questNum').text(questionNumber + 1);
}

function noSelection() {
  console.log('no answer selected');
  $('.modalHolder').removeClass('hidden');
  clearNoSelection();
}

function clearNoSelection() {
  $('.modalHolder').on('click', function() {
    console.log('clearing');
  $('.modalHolder').addClass('fade-out');
  console.log('fading');
  $('.modalHolder').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() {
  $('.modalHolder').removeClass('fade-out');
  $('.modalHolder').addClass('hidden');
    });
  });
}

function renderQuestion (){
  console.log(`rendering question ${questionNumber + 1}`);
  $('.js-scoreBlock').html(generateScore());
  $('.js-actionBlock').html(generateQuestion());
  activeButton();
}

function userSelected() {
   $('body').on('click', '.submitAnswer', function (event) {
    event.preventDefault();
      if($("input:radio[name='option']").is(":checked")) {
        $(document).find('.js-scoreBlock').removeClass('shown');
        let selected = $('input:checked');
        let userAnswer = selected.val();
        let givenAnswer = $('input:checked').val();
        console.log(`answer provided was` + userAnswer);
        let answer = `${STORE[questionNumber].answer}`;
        console.log(`correct answer is` + answer);

        if (userAnswer === answer) {
          answers.push({id: userAnswer, validity: 'correct'});
          correctAnswer();
          console.log('correct answer');
          playAudio('correctAudio');
        } else {
          answers.push({id: userAnswer, validity: 'incorrect'});
          incorrectAnswer();
          console.log('incorrect answer');
          playAudio('incorrectAudio');
        }

    } else {
      noSelection();
    }
  });
}

function correctAnswer(){
  $('.js-actionBlock').html(generateCorrectFeedback());
  incrementScore();
  $('.js-scoreBlock').html(generateScore());
}

function incorrectAnswer(){
  $('.js-actionBlock').html(generateIncorrectFeedback());
}

function renderNextQuestion(){
  $('body').on('click', '.nextButton', function (event) {
    event.preventDefault();
    $(document).find('.js-scoreBlock').addClass('shown');
    incrementQuestion();
    console.log(`... preparing next question`);
    renderQuestion();
  });
}

function renderResults() {
  console.log('rendering results');
  $(document).scrollTop(0);
  $('.js-actionSection').removeClass('shown');
  $('.js-resultsSection').addClass('shown');
  $(document).find('.js-scoreBlock').removeClass('shown');

  if (score < 5) {
    $(document).scrollTop(0);
    $('.js-resultsBlock').html(generateResult1());
    $('.centerResults').html(generateResultsTemplate());
  } else if (score > 4 && score < 8) {
    $(document).scrollTop(0);
    $('.js-resultsBlock').html(generateResult2());
    $('.centerResults').html(generateResultsTemplate());
  } else {
    $(document).scrollTop(0);
    $('.js-resultsBlock').html(generateResult3());
    $('.centerResults').html(generateResultsTemplate());
  }
}

/* --- Set background on active label/radio element MAYBE REPLACE WITH :focus IN CSS--- */

function activeButton(){
$(document).on('click', 'input:radio', function(event) {
    $('label:has(input:radio:checked)').addClass('active');
    $('label:has(input:radio:not(:checked))').removeClass('active');
  }); 
}

/* --- Restart the quiz app --- */

function restartQuiz () {
  $(document).on('click', '.js-restart', function(event) {
    event.preventDefault();
    console.log('reloading quiz application')
    location.reload();
  });
}
    
/* --- Start the quiz app --- */

function beginQuiz(){
  console.log('initializing quiz application');
  $(document).scrollTop(0);
  console.log('setting question number');
  $('.js-questNum').text(1);
  audioToggle();
  console.log('audio initialized');
  clearModal();
  console.log('... quiz ready');
  $(document).on('click', '.js-startQuiz', function(event) {
      event.preventDefault();
      playAudio('startAudio');
      renderQuestion();
      userSelected();
      renderNextQuestion();
      $(document).find('.js-scoreBlock').addClass('shown');
      $(document).find('.js-actionSection').addClass('shown');
      $(document).find('.js-startContainer').addClass('hidden');
  });
}

$(beginQuiz);




