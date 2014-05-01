function QuestionListView(questionElements){
  this.container = questionElements["container"]
  this.questionTemplate = questionElements["questionTemplate"]
}

QuestionListView.prototype = {
  drawQuestions: function(e,json){
    console.log("hi")
    console.log(this.questionTemplate)
    //What the fuck is happening between these steps?
    console.log($(this.questionTemplate).html())
    var source = $(this.questionTemplate).html()
    console.log(source)
    var template2 = Handlebars.compile(source)
    $(this.container).html(template2(json))
  }
}