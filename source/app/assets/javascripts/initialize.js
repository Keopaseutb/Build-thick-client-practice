$(document).ready(function(){
  //Quizzes
  var quizElements = {
    container: ".container",
    quizTemplate: "#quiz-template"
  }
  var quiz = new QuizList('/quizzes.json')
  var quizView = new QuizListView(quizElements)
  var quizController = new QuizzesController(quiz, quizView)

  //Questions
  var questionElements = {
    container: ".container",
    questionTemplate: "#question-template"
  }
  var question = new QuestionList()
  var questionView = new QuestionListView(questionElements)
  var questionController = new QuestionsController(question, questionView)


  //Application
  var controllers = {
    quizController: quizController,
    questionController: questionController
  }
  var applicationController = new ApplicationController(controllers)


  //Driver Code
  applicationController.bindListeners()
  quizController.summonQuizzes()


})