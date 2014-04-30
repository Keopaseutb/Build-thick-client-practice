$(document).ready(function(){

 quiz = new QuizListGetter()
 question = new QuizQuestionGetter(1)
questionShower = new QuestionShower()
});



QuizListGetter =function(geturl) {
  this.quizUrl =  geturl || "/quizzes.json"
}

QuizListGetter.prototype = {
  fetch: function () {
  $.ajax({
    url: this.quizUrl,  //*When you register this event listener remember to bind
    action: "GET",
    data: {session_key : "ajerjijaf"}
  }).done(function(returnData){
    console.log(returnData)
  }).fail(function(){
    console.log("Error")
  })
  }
}


QuizQuestionGetter =function(quiz_number) {
  this.questionUrl =  '/quizzes/' + quiz_number + '/questions/next.json' || '/quizzes/1/questions/next.json'
}

QuizQuestionGetter.prototype = {
  fetch: function () {
  $.ajax({
    url: this.questionUrl,  //*When you register this event listener remember to bind
    action: "GET",
    data: {session_key : "ajerjijaf"}
  }).done(function(returnData){

      questionShower.draw(returnData.question)
  }).fail(function(){
    console.log("Error")
  })
  }
}


QuestionShower = function() {
  this.source = $('#entry-template').html();
  this.template = Handlebars.compile(this.source)
  // this.data = question_data
}

QuestionShower.prototype = {
  draw: function (question_data) {
     $('.container').append(this.template(question_data))

  }
}

// GET /quizzes/1/questions/next.json