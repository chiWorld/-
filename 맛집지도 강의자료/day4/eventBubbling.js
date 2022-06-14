/**
 * 이벤트 전파
 *  - 이벤트가 발생했을 때, 브라우저가 이벤트 리스너를 실행시킬 대상요소를 결정하는 과정
 */

/**
 *  버블링(bubbling) 전파 방식
 *  - 이벤트가 발생한 요소부터 시작해서 DOM트리를 따라 위쪽으로 올라가며 전파되는 방식
 *  - Document 객체뿐만 아니라 Window 객체까지 계속 이어짐
 *  - 장점 : 공통된 조상 요소에 한 번만 등록하면 처리할 수 있음
 */
    const div = document.getElementById("container");
    const input = document.getElementById("input-tag");
    const button = document.getElementById("button-tag");

    div.addEventListener("click", function (event) {
    console.log("div에서 클릭이벤트 감지");
    });
    input.addEventListener("click", function (event) {
    console.log("input에서 클릭이벤트 감지");
    });
    button.addEventListener("click", function (event) {
    console.log("button에서 클릭이벤트 감지");
    });