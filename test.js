// Implement a “type-ahead” function that gives a 300 millisecond buffer
// between key presses before sending an AJAX call to the server. 
// For example, typing in “c” then ”a” then ”t” very quickly will result in 
// sending one AJAX call with the value “cat” instead of sending three separate calls.


var inputField = document.getElementById('input-field');
// test code to show what it's like...
// inputField.onkeyup = function() {
//     console.log('hi mom');
// }


function typeAheadFunction () {
	var someAjaxCall = function (value) {
    console.log(value);
  }

  //finish the function here
};