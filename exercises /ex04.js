
let totalNumber = 0;

// add a button titled click me 

$("#needy-button").click( function() {

totalNumber = totalNumber + 1;

let sentence = "I was clicked"; 
let totalNumbers= sentence + totalNumber; 

$("#needy-button").html(totalNumber);

});

// when it is clicked 
// add one to the total number

// show the total number 
// on our button
// show "click total number times"

// a top limit 