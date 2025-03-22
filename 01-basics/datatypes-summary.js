//  Primitive

//  7 Types: Strings, Numbers, Boolean, Null, Undefined, Symmbols, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;



const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = 123456789123456789n

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "saad",
    age: 22,
}



const myFunction = function(){
    console.log("Hello world");
    
}


console.log(typeof bigNumber);
console.log( typeof outsideTemp);

console.log(typeof myFunction);
console.log(typeof heros);



//  Reference (Non Primitive)

//  Array's , Objects, Functions