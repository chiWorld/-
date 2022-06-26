/*
    HTML 요소 선택 방법
    - document.querySelector(선택자)    
            - 해당 선택자로 선택되는 요소를 선택함
    - document.querySelectorAll(선택자) 
            - 해당 선택자로 선택되는 요소를 모두 선택함 (배열)
    - document.getElementsByTagName(태그이름) 
            - 해당 태그 이름의 요소를 모두 선택함 (배열)
    - document.getElementById(아이디)   
            - 해당 아이디의 요소를 선택함
    - document.getElementsByClassName(클래스이름)   
            - 해당 클래스에 속한 요소를 모두 선택함 (배열)
*/

// 엘리먼트 선택 예제
	// console.log(document.querySelector("div.welcome"));
    // console.log(document.querySelectorAll("div"));      //NodeList(3)
    // console.log(document.getElementsByTagName("div"));  //HTMLCollection
    // console.log(document.getElementById("hi"));
    // console.log(document.getElementsByClassName("welcome")); //HTMLCollection


// HTML 요소 Read, Update를 위한 속성
    // const divTag = document.querySelector("div");
    // console.log(divTag);
    // divTag.style.color = "red";

//중간실습
    // document.querySelector("div").innerHTML = "안녕하세요";
    // document.querySelector("div").style.fontSize = "30px";

    // const divTag = document.querySelector("div");
    // divTag.innerHTML = "안녕하세요.";
    // divTag.style.fontSize = "30px";


/*
    innerText vs innerHTML = 속성값을 모두 텍스트로 인식 vs 속성값을 모두 HTML로 인식
    ex) divTag.innerText = "<h1>안녕하세요.</h1>"; // <h1>안녕하세요.</h1>
    ex) divTag.innerHTML = "<h1>안녕하세요.</h1>"; // 안녕하세요.
*/


/*
    중첩된 태그에서 선택
    parentElement   부모태그
    children        자식 태그 리스트
    nextElementSibling  인접 형제 태그
*/
    //const container = document.querySelector(".container");
    // console.log(container);
    // console.log(container.parentElement);   //부모 태그 > body태그
    // console.log(container.children);        //자식 태그 > HTMLCollection(2)
    // console.log(container.nextElementSibling);  //형제 태그 > script태그

//중간실습
    //console.log(container.children[1].children[1]);


/*
    태그 추가
    document.createElement()    태그 만들기
    document.createTextNode()   text 노드 만들기
    element.appendChild()       자식 노드 추가하기
    element.setAttribute(attribute, value)  요소에 속성 추가하기
*/

// div.inner를 선택
    // let inner = document.querySelector(".inner");
// <div>태그 생성
    // let element = document.createElement("div");
// text 노드 hello 생성
    // let hello = document.createTextNode("hello");
// <div>hello</div>로 만들기
    // element.appendChild(hello);
// div.inner에 element 추가
    // inner.appendChild(element);

    
//ES6 템플릿 리터럴
    // const productsData = { title: "감자칩", weight: 300 };

    // const app = document.querySelector("div#app");

    // app.innerHTML =`<div class="item">상품명: ${productsData.title}, 무게 ${productsData.weight}g</div>`;


//중간 실습
const productsData = [
    { title: "감자칩", weight: 300 },
    { title: "칙촉", weight: 100 },
    { title: "고구마칩", weight: 300 },
    { title: "오잉", weight: 50},
];

const app = document.querySelector("div#app");

let result = "";

for (data of productsData) {
    result +=
        `<div class="item">상품명: ${productsData.title},
        무게 ${productsData.weight}g</div>`;
}

app.innerHTML = result;
