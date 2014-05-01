//client side templating. Handlebars and mustaches
Initialize = function(){
  view = new View()
  model = new Model()
  controller = new Controller(view, model)
  controller.printQuizzes()
  $('body').on('click',a,)
}



////////////////////////////////////////
View = function(){
}

View.prototype = {
  printOutQuizzes: function(data) {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    var context = data

    $('#quizzes_list').html(template(context))
    // var html = template(context);
    // $('.content-placeholder').html(template({quizzes: [
    //   {quiz_id: "1", name: "Fake Quiz 1"}]}));
  },

  displayQuestions: function(Quizzes){
    console.log(Quizzes)
  }
}
///////////////////////////////////////////
Controller = function(view,model){
  this.view = view
  this.model = model

}


Controller.prototype = {
  printQuizzes: function() {
    var self = this;
    this.model.retrieveQuizzes(function(data) {
      self.view.printOutQuizzes(data)
    })
  },
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
})