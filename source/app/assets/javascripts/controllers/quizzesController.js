function QuizzesController(model, view){
  this.model = model
  this.view = view
}

QuizzesController.prototype = {
  bindQuizListeners: function(){
    var quiz = this.model
    var quizView = this.view

    $(document).on("quizList", quizView.drawQuizzes.bind(quizView))
    $('body').on("click", ".quiz", this.askForQuestions.bind(this))
  },
  summonQuizzes: function(){
    this.model.fetchQuiz()
  },
  askForQuestions: function(e){
    var id = $(e.target).data('quizid')
    this.model.sendQuizId(id)
  }
}