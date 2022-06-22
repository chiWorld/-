/**
 * 백틱
 *  - 특징 : 문자열에서 줄바꿈을 할 수 있음
 */
console.log(`안녕하세요? \n줄바꿈했어요`);

console.log(typeof '문자열'); //string

console.log(typeof `문자열`); //string

console.log('' == ' '); //false

console.log(`'how're you?`);
console.log('how \'re you?');   //how're you?
console.log('how\re you?');     //howe you?
console.log('how\\re you?');    //how\re you?

/**
 * 문자열 더하기
 */
console.log('바나나' + '사과'); //바나나사과
console.log('바나나' - '사과'); //NaN
