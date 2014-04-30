function Client(method, action){
  this.method = method
  this.action = action
}

Client.prototype = {
  request: function(){
    var response = $.ajax({
      type: this.method,
      url: this.action
    })
    return response
  }
}












