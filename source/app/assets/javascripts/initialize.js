//client side templating. Handlebars and mustaches
Initialize = function(){
  view = new View()
  model = new Model()
  controller = new Controller(view, model)
  controller.printQuizzes()

}


////////////////////////////////////////
View = function(){


}

View.prototype = {
  printOutQuizzes: function(data) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    $('#quizzes_list').html(template(data))

  },
  printOutQuestion: function(data) {
    console.log(data)
  },

  displayQuestions: function(){
    event.preventDefault();
    event.stopPropagation();
    key = {session_key: 'a1323jklkjkldfasj2'};
    $.get('/quizzes/1/questions/next.json',key,function(data){

      this.printOutQuestion(data.question.question)
    })
  }
}

///////////////////////////////////////////
Controller = function(view,model){
  this.view = view
  this.model = model
  this.bindEventListeners();
}

Controller.prototype = {
  printQuizzes: function() {
    var self = this;
    this.model.retrieveQuizzes(function(data) {
      self.view.printOutQuizzes(data)
    })
  },

  bindEventListeners: function() {
    $('body').on('click', 'a', this.view.displayQuestions);
  }
}


////////////////////////////////////////////
Model = function(){

}

Model.prototype = {
  retrieveQuizzes: function(callback){
    var self = this;
    $.get('/quizzes.json',function(data){
      callback(data);
    })
  }
}

$(document).ready(function(){
  var initialize = new Initialize()
});