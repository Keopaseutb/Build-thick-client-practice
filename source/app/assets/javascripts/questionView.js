function questionView() {

}

questionView.prototype = {
  draw: function(data){
    console.log(data.quizzes[0].name)
    // debugger
    var source = $("#some-template").html();
    var template = Handlebars.compile(source);
    $('.container').html(template(data))
  }
}