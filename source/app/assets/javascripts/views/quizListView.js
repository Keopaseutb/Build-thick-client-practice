function QuizListView(quizElements){
  this.container = quizElements["container"]
  this.quizTemplate = quizElements["quizTemplate"]
}

QuizListView.prototype = {
  drawQuizzes: function(e,json){
    var source = $(this.quizTemplate).html()
    var template = Handlebars.compile(source)
    $(this.container).html(template(json))
  }
}