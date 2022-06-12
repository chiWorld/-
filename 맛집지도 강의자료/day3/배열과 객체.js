//배열 create
const arr = [1, 2, 3, 4];

//배열 Read
arr[0];
console.log(`배열 Read : ${arr[0]}`);

// 여러 arr 읽기 : arr.slice(시작, 끝); 
// 유의 slice는 마지막 요소 인덱스는 포함하지 않음
console.log(`여러 배열 Read : ${arr.slice(1, 3)}`);

//배열 Update
arr[0] = 100;
console.log(`배열 Update : ${arr}`);

//배열 delete
arr.splice(0, 1);
console.log(`배열 delete : ${arr}`); //[2,3,4];

//------------------------------------------------------
//배열 연습문제
const nameList = ["짱구", "철수"];

//1. 훈이 추가
// const humLeg = nameList.length;
// nameList[humLeg] = "훈이";
nameList.push("훈이");
console.log(`훈이 추가 : ${nameList}`);

//2. 철수 -> 유리
let chulLeg = nameList.findIndex(v => v == '철수');
nameList[chulLeg] = "유리";
console.log(`유리 교체 : ${nameList}`);

//3. 짱구 삭제
let zzangLeg = nameList.findIndex(v => v == '짱구');
nameList.splice(zzangLeg, 1);
console.log(`짱구 삭제 : ${nameList}`);

//------------------------------------------------------
//객체 : key와 value로 이루어진 자료형

//객체 create
let userInfo = {
    email: "dummy@dummy.com",
    password: "a1234"
}

//객체 read
console.log("객체 read : ", userInfo.email, " / ", userInfo["email"]);

//객체 update
userInfo.email = "updated";
console.log(userInfo.email);

//객체 delete
delete userInfo.email;
console.log(userInfo);
