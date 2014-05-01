function QuizList(url){
  this.url = url
}

QuizList.prototype = {
  fetchQuiz: function() {
    $.ajax({url: this.url, type: 'GET'})
    .done(function(json){
      new CustomEvent('quizList')
      $.event.trigger('quizList', json)
    })
  },
  sendQuizId: function(quizId) {
    $.ajax({
      url: "/quizzes/"+quizId+"/questions/next.json",
      type: 'GET',
      data: {session_key: "dfakj9987afsjkladsf9"}
    })
    .done(function(json){
      new CustomEvent('questionList')
      $.event.trigger('questionList', json)
    })
  }
}
