// var, let, const

var num = 1;

var num = 10;

console.log(num);


//let vs const = 재선언이 가능 vs 불가능
//재할당 : 이미 선언된 벼눗에 새로운 값을 할당
//재선언 : 이미 선언된 변수를 다시 선언

let num2 = 2;
num2 = 20;

const num3 = 3;
//num3 = 30; //Assignment to constant variable -> const에 재할당을 할 수 없다.

//문자형 자료 선언
let string = "안녕";

//논리형 자료
let bool = true;
let t = 100 > 10;
console.log(t); //true

