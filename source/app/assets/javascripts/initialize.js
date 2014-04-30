$(document).ready(function(){
  console.log("document is ready");

  var questionContOpts = {
    view: new questionView(),
    getQuestionsFromDB: new Client('get', '/quizzes.json')
  }
  var questionListController = new questionController(questionContOpts)

  questionListController.runApp()

});