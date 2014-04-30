var QuestionListFetcher = function() {
  this.queryURL = '/quizzes/1/questions/next.json'
}

QuestionListFetcher.prototype = {
  fetch: function() {
    var source = $("#question-template").html()
    var template = Handlebars.compile(source)
    key = {session_key: 'a1323jklkjkldfasj2'}
    $.get(this.queryURL, key, function(data){
      console.log(data)
      $('.container').html(template(data))
      $('.container').on('click', 'a', function(){alert("you click this")})
    })
  }
}

var AnswerSubmitter = function(){
  this.queryURL = ''
}

Q = new QuestionListFetcher
