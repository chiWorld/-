//while문
// let i = 1;

// while (i <= 10) {
//     console.log("안녕");
//     // i = i + 1;
//     i++;
// }

// while (i <= 50) {
//     if (i % 5 == 0) {
//         console.log(`${i}는 5의 배수!`);
//     }
//     i++;
// }

//for문
// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0) {
//         console.log(`${i}는 5의 배수`);
//     }
// }

const arr = [5, 6, 7, 8];

for (let index in arr) {
    console.log(`배열의 index로 뽑으면 : ${arr[index]}`);
}

for (let item of arr) {
    console.log(item);
}

const jsonArr = { email: "dummy", password: "a123" };

for (let key in jsonArr) {
    console.log(jsonArr[key]);
}

//반복문 제어 break, continue
for (let i = 1; i <= 10; i++) {
    if (i >= 5) {
        //break;  //i==5일때 멈춤 1 2 3 4
        continue; //이 반복을 건너뛰고 1 2 3 4 6 7 8 9 10
    }
    console.log(i);
}




