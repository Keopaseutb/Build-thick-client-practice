function Client(method, action){
  this.method = method
  this.action = action
}

Client.prototype = {
  request: function(sessionKey){
    var response = $.ajax({
      type: this.method,
      url: this.action,
      data: { session_key: sessionKey }//data.serialize()
    })
    return response
  }
}

function User(){}
User.prototype = {
  generateKey: function(){
    var key = ''
    for(var i = 0; i < 10; i++){
      key += Math.floor((Math.random() * 10) + 1)
    }
    return key
  }
}














