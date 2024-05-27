"use strict";
//q42:
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = 'The great   ' + magician[i];
    }
}
const magician = ["david blaine", "derren brown", "david copper field"];
make_great(magician);
console.log(magician);
