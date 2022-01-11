
// var 
console.log('~~~~~ var ~~~~~');

var someThing; // assigned as "undefined"
console.log(someThing);
var someThing = 5;
console.log(someThing);
someThing = "Bob";
console.log(someThing);

// let
console.log('~~~~~ let ~~~~~');

let price; // assigned as "undefined"
console.log(price);
price = 10.00;
console.log(price);
price = 40.00;
console.log(price);

// const
console.log('~~~~~ const ~~~~~');

// const must be assigned a value and cannot be changed
const constantValue = 10;
console.log(constantValue);

console.log();

// template literals // back tics
console.log(`This variable is: ${constantValue}`);

// get varable type
console.log('The type of constantValue is "' + typeof constantValue + '"');

