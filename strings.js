let userInput = $('#inputBox');
// console.log(userInput)
function reversal(testString) {
  testString = userInput.val().toLowerCase().split("").reverse().join("");
  console.log('Users Input', testString);
}

function alphabits() {
  testString = userInput.val().toLowerCase().split("").reverse().join("");
}

function palindrome() {
  testString = userInput.val().toLowerCase().split("").reverse().join("");
}

var testString = "";
$('#submitBtn').click(function() {
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
});
