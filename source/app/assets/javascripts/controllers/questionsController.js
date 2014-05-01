function QuestionsController(model, view){
  this.model = model
  this.view = view
}

QuestionsController.prototype = {
  bindQuestionListeners: function(){
    var question = this.model
    var questionView = this.view
    console.log(questionView)
    $(document).on('questionList', questionView.drawQuestions.bind(questionView))
  }



}
