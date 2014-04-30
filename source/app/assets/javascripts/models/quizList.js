function QuizList(url){
  this.url = url
}

QuizList.prototype = {
  fetch: function() {
    $.ajax({url: this.url, type: 'GET'})
    .done(function(json){
      console.log("inside the model", json)
      return json


    })

  }
}
