//변수 = 데이터를 담는 그릇
//함수 = 소스코드를 담는 그릇

console.log(sum(10));

//기명함수 = 호이스팅 미지원 (호이스팅 = 끌어올리다)
function sum(target) {
    let result = 0;
    for (let i = 1; i <= target; i++) {
        result += i;
    }
    return result;
}

//익명함수 : 호이스팅 지원. 
const sum2 = function (start, target) {
    let result = 0;
    for (let i = start; i <= target; i++) {
        result += i;
    }
    return result;
}

const sum3 = (start, target) => {
    let result = 0;
    for (let i = start; i <= target; i++) {
        result += i;
    }
    return result;
}

console.log(sum2(1, 10));


//함수 연습문제
const BMI = (height, weight) => {
    const meterHeight = height / 100;
    const result = weight / (meterHeight * meterHeight);

    if (result > 18.5) {
        return '저체중 입니다.';
    } else if (result > 23) {
        return '정상 입니다.';
    } else if (result > 25) {
        return '과체중 입니다.';
    } else {
        return '비만입니다.';
    }
}

console.log(`나의 BMI 지수는 ${BMI(180, 78)}`);