/**
 * 0이 많으면 아래와 같이 표현할 수 있음
 */
console.log(50000); //50000
console.log(5e4);   //50000
console.log(0.0005) //0.0005
console.log(5e-4);  //0.0005
console.log(0b111)  //7
console.log(0111);  //73
console.log(0x1a1); //417

/**
 * Nan
 *  - typeof로 하면 숫자
 *  - 하지만 숫자가 아니다?
 */


/**
 * 문자열 > 숫자로 바꾸기
 */
console.log(parseInt('124'));   //124
console.log(number('124') + 5); //129
console.log(typeof parseInt('124')); //number

console.log(parseInt('3.14'));  //3
console.log(parseFloat('3.14'));    //3.14

console.log(parseInt('3월'));   //3
console.log(Number('3월'));     //NaN


/**
 * prompt()
 *  - 값을 입력하는 창이 뜸
 *  - default return은 string
 */
//console.log(typeof parseInt(prompt())); //5

console.log(3 ** 2);    //9
console.log(2 ** 4);    //16

/**
 * Infinity
 *  - '무한'을 뜻함
 *  - 무한한 값끼리 계산할 때는 NaN이 나옴. 무한에서 무한을 빼는 것은 성립하지 않기 때문에
 */

/**
 * +는 문자열 아닌 얘들이 문자열로 형 변환됨
 * - / * % 는 숫자가 아닌 얘들이 숫자로 바뀜
 */
console.log('3월' + 0); //3월0
console.log('3월' - 0); //NaN