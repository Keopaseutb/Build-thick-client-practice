function questionController(initOpts) {
  this.getQuestionsFromDB = initOpts["getQuestionsFromDB"]
  this.view = initOpts["view"]
}

questionController.prototype = {
  runApp: function(){
    this.populateViewWithQuestions()
  },

  populateViewWithQuestions: function(){
    this.getQuestionsFromDB.request().done(this.ongetQuestionSuccess.bind(this))
  },

  ongetQuestionSuccess: function(data){
    this.view.draw(data)
  },

}