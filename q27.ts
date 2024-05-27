//q29:
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favouriteFruits :string[]=["Mango","Banana","Apple" ];

if(favouriteFruits.includes('Mango')){
    console.log('I really like Mango!')
}
if(favouriteFruits.includes('Banana')){
    console.log('I really like Banana')
}
if(favouriteFruits.includes('Apple')){
    console.log('I really like Apple')
}
if(favouriteFruits.includes('grapes')){
    console.log('I really like grapes')
}
if(favouriteFruits.includes('watermelon')){
    console.log('I really like watermelon')
}
