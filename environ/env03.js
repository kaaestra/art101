
// new line tp add
$("#wakeup").click(function() {

 $("#wakeup").html("Sleep!");
 
});

// declaring an object with name SleepyCat
let SleepyCat= {
    name: "Pusheen",
    ears: 2, 
    color: "grey",
    isDreaming: true,
}; 

// declaring an object with name CuddlingPusheen
let CuddlingPusheen = {
    type: "Cat",
    eyes: "open", 
    hasTeddyBear: true,
};

let megaSentence;

megaSentence = "<p>Press the button to wake up ";
$("#output").html(megaSentence); 