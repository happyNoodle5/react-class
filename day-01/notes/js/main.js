console.log("Hellow world!");

// run `node {file path}` to run JS in the terminal

// const vs. let

// arrow functions
const bark = function () {console.log('woof woof');};
bark();

const bark2 = () => {console.log('woof woof');};
bark2();
// ! downside is that keyword `this` doesn't exist in arrow functions

// arrow function w/ argument
const bark3 = (name) => {console.log(name + 'gos woof woof')};
bark3("Spot");

// functions using `this` keyword:
const person = {
    name: "John",
    talk: function () {
        console.log(this.name);
    }
}
person.talk();
// `this` points to the global context outside the function object

// TEMPLATE LITERALS - a way to construct strings
const firstName = "Myriah";
const favoriteColor = "purple";
console.log(firstName + "'s favorite color is " favoriteColor);
// to do ^ in a template:
console.log(`${firstName}'s favorite color is ${favoriteColor}`);
// content doesn't just have to be a variable, it can be ANY expression (any data type or combination of data types, functions, etc)

// OBJECT DESTRUCTING
const animal = {
    species: "bear",
    age: 15,
    color: "brown",
    height: 17.0,
    movement: () => console.log('move');
}
console.log(animal.species);
// get pieces of info from an object that can be reused in the specific piece of code you're in !!! using dot notation for deeply nested objects can cause the program to crash since it's processing so much info
const {species, age, weight } = animal;
console.log(age);

// ARRAY DESTRUCTING
const colors = [
    "red", "green", "blue", "purple"
];
const [ yo, foo, bar] = colors;
console.log(yo);
// same as object, but order of fetching aligns with the array index

// DEFAULT FUNCTION PARAMS
function greet (name) {
    console.log(`hello, there ${name}`);
};
greet(Myriah);
// but what if they don't provide an argument? instead of return undefined, it will return whatever you define as the default
function greet2 (name = "visitor") {
    console.log(`hello, there ${name}`);
};
greet2();


const newPerson = {
    name: "daniel",
    age: 3,
    hometown: "Fresno"
}
// If you know the parameters of the object you'll be receiving, you can just destruct the object where the arguments are defined
function greet({ name, age }) {
    console.log(name);
}
// arrays can be destructed in the same way

// POINTERS?
// primitive data types:
let x = 8;
let y = x;

x = 222;

console.log(x, y);

// objects + arrays get passed by reference, so the value will be updated
let OGcolors = [ "red", "green", "blue"];
let copyColors = OGcolors;
console.log(OGcolors);
console.log(copyColors);

colors.push('yo');
console.log(OGcolors);
console.log(copyColors);

let copy2Colors = [...colors];
// this assigns the value by copying what is currently there instead of referencing, so copy2Colors will remain [ "red", "green", "blue" ], even if OGcolors gets updated

// !!! the same can be done with objects, but it will only copy one level in, you would need some kind of function

// CLASSES
// JS uses prototype inheritance and prototype chains
// syntactic sugar ?

// old way
// function Animal(species) {
//     this.species = species;
// };
// Animal.prototype.move = function() {
//     console.log(this.species + "is moving");
// };
// const bear = new.animal("polar bear");
// bear.move();

// new way to do classes (called syntactic sugar)
class Animal {
    constructor(species) {
        this.species = species;
    }

    move() {
        console.log(this.species + " is moving");
    }
};

const bear = new.animal("polar bear");
bear.move();

// all classes will have a constructor function that will run when `new` is invoked


// 
// 
// ARRAY PROTOTYPE METHODS?
// 
// 
// *** be careful of some methods that mutate arrays instead of returning a new array
// 
// 
// 

// FILTER
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// returns the values in the array that meets the conditions of the function

// MAP
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// goes through an array with each value as the argument for some function, and returns with true ONLY if each value meets the conditions of the function


// for each
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// join - converts an array into a string (default deliminator is a comma unless you provide another delim as an argument)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


// INHERITANCE

class human extends Animal {

}
const human = new human("John");

class human2 extends Animal {
    talk() {
        console.log(this.species +" is talking");
    }
};
const human2 = new human2("Meg");
human.talk();
human.move();

// human and human2 inherit all the stuff from Animal, but Animal cannot access anything from human or human2

// promises + asynch/await
// PROMISES structure is non-linear but grants more control
// ANYCH / AWAIT is much easier to read (top-down)
