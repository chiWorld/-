'use strict';
/**
 * Function
 *  - fundamental building block in the program
 *  - subprogram can be used multiple times
 *  - performs a task or calculates a value
 */

/**
 *  1. Function declaration
 *      function name(param1, param2) { body ... return; }
 *      on function === one thing
 *      nameing : doSomething, command, verb
 *      ex. createCardAndPoint -> createCard, createPoint
 *      function is object in JS
 */
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);


/**
 *  2. Parameters
 *      premitive parameters: passed by value
 *      object parameters: passed by reference
 */
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name: 'ellie' };
changeName(ellie);  //ellie change coder
console.log(ellie);


/**
 *  3. Default parameters (added in ES6)
 */
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi~'); //Hi! by unknown

/**
 *  4. Rest parameters (added in ES6)
 */
function printAll(...args) { //type of Array
    //for (let i = 0; i < args.length; i++) {   console.log(args[i]);   }
    //for (const arg of args) { console.log(arg); }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

/**
 *  5. Local scope
 */
let globalMessage = 'global';   //global variable

function printMessage() {
    let messager = 'hello';
    console.log(messager);   //local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}

printMessage();


/**
 *  6. Return a value
 */
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);


/**
 *  7. Early return, early exit
 */

//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade login...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}


/**
 *  First-class function
 *  functions are treated like any other variable
 *  can be assigned as a value to variable
 *  can be passed as an argument to other function.
 *  can be returned by another function
 */

//  1. Function expression
//  a function declaration can be called earlier than it is defiend. (hoisted)
//  a function expression is created when the execution reaches it.
const print = function () { //anonymous function
    console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


//  2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    //print();  //error. Miximum call stack size exceeded!
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


//Arrow function
//always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add1 = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};


//IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();


// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    let result = "";
    
    switch (command) {
        case "add" :
            result = a + b;
            break;
        case "substract" :
            result = a - b;
            break;
        case "divide" :
            result = a / b;
            break;
        case "multiply" :
            result = a * b;
            break;
        case "remainder" :
            result = a % b;
            break;
        default:
            throw Error('Boom!!');
    }
    return result;
}

console.log(`calcaulate a + b = ${calculate("add", 4, 3)}`);
console.log(`calcaulate a - b = ${calculate("substract", 5, 3)}`);
console.log(`calcaulate a 3 b = ${calculate(3, 5, 3)}`);