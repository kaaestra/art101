// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "some random car", "friends"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Bus",
    route: 18,
    print: "Mountain Lion",
    hasMiddleDoor: true,
    drivers: ["Jessica", "Valeria", "classmate"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[3] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";
$("#output").html(megaSentence); 