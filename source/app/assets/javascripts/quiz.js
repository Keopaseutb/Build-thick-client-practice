$(document).ready(function(){
  getQuizzes();

});

function getQuizzes(){
  $.ajax({
    url: "/quizzes.json",
    type: "GET",
  }).done(function(serverdata){
    console.log("Success!", serverdata);

    var source = $("#quiz-template").html();
    var template = Handlebars.compile(source);
    var context = {
      quizName: serverdata.quizzes[0].name
    };
    var html = template(context);
    $(document.body).html(html);
  }).fail(function(serverdata){
    console.log("Error!", serverdata)
  })
}
