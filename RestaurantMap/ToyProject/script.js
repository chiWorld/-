/**
 *  1. 지도 생성 & 확대 축소 컨트롤러
 * 		- https://apis.map.kakao.com/web/sample/addMapControl/
 * 
 * 	2. 더미데이터 준비 (title, address, url, category)
 * 
 *  3. 여러개 마커 찍기
 * 		- 주소 : 좌표 변환
 * 		 	https://apis.map.kakao.com/web/sample/multipleMarkerImage/ (여러개 마커)
 * 		  	https://apis.map.kakao.com/web/sample/addr2coord/ (주소로 장소 표시하기)
 * 
 * 	4. 마커에 인포윈도우 붙이기
 * 		- 마커에 클릭 이벤트로 인포윈도우
 * 			https://apis.map.kakao.com/web/sample/multipleMarkerEvent/
 * 		- url에서 섬네일 따기
 * 		- 클릭한 마커로 지도 센터 이동
 * 			https://apis.map.kakao.com/web/sample/moveMap/
 * 
 * 	5. 카테고리 분류
 */


/** ********************************************************** 1.지도 생성 & 확대 축소 컨트롤러 */
var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

var options = {									//지도 생성시 필수 기본 옵션
  center: new kakao.maps.LatLng(37.54, 126.96), //지도의 중심좌표
  level: 8, 									//지도의 레벨(확대, 축소)
};

var map = new kakao.maps.Map(container, options);	//지도 생성&객체 리턴

let zoomControl = new kakao.maps.ZoomControl();		//지도 확대&축소 컨트롤 생성

map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);	// 지도의 우측 확대*축소 컨트롤 추가


/**	********************************************************** 2. 더미데이터 준비 */
const dataSet = [
	{
		title: "희락돈까스",
		address: "서울 영등포구 양산로 210",
		url: "https://www.youtube.com/watch?v=1YOJbOUR4vw&t=88s",
		category: "양식",
	},
	{
		title: "즉석우동짜장",
		address: "서울 영등포구 대방천로 260",
		url: "https://www.youtube.com/watch?v=1YOJbOUR4vw&t=88s",
		category: "한식",
	},
	{
		title: "아카사카",
		address: "서울 서초구 서초대로74길 23",
		url: "https://www.youtube.com/watch?v=1YOJbOUR4vw&t=88s",
		category: "일식",
	},
];


/**	********************************************************** 3. 여러개 마커 찍기 */
var geocoder = new kakao.maps.services.Geocoder();	//주소 >좌표 변환 객체 생성

//주소 > 좌표 변환 함수
function getCoordsByAddress(address) {
	return new Promise((resolve, reject) => {
		geocoder.addressSearch(address, function (result, status) {	//주소로 좌표 검색

			if (status === kakao.maps.services.Status.OK) {			//정상적으로 검색
				var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
				resolve(coords);
			} else {
				reject(new Error("getCoordsByAddress Error : not vaild Address"));
			}

		});
	});
}

setMap(dataSet);


/**	********************************************************** 4. 마커에 인포윈도우 붙이기 */
//인포윈도우 가공
function getContent(data) {
	//유튜브 섬네일 id가져오기
	let replaceUrl = data.url;
	let finUrl = "";
	replaceUrl = replaceUrl.replace("https://youtu.be/", "");
	replaceUrl = replaceUrl.replace("https://www.youtube.com/embed/", "");
	replaceUrl = replaceUrl.replace("https://www.youtube.com/watch?v=", "");

	finUrl = replaceUrl.split("&")[0];

	return `<div class="infowindow">
				<div class="infowindow-img-container">
					<img
						src="https://img.youtube.com/vi/${finUrl}/mqdefault.jpg"
						alt="맛집 사진"
						class="infowindow-img"
					>
				</div>
				<div class="infowindow-body">
					<h5 class="infowindow-title"> ${data.title} </h5>
					<p class="infowindow-address"> ${data.address} </p>
					<a href="${data.url}" class="infowindow-btn" target="_blank"> 영상이동 </a>
				</div>
			</div>
	`;
}

async function setMap(dataSet) {
	for (var i = 0; i < dataSet.length; i ++) {
		let coords = await getCoordsByAddress(dataSet[i].address);	//좌표로 변환된 마커 생성

		var marker = new kakao.maps.Marker({
			map: map, 			//마커 표시할 지도
			position: coords,	//마커 표시할 위치
		});

		markerArray.push(marker);					//마커가 생성되는 순간 마커 관리 배열에 추가

		var infowindow = new kakao.maps.InfoWindow({//마커에 표시할 인포윈도우 생성
			content: getContent(dataSet[i]), 		//인포윈도우에 표시할 내용
		});

		infowindowArray.push(infowindow);			//인포윈도우 생성시 인포윈도우 관리 배열에 추가

		/*
			마커에 click 이벤트 등록 - 이벤트 리스너로는 클로저를 만들어 등록
			for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록
		*/
		kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow, coords));
		kakao.maps.event.addListener(map, 'click', makeOutListener(infowindow));
	}
}

//인포윈도우 표시하는 클로저를 만드는 함수
function makeOverListener(map, marker, infowindow, coords) {
	closeInfoWindow();		//1. 클릭시 다른 인포윈도우 닫기

    return function() {
		infowindow.open(map, marker);
		map.panTo(coords);	//2. 클릭한 곳으로 지도 중심 옮기기
    };
}

let infowindowArray = [];	//인포윈도우 관리 배열

//클릭시 다른 인포윈도우 닫기 함수
function closeInfoWindow() {
	for (let infowindow of infowindowArray) {
		infowindow.close();	//원래 인포윈도우 꺼짐
	}
}

// 인포윈도우를 닫는 클로저를 만드는 함수
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}


/**	********************************************************** 5. 카테고리 분류 */
const categoryMap = {
	korea: "한식",
	china: "중식",
	japan: "일식",
	america: "양식",
	wheat: "분식",
	meat: "구이",
	suchi: "회/초밥",
	etc: "기타",
}

const categoryList = document.querySelector(".category-list");	//카테고리 리스트 선택

categoryList.addEventListener("click", categoryHandler);

//카테고리 리스트 click 이벤트
function categoryHandler(event) {
	const categoryId = event.target.id;
	const category = categoryMap[categoryId]; //User가 택한 categoryId 담음

	let categorizedDataSet = [];			  //선택한 데이터 분류 배열

	for (let data of dataSet) {
		if (data.category === category) {
			categorizedDataSet.push(data);
		}
	}

	closeMarker();		//기존 마커 삭제

	closeInfoWindow();	//기존 인포윈도우 닫기

	setMap(categorizedDataSet);
}

let markerArray = [];	//마커관리 배열

//기존 마커 삭제 함수
function closeMarker() {
	for (marker of markerArray) {
		marker.setMap(null);
	}
}