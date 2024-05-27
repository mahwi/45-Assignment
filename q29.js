"use strict";
//q31:
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
//• Remove all of the usernames from your array, and make sure the correct message is printed
let users = ["mona", "bina", "hani", "sony", "admin"];
if (users.length === 0) {
    console.log("we need to find some users!");
}
//remove all the user name from your array
else {
    users = [];
    console.log("all user have been removed " + users.length);
}
