QUIZZES = '/quizzes.json';

$(function() {
  $('#showQuiz').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: QUIZZES,
      type: 'get'
    })
    .done(function(quizData){
      // var jqxhr = JSON.parse(data)
      console.log(quizData)
      var source = $('#quiz-template').html();
      var template = Handlebars.compile(source);
      $(".quiz-container").html(template(quizData))

    });
  });
})

