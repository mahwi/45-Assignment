"use strict";
//q27:
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate colour alien
//version 1
let alien_colour2 = "green";
if (alien_colour2 == "green") {
    console.log("the player just earned 5 points.");
}
else if (alien_colour2 == "yellow") {
    console.log("the player just earned 10 points");
}
else if (alien_colour2 == "red") {
    console.log("the player just earned 15 points");
}
else {
    console.log("please select right colour");
}
//version 2
let alien_colour3 = "yellow";
if (alien_colour3 == "yellow") {
    console.log("the player just earned 10 points");
}
else
    (console.log("the player just earned 5 points"));
//version 3
alien_colour3 = "red";
if (alien_colour3 == "red") {
    console.log("the player just earned 15 points");
}
else {
    console.log("please select right colour");
}
;
