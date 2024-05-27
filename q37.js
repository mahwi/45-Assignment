"use strict";
//q39:
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
Object.defineProperty(exports, "__esModule", { value: true });
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
let c1 = cityCountry('Lahore', 'Pakistan');
let c2 = cityCountry('Newyork', 'America');
let c3 = cityCountry('tokyo', 'Japan');
console.log(c1);
console.log(c2);
console.log(c3);
