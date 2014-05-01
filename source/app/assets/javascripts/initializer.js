


// var handleJSON_quiz = function(data) {
//   console.log(data)
//   console.log("within handleJSON_quiz")
//   var source = $('#quiz-template').html();
//   var template = Handlebars.compile(source);
//   our_data = {
//     QuizId : data['quizzes'][0].quiz_id,
//     QuizName: data['quizzes'][0].name
//   }
//   $('.container').append(template(our_data));
// }


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
    console.log(this)
    var source = $('#question-template').html();
    var template = Handlebars.compile(source);
    our_question = {
      questionText : data.question.question,
      choicesArray : data.question.choices
    }
    $('.a_question').append(template(our_question));
  }

  // show_choices: function(data) {
  //   console.log(data)
  //   var source = $('#choices-template').html();
  //   var template = Handlebars.compile(source);
  //   console.log(data.question.choices[0].choice)
  //   console.log(data.question.choices)
  //   our_choices = { choices: [
  //     {choicetext: data.question.choices}
  //   ] }
  //   $('.choices').append(template(our_choices));
  // }
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





// =============================
// START!
// =============================

  $(document).ready(function() {
    new quizFetcher().fetch_quiz();
    new questionFetcher().fetch_question();
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
