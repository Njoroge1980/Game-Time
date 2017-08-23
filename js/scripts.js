//back-end logic
//create a range of numbers using the user input and replace the multples anf 3 and 5 with ping and pong respectively
function range(userInput){
  var rangeArray= []
  for(var n=1; n<=userInput; n++)  {
     console.log(n);
     if ((n % 3 === 0) && (n % 5 === 0)){
       rangeArray.push("pingpong")
     }else if (n % 3 === 0) {
       rangeArray.push("ping")

     }else if (n % 5 === 0) {
       rangeArray.push("pong")

     }else {
       rangeArray.push(n)
     }
  }
  console.log(rangeArray);
  return rangeArray
}




//front-end logic
$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();

    var  userInput= parseInt($("input#entry").val());
    console.log(userInput);
//save our range of number into a variable
    var results = range(userInput)
//display the array as a list
    results.forEach(function(result){
      $("#outputlist").append("<li>" + result +"</li>")
    })

  });
});
