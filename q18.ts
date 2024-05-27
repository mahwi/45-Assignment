//q 20:
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let countries: string[] = ["Canada","Room","Germony","Usa","China"]
console.log("list of countries:");

//print list of countries
console.log(countries.forEach(country =>{
    console.log(country);
}));