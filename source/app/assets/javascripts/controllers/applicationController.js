function ApplicationController(cons) {
  this.quizController = cons["quizController"]
  this.questionController = cons["questionController"]
}

ApplicationController.prototype = {
  bindListeners: function() {
    this.quizController.bindQuizListeners()
    this.questionController.bindQuestionListeners()
  }
}