/**
 * 동기(syncronous)
 *     - 코드 한줄, 한줄 실행이 끝난 뒤 다음 코드로 넘어가는 처리방식
 * 비동기(asyncronous)
 *     - 코드 실행 후, 완료 여부와 관계없이 다음 코드로 넘어가는 처리방식
 */

//비동기 동작 예시
// 2와 3이 동시에 등장함. 2번 돌리고 끝날 때 까지 기다리지 않고 3번을 돌리기 때문에.

//1
console.log('1등!');

//2
setTimeout(() => { 
    console.log('2등!');
}, 2000);

//3
setTimeout(function () {
    console.log('3등!'); 
}, 2000);


/** 
 * JS비동기 처리
 * - 콜백함수
 * - promise 객체
 * - async, await
 */


//콜백지옥,, 동기적으로 처리하기 위해 콜백 함수 안에 또 콜백 함수를 호출함
setTimeout(function () { 
    console.log("1등!");
    setTimeout(function () { 
        console.log("2등!");
        setTimeout(function () { 
            console.log("3등!");
        }, 2000);
    }, 2000);
}, 2000);


/**
 * Promise 상태값
 *  - 대기(pending)     promise 객체를 새로 생성한 상태 대기
 *  - 이행(fulfiled)    resolve가 실행된 상태. 비동기 로직이 완료된 상태
 *  - 거부(rejected)    reject가 실행된 상태. 비동기 로직에서 에러가 난 경우
 */
const hi = new Promise((resolve, reject) => {
    resolve("good");    //이행상태 > promise객체의 then()메서드 호출
    //reject("fail");   //거부상태 > promise객체의 catch()메서드 호출
});

hi.then(
    (res) => console.log(res)
).catch(
    (err) => console.log(err)
);

const helloPromise = new Promise((resolve, reject) => {
    // 생성 자체는 pending
    let isSuccess = true;  //false;

    if (!isSuccess) {
        reject(false); // catch 호출
        return;
    }

    console.log("1등");
    setTimeout(() => {
        resolve(); // 2초 후 then 호출
    }, 2000);
});

helloPromise
    .then((res) => {
        console.log("2등");
        return new Promise((resolve, reject) => {
            setTimeout(() =>
                resolve(), //2초 후 resolve > 2번째 then 호출
            2000);
        });
    })
    .then((res) => {
        console.log("3등");
    })
    .catch((err) => {
        console.log(err); //false가 찍힘
    });


/**
 * async, await 
 *  - 사람이 읽기 쉽다는 장점이 있음
 * 
 *  async function 함수명() {
 *      await 비동기처리함수();
 *  }
 */
// async function asyncFunction() {
//     console.log(1);
//     const result = await getResult(); //2초 뒤에 2라는 값이 전달됨
//     console.log(result);
// }

// function getResult() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2);
//         }, 2000);
//     });
// }

// asyncFunction();

async function asyncFunction() {
    console.log("1등");
    await second();
    await third();
}

function second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2등");
            resolve();
        }, 2000);
    });
}

function third() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3등");
            resolve();
        }, 2000);
    });
}

asyncFunction();


//try-catch문
// async function asyncFunction() {
//     try {
//         console.log(1);
//         const result = await getResult();
//         console.log(result);
//         console.log(3);
//     } catch (err) {
//         console.log(err);
//     }
// }

// function getResult() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("에러발생 예시"));
//         }, 500);
//     });
// }

// asyncFunction();