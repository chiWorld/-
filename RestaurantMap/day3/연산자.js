console.log(1 % 3); //1

// === 데이터의 자료형까지 비교하는 비교연산자
console.log(1 === 1);   //true
console.log(1 === "1"); //false

// == 데이터타입 상관없이 값만 비교함
console.log(1 == 1);    //true
console.log(1 == "1");  //true

//논리연산자
let option1 = 10 > 1    //true
let option2 = 2 == 3;   //false

console.log(option1 || option2);    //true
console.log(option1 && option2);    //false
console.log(!option1);              //false

//적정체중 계산 코딩
let height = 160
let properWeight = (height - 100) * 0.9;
console.log('당신의 키는 ', height, 'cm이며 적정체중은 ', properWeight, 'kg입니다.');
console.log(`당신의 키는 ${height}cm이며 적정체중은 ${properWeight}kg입니다.`);