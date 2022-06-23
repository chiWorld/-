/**
 * boolean값들 비교
 */
console.log(NaN == NaN); //false. NaN은 비교 연산에서 false를 출력함.
console.log(NaN >= NaN); //false
console.log(NaN <= NaN); //false
console.log(NaN != NaN); //true
console.log('abc' < 5);  //false abc가 숫자로 바꾸면 NaN이라서. NaN은 비교연산에서 false출력

console.log(true > false);  //true

console.log('b' > 'a');     //true
console.log('a'.charCodeAt());  //97
console.log('b'.charCodeAt());  //98

console.log('&'.charCodeAt());  //65276

console.log('3' < 5);   //3이 숫자로 형변환되서 true

console.log(0 < true); //true. true는 1이라서


/**
 *  === : 자료형까지 비교함
 *  ==  : 값만 비교함
 */
console.log(1 === '1'); //false
console.log(1 == '1');  //true


/**
 * 대부분 값은 boolean값으로 형변환했을 때 true가 됨.
 */
console.log(!!'a'); //true

/**
 * boolean값으로 형변환했을 때 false가 되는 값
 *  - false, '', 0, NaN, undefined, null
 */
console.log(!!false);   //false
console.log(!!'');      //false
console.log(!!0);       //false
console.log(!!NaN);     //false


/**
 * 빈 값 
 *  - undefined, null
 */
console.log(typeof null); //object. 버그임,,, 
