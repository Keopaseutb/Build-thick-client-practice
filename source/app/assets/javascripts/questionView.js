function quizView(viewOpts) {
  this.source = viewOpts['source'];
  this.addContent = viewOpts['addContent'];

}

quizView.prototype = {
  draw: function(data){
    var template = Handlebars.compile(this.getSource());
    $(this.addContent).html(template(data));
  },

  getSource: function(){
    return $(this.source).html();
  },

}