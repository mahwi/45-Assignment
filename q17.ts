//q 19:
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

//print message
let guestlists:string[]=["Ali","Mahwish","Sajjad","Umer"];
console.log("Unfortunately! the new dinner table wont arrive in time for the dinner and i have space for only two guest");
while (guestlists.length > 2){
    let removedGuest : string | undefined =guestlists.pop();
    if(removedGuest !== undefined) {
        console.log(`sorry, ${removedGuest}, we cant invite you`);
    }
}
//print a message each of the two people still on your list

guestlists.forEach(guest =>{
    console.log(`Dear ${guest},you both are invited for the dinner`);
});
