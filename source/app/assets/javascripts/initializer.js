

// =============================
// VIEW/TEMPLATE
// =============================
function handleJSON() {
  var proto = this;
};

handleJSON.prototype = {

  show_quiz: function(data) {
    var source = $('#quiz-template').html();
    var template = Handlebars.compile(source);
    our_data = {
      QuizId : data['quizzes'][0].quiz_id,
      QuizName: data['quizzes'][0].name
    }
    $('.container').append(template(our_data));
  },
  show_question: function(data) {
    var source = $('#question-template').html();
    var template = Handlebars.compile(source);
    our_question = {
      questionText : data.question.question,
      // questionId   : data.question.question_id,
      choicesArray : data.question.choices
    }
    $('.a_question').append(template(our_question));
  },
  handle_answer: function(data) {
    console.log("yay, heard back", data)
  }
}


// =============================
// CONTROLLER
// =============================

// Quiz ---------
quizFetcher = function(opts) {
  if (!opts) opts = {};
  this.queryURL = opts.queryURL || '/quizzes.json'
}

quizFetcher.prototype = {

  fetch_quiz: function() {
    $.get(
      this.queryURL,
      { session_key: 'a124f87dec55da23' },
      handleJSON.prototype.show_quiz )
  }
};

// Questions ------
questionFetcher = function(opts) {
  if (!opts) opts = {};
  this.queryURL = opts.queryURL || '/quizzes/1/questions/next.json'
}
questionFetcher.prototype = {
  fetch_question: function() {
    $.get(
      this.queryURL,
      { session_key: 'a124f87dec55da23' },
      handleJSON.prototype.show_question )
  }
}


// Answers -------

submitAnswer = function(choice) {
  question_id = choice.getAttribute("class");
  answer_id = choice.getAttribute("id");
  ourData = { choice_id: answer_id, session_key: 'a124f87dec55da23' }
  queryUrl = "/questions/" + question_id + "/answers.json"
  $.post(
    queryUrl,
    ourData,
    handleJSON.prototype.handle_answer
)}

answerListener = function(element){
  this.element = element
};

answerListener.prototype = {
  listen: function() {
    this.element.on('click', 'button', function (e) {
      submitAnswer(e.target)
    })
  }
}

      // var clickedButton = e.target;
      // console.log("We're going to send a question_id of " + clickedButton.getAttribute("class") + "and a choice_id of " + clickedButton.getAttribute("id"));

// =============================
// START!
// =============================

  $(document).ready(function() {
    var element = $('.a_question');

    new quizFetcher().fetch_quiz();
    new questionFetcher().fetch_question();
    new answerListener(element).listen();
  });



  // console.log("ready? GO!")
  // var init = $.ajax({
  //   url: 'http://0.0.0.0:3000/quizzes.json',
  //   method: 'GET'
  // });

  // init.done(function(data) {
  //   console.log("initinit")
  //   console.log(data)
  //   $('.container').text(data['quizzes'][0].name)
  // });

  // var putithere = $('.container')
