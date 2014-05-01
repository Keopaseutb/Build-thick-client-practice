function quizController(initOpts) {
  this.getQuizzesFromDB = initOpts["getQuizzesFromDB"]
  this.view = initOpts["view"]
}

quizController.prototype = {
  runApp: function(){
    this.populateViewWithQuizzes()
  },

  populateViewWithQuizzes: function(){
    this.getQuizzesFromDB.request().done(this.ongetQuizzeSuccess.bind(this))
  },

  ongetQuizzeSuccess: function(data){
    this.view.draw(data)
  },

}