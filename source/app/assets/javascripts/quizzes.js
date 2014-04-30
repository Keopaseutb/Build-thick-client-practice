
$(document).ready(function(){
  getQuizzes();
});

function getQuizzes(){
  $.ajax({
    url: "/quizzes.json",
    type: "GET",
  }).done(function(data){
    console.log(data);
    console.log(data.quizzes[0].name)
    var source = $("#quiz-template").html();
    var template = Handlebars.compile(source);
    var context = {
      quizName: data.quizzes[0].name
    };
    var html = template(context);
    $(document.body).html(html);

  }).fail(function(data){
    console.log("This wont work")
  });
}

