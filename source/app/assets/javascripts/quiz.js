$(document).ready(function(){
  getQuizzes();

});

function getQuizzes(){
  $.ajax({
    url: "/quizzes.json",
    type: "GET",
  }).done(function(serverdata){
    console.log("Success!", serverdata);
  }).fail(function(serverdata){
    console.log("Error!", serverdata)
  })
}