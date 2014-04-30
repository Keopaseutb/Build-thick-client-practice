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



// Returns:

// Success!
// Object {quizzes: Array[1]}
// quizzes: Array[1]
// 0: Object
// name: "Dev Bootcamp Questions"
// quiz_id: 1
// __proto__: Object
// length: 1
// __proto__: Array[0]
// __proto__: Object
