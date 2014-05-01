$(document).ready(function(){

  var viewOpts = {
    source: "#some-template",
    addContent: ".container"
  };

  var quizContOpts = {
    view: new quizView(viewOpts),
    getQuizzesFromDB: new Client('get', '/quizzes.json')
  };

  var quizListController = new quizController(quizContOpts);

  quizListController.runApp();

});