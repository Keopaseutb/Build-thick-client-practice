$(document).ready(function(){

  var quizElements = {
    container: ".container",
    quizTemplate: "#quiz-template"
  }
  var quiz = new QuizList('/quizzes.json')
  var quizView = new QuizListView(quizElements)
  var quizController = new QuizzesController(quiz, quizView)

  var controllers = {
    quizController: quizController
  }
  var applicationController = new ApplicationController(controllers)
  applicationController.bindListeners()


  quizController.summonQuizzes()


})