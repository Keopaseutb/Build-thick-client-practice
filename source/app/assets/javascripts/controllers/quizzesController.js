function QuizzesController(model, view){
  this.model = model
  this.view = view
}

QuizzesController.prototype = {
  summonQuizzes: function(){
    this.view.drawQuizzes(this.model.fetch())
    console.log(this.model.fetch())
    console.log("in the controller", this.model.fetch())
     console.log(this.model.fetch())
  }
}