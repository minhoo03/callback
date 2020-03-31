
pm = function(a, b, callback){
    callback(a+b, a-b);
}
    
pm(5, 10, function(res1, res2){
    console.log(res1);
    console.log(res2);
});
    
//pm 이라는 함수 만들고 a값, b값을 받을 수 있게 해주고 콜백이라는 변수 만들어 줌
//콜백이라는 변수에 식을 넣어주고 계산된 값은 변수에 들어감
//이 함수가 콜백함수

// pm을 사용함, 안에 5, 10 과 함수안에 변수 res1과 res2를 만들어 줌(다시 집어넣기, 식이 a+b, a-b 였으니)
//  a+b 를 res1에 a-b를 res2에 넣으며 출력

//-----함수 좋게 짜는 법------
function  sum(a,b){
     var c = a+b;
     return c; //sum (자기 자신에게)에 넣음
}
sum (1,2);
//3


//★고차함수_map함수
//고차 함수가 아닌 함수로 작성

const arr1 = [1,2,3];
const arr2 = [ ];

for(let i = 0; i<arr1.length; i++){
    arr2.push(arr1[i] * 2);
};
//prints [2,4,6];
console.log(arr2);



//★고차 함수로 작성
//*인자로 함수를 취하거나 함수를 반환할 수 있는 함수*
//*function(인자)*

const arr1 = [1,2,3];

cosnt arr2 = arr1.map(function(item){
    return item * 2;
};

console.log(arr2);
//map은 콜백함수를 이용하여(item에다가 arr1 의 내용(값, 형식) 집어넣기)
//계산식을 이용한 후에 arr2에 자기에게 반환 방식



//★화살표 함수 사용

const arr1 = [1,2,3];

const arr2 = arr1.map(item => item * 2);
console.log(arr2);
//function(){}을 없애고 ( 내용 = > 계산식 ); 으로 끝냄




// ☆고차 함수 예제 2
// *인자로 함수 취하거나 반환...*

var ho_func = function (param_func) { param_func(); };
ho_func = function ( ) { console.log("Hi") };

//1. ho_func 함수 생성 ( 함수실행 (콜백 변수) { 변수 실행 };
// 콜백 함수 만들어 놓고 내용 넣었을 때 들어온 기능을 콜백 변수에 담고 사용 가능케 함
//2. ho_func 내용 넣기 = 익명 함수 실행 { 출력 } ;




// 예제 2 보충 설명
// *콜백 함수 : 함수 인자로서 함수를 넘겨주기

fui one () {
    return 1;
}
fui two () {
    return 2;
}

fui invoke_and_add(a, b){
    return a( ) + b( );
}
//함수를 인자에 넘기고 그 인자랑 같은 값을 더해서 return
invoke_and_add(one( ), two( ) ); //3
