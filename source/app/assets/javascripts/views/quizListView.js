function QuizListView(quizElements){
  this.container = quizElements["container"]
  this.quizTemplate = quizElements["quizTemplate"]
}

QuizListView.prototype = {
  drawQuizzes: function(json){
    console.log(json)
    var source = $(this.quizTemplate).html()
    var template = Handlebars.compile(source)
    $(this.container).html(template(json))
  }
}