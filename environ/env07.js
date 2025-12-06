// new line tp add
$("#sleep").click(function() {

 $("sleep").html("Wake up!");
 
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

$("sleep").click( function() {
    changeBackground(this.id);

});

//the button part
const myButton = document.getElementById("wakeup");
const myImg = document.getElementById("pusheen"); 

myButton.addEventListener("click", event => {

    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Wake up!";
    }
    else{
    myImg.style.display = "none";
    myButton.textContent = "Sleep!";
    }
})