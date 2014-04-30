
QUESTIONS = '/quizzes/1/questions/next.json';
$(function() {
  $('.quiz-container').on('click', 'td', function(event){
    event.preventDefault();
    $.ajax({
      url: QUESTIONS,
      type: 'get'
    })
    .done(function(questionData){
      console.log(questionData);
    })
  })
})

// $(function() {
//   $('#quiz').on('click', function(e) {
//     e.preventDefault();
//     $.ajax({
//       url: QUIZZES,
//       type: 'get'
//     })
//     .done(function(quizData){
//       // var jqxhr = JSON.parse(data)
//       console.log(quizData)
//       var source = $('#quiz-template').html();
//       var template = Handlebars.compile(source);
//       $(".quiz-container").html(template(quizData))
//     });
//   });
// })

