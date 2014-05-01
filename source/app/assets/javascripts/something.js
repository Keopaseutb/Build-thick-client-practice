$(document).ready(function(){
  ApplicationController()

});

/*******************************************/
// CONTROLLER
/********************************************/

ApplicationController = function(){
  var quiz = new QuizListGetter()
  var quizShower = new QuizShower()
  var question = new QuizQuestionGetter()
  quiz.fetch()
  var question = new QuizQuestionGetter(1)
  var questionShower = new QuestionShower()
  var quizAnswerGetter = new QuizAnswerGetter()
  // var choices = new ChoiceShower()

  $(quiz).on('quizUpdated', function (e,data) {
    quizShower.draw(data)
  })

  $('.container').on('click','a', function(e) {
    event.preventDefault()
    var choice_id = this.href.slice(-1)
    quizAnswerGetter.send(choice_id)
  })

  question.fetch(function(questiondata) {
    questionShower.draw(questiondata.question)
  })

  $(quizAnswerGetter).on ('answerSent', function(e,data) {
      question.fetch(function(questiondata) {
    questionShower.draw(questiondata.question)
  })
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
    method: "GET",
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

  fetch: function (callback) {
  var self = this;
  $.ajax({
    url: this.questionUrl,  //*When you register this event listener remember to bind
   method: "GET",
    data: {session_key : "ajerjijaf"}
  }).done(function(returnData){
    callback(returnData)
  }).fail(function(){
    console.log("Error")
  })
  }
}


QuizAnswerGetter = function (event) {

}

QuizAnswerGetter.prototype = {

  send: function (choice_id) {
    var self = this;
     $.ajax({
    url: '/questions/1/answers.json',  //*When you register this event listener remember to bind
    method: "POST",
    data: {session_key: "ajerjijaf", choice_id: choice_id }
  }).done(function(returnData){
  $(self).trigger('answerSent', returnData )
   console.log(returnData)
  }).fail(function(){
    console.log("Error")
  })
  }
}
/*******************************************/
//  VIEW
/********************************************/

QuestionShower = function() {
  this.source = $('#question-template').html();
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


