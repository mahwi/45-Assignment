"use strict";
//q 18:
//Seeing the World: Think of at least five places in the world you’d like to visit.
Object.defineProperty(exports, "__esModule", { value: true });
//store the location in a array,make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let placetoVisit = ["Newyork", "Italy", "Australia", "Germony"];
//print in original order
console.log("original order:", placetoVisit);
//print array in alphabatical order without modifying the actual list
console.log("Alphabatical order:", placetoVisit.slice().sort());
//show that your array is still in its original order by printing it
console.log("original order:", placetoVisit);
//print your array in reverse alphabatical order without changing the array of orignal list
console.log("reverse order:", placetoVisit.slice().sort().reverse());
//array is still in its original order print it again
console.log("original order:", placetoVisit);
//reverse the order of the list, print the array to show that its order has changed
console.log("reverse order changed");
placetoVisit.reverse();
console.log(placetoVisit);
//reverse the order of the list again,print the list to show its back to its original order
console.log("original order:", placetoVisit.sort());
console.log(placetoVisit);
//sort your array so its storred in reverse alphabatical order,print the array to show that its order has been changed
console.log("reverse alphabatical order changed:", placetoVisit.sort().reverse());
console.log(placetoVisit);
