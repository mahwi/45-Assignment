//q 21:

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let objectContainingItems: {[key:string]: any}= {
    "laptop":{
        name: "laptop",
        price: "8000",
        description: "high performance laptop with fast processer"
    },
    "mouse": {
        name:"mouse",
        price:"5000",
        description:"high perfomance mouse",
    },
    "keyboard":{
        name: "keyboard",
        price: "7000",
        description: "high performance keyboard"

    },
}
console.log(objectContainingItems);
