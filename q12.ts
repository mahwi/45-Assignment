//q 14:
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestlist:string[]= ["Ali","Umer","Aimal","Wasil"];
//for each
guestlist.forEach(guests => {
    console.log(`Dear ${guests},you are codially invited to dinner`);
});    