/**
    자주 사용되는 이벤트
        load    HTML, CSS가 모두 로드 완료되었을 때 발생
        keydown 
        keyup   키를 누를 때, 키에서 손을 땠을 때 발생
        change  변동이 있을 때 발생
        click   클릭했을 때 발생
        focus   포커스를 얻을 때 발생

    이벤트 등록 법
        1. 프로퍼티로 등록하는 방법
            <p onclick="alert('문자열을 클릭했어요!')">이 문자열을 클릭해보세요!</p>

        2. 메소드에 이벤트 리스너를 전달하는 방법
            element.addEventListener(이벤트 타입, 이벤트 핸들러, 이벤트 전파방식)
                타입        이벤트 리스너를 등록할 이벤트 타입
                핸들러      지정된 이벤트가 발생했을 때 실행할 함수
                전파 방식   false면 버블링방식, true면 캡처링 방식
*/
const showBtn = document.getElementById("btn"); //Id가 btn인 요소 선택

/**
 * eventHandler()라고 저장하면 함수를 바로 실행시켜버림
 * 함수 객체 eventHandler 라고 써야함
 */
showBtn.addEventListener("click", eventHandler);

/**
 * 이벤트 객체(event object)
 *  - 특정 타입의 이벤트와 관련이 있는 객체
 *  - 해당 타입의 이벤트에 대한 상세정보 저장하고 있음
 *  - 이벤트 핸들러가 호출될 때 인수로 전달됨
 */
function eventHandler(event) {  //인수로 event object를 전달받으며, 
                                //식별자를 통해 전달받은 이벤트 객체를 참조함
    console.log(event.target);
    document.getElementById("text").innerHTML =
        "이 이벤트의 타입은 " + event.type + "입니다.";
}

