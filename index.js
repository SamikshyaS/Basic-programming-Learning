//console.log('hello world');
//declare the variable if,else,var reserved keywords
//Are case-senitive
//let name = 'Sam';
//console.log(name);
//let firstName = 'Sam';
//let lastName = 'Shrestha';

//let interestRate = 0.3;
//interestRate = 1;
//console.log(interestRate);



//Valuetypes-string,num,boolean,undefine, null
let name = 'Sam'; //stringho
let age = 27; //Number define gareko
let isApproved = true; //Booleanvalue
let firstName = undefined;
let setColor = null;


//Dynamic Typing//typeofherna milcha from console
//object mathi code object ma halni 
let person = {
    name: 'Sam',
    age: 27
};
//This is how we change the value with dot notation
person.name = 'Sammy';

//aba let's change the value with bracket notation
person['age'] = 30;
console.log(person);

//now let's change the name


//aba arrays re hai when to use: when we have list of items like color or objects
let selectedColors = ['blue', 'red'];
selectedColors[2] = 'green';
console.log(selectedColors.length);


//function hai

function greet(name) {
    console.log('Hello' + name);
}
greet('Sammy');