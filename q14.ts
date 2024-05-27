//q 16:
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestlists:string[]=["Ali","Mahwish","Sajjad","Umer"];

console.log("Great news! we found a bigger table");

 //un shift()
 guestlists.unshift("waqas");
//splice()
guestlists.splice(Math.floor(guestlists.length/2),0, "Hammad");
//push()

guestlists.push("Wasil");
console.log(guestlists);
//for each
guestlists.forEach(function (guest) {
    console.log(`Dear ${guest}, you all are cordially invited to dinner`);
});