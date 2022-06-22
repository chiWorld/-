/*
    자주 사용되는 이벤트
    load        HTML, CSS가 모두 로드 완료되었을 때 발생
    keydown, keyup  키를 누를 때, 키에서 손을 땠을 때 발생
    change      변동이 있을 때 발생
    click       클릭했을 때 발생
    focus       포커스를 얻을 때 발생
*/

/*
    이벤트 등록 법
    1. 프로퍼티로 등록하는 방법
    2. 메소드에 이벤트 리스너를 전달하는 방법
*/
const showBtn = document.getElementById("btn");

//eventHandler()라고 저장하면 함수를 바로 실행시켜버림
showBtn.addEventListener("click", eventHandler);

//인수로 event object를 전달받으며, 식별자를 통해 전달받은 이벤트 객체를 참조함
function eventHandler(event) {
    console.log(event.target);
    document.getElementById("text").innerHTML = "이 이벤트의 타입은 " + event.type + "입니다.";
}