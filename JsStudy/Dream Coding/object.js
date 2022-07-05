/**
 * Objects
 * one of the JavaScript's data types.
 * a collection of related data and/or functionality.
 * Nearly all objects in JavaScript are instances of Object
 * object = {key : value};
 */

//  1. Literals and properties

// const name = 'ellie';
// const age = 4;
// print(name, age);

const obj1 = {};            //'object literal' syntax
const obj2 = new Object();  //'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

//자바스크립트는 동적으로 타입이 런타임때 결정되기 때문에 뒤늦게 프로퍼티 추가 가능
//동적으로 추가하면 유지보수 힘듬.
//with JavaScript magic (dynamically typed language)
//can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);  //true

//can delete properties later
delete ellie.hasJob;        //삭제도 가능
console.log(ellie.hasJob);  //undefined


//  2. Computed properties
//  key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');


//  3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);


//  4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    //return { name, age, }; //property value short
    //return this;
}


//  5. in operator: property existence check (key in obj) - 키가 있는지 없는지 확인함
console.log('name' in ellie);   //true
console.log('random' in ellie); //false
console.log(ellie.random);      //undefined


//  6. for..in vs for..of
//  for (key in obj)
console.clear();

for (key in ellie) {
    console.log(key);
}

//  for (value of iterable)
const array = [1, 2, 4, 5];

for (value of array) {
    console.log(value);
}


//  7. Fun cloning
//  Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);   //blue
console.log(mixed.size);    //big



