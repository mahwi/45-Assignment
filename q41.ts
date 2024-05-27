//q43:
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]){

    magicians.forEach(name => console.log(name));
}
//function to make magicians great 
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magician_names=["david blaine","derren brown","david copper field"];

//making a copy of original array through slice() function
let copy_magician_names = magician_names.slice()
//modify the coppied array to include "the great"
let copy_great_magicians = make_great(copy_magician_names);

show_magicians(magician_names);

show_magicians(copy_great_magicians);











