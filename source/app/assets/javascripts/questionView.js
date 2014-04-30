function questionView(viewOpts) {
  this.source = viewOpts['source'];
  this.addContent = viewOpts['addContent'];

}

questionView.prototype = {
  draw: function(data){
    var template = Handlebars.compile(this.getSource());
    $(this.addContent).html(template(data));
  },

  getSource: function(){
    return $(this.source).html();
  },

}