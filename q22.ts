//q24:
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array


let car: string= 'subaru';
let age:number=28;
let numbers:number[]=[1,2,3,4.5];

// string test

//test 1 :equality
console.log("Is car=='subaru'? I predict True");
console.log(car=='subaru');
//test 2: strict equality
console.log("Is car==='toyota'? I predict False");
console.log(car==='toyota');
//test 3:inequality
console.log("Is car != 'subaru'? I predict True.");
console.log(car!='toyota');
//test 4: strict inequality
console.log("Is car!=='subaru'? I predict False");
console.log(car!=='subaru');
//lower case function
// test 5
console.log("Is car.toLowerCase()=='subaru'? I predict True");
console.log(car.toLowerCase()=='subaru');
//test 6
console.log("car.toLowerCase()!=='subaru'? I predict False.");
console.log(car.toLowerCase()!=='subaru');
//numeric test
//test 7
//equality
console.log("Is age==28? I predict True");
console.log(age==28);
//test 8 //inequality
console.log("Is age !==30? I predict False");
console.log(age!==28);
//test 9 //greater than
console.log("Is age > 30? I predict False");
console.log(age > 30);
//test 10 //smaller than
console.log("Is age <= 28? I predict True");
console.log(age<=28);
// logical operator
//test 11
console.log("Is age > 20 && age < 30 ? I predict True");
console.log(age > 20 && age < 30);
//test 12
console.log("Is age > 30 || age < 28 ? I predict False");
console.log(age > 30 || age < 28);
//array test
//test 13
console.log("Is 3 in numbers? I predict True");
console.log( 3 in numbers );
//test 14
console.log("Is 8 in numbers? I predict False");
console.log(8 in numbers);

