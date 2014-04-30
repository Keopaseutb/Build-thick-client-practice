$(document).ready(function() {

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

  console.log('it starts!');

  QuizListFetcher = function(opts) {
    if (!opts) opts = {};
    this.queryURL = opts.queryURL || '/quizzes.json'
    // debugger
    console.log("inside quiz fetcher!")
  }

  QuizListFetcher.prototype = {
    fetch: function() {
      $.get(this.queryURL, { session_key: 'a124f87dec55da23' }, function(data) {
        var source = $('#quiz-template').html();
        var template = Handlebars.compile(source);
        our_data = {
          QuizId : data['quizzes'][0].quiz_id,
          QuizName: data['quizzes'][0].name
        }
        $('.container').append(template(our_data));
      })
    }
  };

new QuizListFetcher().fetch();
});
