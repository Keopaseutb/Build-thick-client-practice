//alert('this works')

var Navigator = {
  init: function(){
    console.log("lala")
  }
}

$(document).ready(function(){
		$.get( '/quizzes.json',function(data) {
		 console.log(data['quizzes'][0])
          
          // stored the html quiz template in a variable
          var template = Handlebars.compile( $('#quiz_template').html());
           
          // adds the JSON data to the template
          var templateWithData = template(data['quizzes'][0])
          console.log(templateWithData)
        
          // appends the template
           $('.quizzes').append(templateWithData)

      Navigator.init()
    } )
    
    $('.quizzes').on('click', 'a', function() {console.log("clicked")})

	});

