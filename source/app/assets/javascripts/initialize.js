$(document).ready(function(){

  var viewOpts = {
    source: "#some-template",
    addContent: ".container"
  };

  var questionContOpts = {
    view: new questionView(viewOpts),
    getQuestionsFromDB: new Client('get', '/quizzes.json')
  };

  var questionListController = new questionController(questionContOpts);

  questionListController.runApp();

});