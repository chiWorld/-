'use strict';

/**
 * Object-oriented programming
 * class    : template
 * object   : instance of a class
 * 
 * JavaScript classes
 *  - introducted in ES6
 *  - syntactical sugar over 'prototype-based inheritance'
 */

//1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name, ' / ', ellie.age);
ellie.speak();


//2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        //this.age = value; //Maximum call stack size exceeded
        this._age = value < 0 ? 0 : value;  //Rename and the error goes away!
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(`user1의 나이 : ${user1.age}`);


//3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0;  //클래스 외부에서는 읽는것, 변경 모두 안됨. 바벨로만 지원가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);   //undefined


//4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';

    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
console.log(article1.publisher);    //undefined
console.log(Article.publisher);     //Dream Coding
Article.printPublisher();           //Dream Coding


//5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }

}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('삼각형');
    }

    getArea() {//overiding
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();   //drawing blue color of
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();    //drawing red color of
console.log(triangle.getArea());


//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);    //true
console.log(triangle instanceof Rectangle);     //false
console.log(triangle instanceof Triangle);      //true
console.log(triangle instanceof Shape);         //true
console.log(triangle instanceof Object);        //true
console.log(triangle.toString());               //Triangle: color: red

