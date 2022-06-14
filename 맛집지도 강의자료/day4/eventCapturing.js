/**
 * 캡쳐링 전파 방식
 *  - 이벤트가 발생한 요소까지 DOM트리의 최상위부터 아래쪽으로 내려가면 전파되는 방식
 *  - 맨 먼저 Window객체의 리스너 실행 > Document 객체 리스너 실행 > 자식 요소 리스너 실행
 *  - addEventListner() 메소드의 세 번째 인수에 true를 전달하면 사용가능
 *  - 실제 이벤트의 대상이 되는 요소에 이벤트가 전달되기 전에 상위 요소에 등록된
 *    이벤트 리스너가 이를 가로채거나 잡아낼 수 있음
 * 
 * 
 * 이벤트 취소 기법
 *  - 이벤트를 걸러내어 해당 이벤트 리스너가 호출되지 않도록 하는 기법
 */

const div = document.getElementById("container");
const input = document.getElementById("input-tag");
const button = document.getElementById("button-tag");

div.addEventListener(
    "click",
    function (event) {
        console.log("div에서 클릭이벤트 감지");
    },
    true
);
input.addEventListener(
    "click",
    function (event) {
        console.log("input에서 클릭이벤트 감지");
    },
    true
);
button.addEventListener(
    "click",
    function (event) {
        console.log("button에서 클릭이벤트 감지");
    },
    true
);