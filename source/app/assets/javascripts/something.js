$(document).ready(function(){
  ApplicationController()
});

/*******************************************/
// CONTROLLER
/********************************************/

ApplicationController = function(){
  var quiz = new QuizListGetter()
  var quizShower = new QuizShower()
  quiz.fetch()
  $(quiz).on('quizUpdated', function (e,data) {
    quizShower.draw(data)
  })
}

QuizListGetter =function(geturl) {
  this.quizUrl =  geturl || "/quizzes.json"
}

QuizListGetter.prototype = {
  fetch: function () {
     var self = this
  $.ajax({
    url: this.quizUrl,  //*When you register this event listener remember to bind
    action: "GET",
    data: {session_key : "ajerjijaf"}
  }).done(function(returnData){
    $(self).trigger('quizUpdated', returnData )
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
    debugger
      questionShower.draw(returnData.question)
  }).fail(function(){
    console.log("Error")
  })
  }
}
/*******************************************/
//  VIEW
/********************************************/

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

QuizShower = function() {
  this.source = $('#quiz-template').html();
  this.template = Handlebars.compile(this.source)
}

QuizShower.prototype = {
  draw: function (data) {
    $('.container').append(this.template(data.quizzes[0]))
  }
}


