function ApplicationController(cons) {
  this.quizController = cons["quizController"]
}

ApplicationController.prototype = {
  bindListeners: function() {
    this.quizController.bindQuizListeners()
  }
}