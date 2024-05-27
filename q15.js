"use strict";
//q 17:
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list Print your list to make sure you actually have an empty list at the end of
//your program
//print message
let guestlists2 = ["Ali", "Mahwish", "Sajjad", "Umer"];
console.log("unfortunately! the new dinner table wont arrive so we cant invited to dinner");
guestlists2.unshift("Mona", "Bina");
//print message updated list
console.log("updated list of guest:", guestlists2);
//remove guests from the list
while (guestlists2.length > 2) {
    let removedGuest = guestlists2.pop();
    if (removedGuest !== undefined) {
        console.log(`sorry,${removedGuest}, we cant invite you`);
    }
}
//print the message each of the two people still on your list, letting them
guestlists2.forEach(guest => {
    console.log(`Dear ${guest}, you both are invited for dinner`);
});
//remove  2 names from the list
guestlists2.splice(0, guestlists2.length);
//print updated empty list
console.log("updated list of guest:", guestlists2);
