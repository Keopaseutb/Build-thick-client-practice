function QuizzesController(model, view){
  this.model = model
  this.view = view
}

QuizzesController.prototype = {
  bindQuizListeners: function(){
  $(document).on("quizList", quizView.drawQuizzes.bind(quizView))