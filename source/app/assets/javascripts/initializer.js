var handleJSON_quiz = function(data) {
  console.log(data)
  console.log("within handleJSON_quiz")
  var source = $('#quiz-template').html();
  var template = Handlebars.compile(source);
  our_data = {
    QuizId : data['quizzes'][0].quiz_id,
    QuizName: data['quizzes'][0].name
  }
  $('.container').append(template(our_data));
}


  QuizListFetcher = function(opts) {
    if (!opts) opts = {};
    this.queryURL = opts.queryURL || '/quizzes.json'
  }

  QuizListFetcher.prototype = {
    fetch: function() {
      $.get(
        this.queryURL,
        { session_key: 'a124f87dec55da23' },
        handleJSON_quiz )
    }
  };




$(document).ready(function() {

  console.log('it starts!');

  new QuizListFetcher().fetch();
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
