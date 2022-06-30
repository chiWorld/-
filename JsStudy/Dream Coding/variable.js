/**
 * 1. Use strict
 * added in ES 5
 * use this for Valina Javascript.
 */
'use strict';


/**
 * 2. Variable, rw(read/write memory)
 * let (added in ES6) - Mutable (변경 가능한 값)
 */

let globalName = 'global name';
{//Block scope
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var(don't ever use this!)
//var hoisting (move declaration from bottom to top)
//has no block scope
console.log(age); //var은 값을 선언하기 전에 쓸 수 있음 
                //  = 호이스팅 = 어디에 선언했는지 상관없이 제일 위로 끌어올려줌
{
    age = 4;
    var age;
}
console.log(age); //블럭스콥 무시하고 그냥 출력됨


/**
 * 3. Constans, r(read only)
 *  use const whenever possible.
 *  only use let if variable needs to change.
 */
const daysInWeek = 7;
const maxNumber = 5;

/**
 * Note!
 * Immutable data types : premitive types, frozen objects (i.e. object.freeze())
 * 
 * Mutable data types   : all 'objects' by default are mutable in JS
 * 
 * favor immutable data type always for a few reasons;
 * - security : 해킹들이 값을 변경할 수 없음
 * - thread safety : 프로세스 안에 많은 스레드가 동시에 변수에 접근해서 값을 변경하는 것을 방지
 * - reduce human mistakes
 */

/**
 * 4. Variable types
 *  primitive, single item: number, string, boolean, null, undefined, symbol
 *  object, box container
 *  function, first-class function(함수도 변수에 할당 가능)
 */
const count = 17;   //integer
const size = 17.1;  //decimal number
console.log(`value: ${count}, type: ${typeof count}`);  //type: number
console.log(`value: ${size}, type: ${typeof size}`);    //type: number

//number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;           
const negativeInfinity = -1 / 0;   
const nAn = 'not a number' / 2;   
console.log(infinity);          //Infinity
console.log(negativeInfinity);  //-Infinity
console.log(nAn);               //NaN

//bigInt (fairly new, don't use it yet) 이런게 추가됨
const bigInt = 123456789012345678901234567890n; //over(-2**53) ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${brendan}!`;  //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined - 선언은 되어 있지만 값이 있는지 없는지 모름
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false. 주어진 string과 상관없이 고유한 식별자 만들때 쓰임

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);

//object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
console.log(`나의 이름은 ${ellie.name}입니다.`);


/**
 * 5. Dynamic typing: dynamically typed language
 *  - 변수를 선언할 때 타입을 선언하지 않고, runtime 동작할 때 타입이 변경될 수 있음 
 */
let text = 'hello';
console.log(text.charAt(0));                    //h
console.log(`value: ${text}, type: ${text}`);   //value hello type string
text = 1;
console.log(`value: ${text}, type: ${text}`);   //value 1 type number
text = '7' + 5;
console.log(`value: ${text}, type: ${text}`);   //value 75 type string
text = '8' / '2';
console.log(`value: ${text}, type: ${text}`);   //value 4 type number
console.log(text.charAt(0));                    //TypeError: text. 중간에 숫자로 바뀌어서 에러남