let userInput = $('#inputBox');
let output = $(".output");
// console.log(userInput)
function reversal(testString) {
  testString = userInput.val().toLowerCase().split("").reverse().join("");
  output.append('<div>' + testString + '</div>');
  console.log('Reverse', testString);
}

function alphabits(testString) {
  testString = userInput.val().toLowerCase().split("").sort().join("");
  output.append('<div>' + testString + '</div>');
  console.log("ABC", testString);
}

function palindrome(testString) {
  testString = userInput.val().toLowerCase().split("").reverse().join("");
  if (userInput.val().toLowerCase() === testString) {
    output.append('<div>' + 'Your string is a palidrome!!' + '</div>')
  } else {
    output.append('<div>' + 'Your string is NOT a palidrome!!' + '</div>')
  }
}

var testString = "";
$('#submitBtn').click(function() {
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
});
userInput.keypress(function(event){
  if(event.keyCode === 13){
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
  }
});
