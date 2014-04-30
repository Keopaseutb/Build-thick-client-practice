// alert('this works')
$(document).ready(function(){
		$.get( '/quizzes.json',function(data) {
		 console.log(data['quizzes'][0])
          
          // stored the html quiz template in a variable
          var template = Handlebars.compile( $('#quizz').html());
           
          // adds the JSON data to the template
          var templateWithData = template(data['quizzes'][0])
          console.log(templateWithData)
        
          // appends the template
           $(document.body).append( templateWithData)

		}  )
	});

