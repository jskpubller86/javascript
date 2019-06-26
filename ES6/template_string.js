/**
 * es6 에서는 새로운 문자열이 생겼는데 백틱(`)을 이용하여 문자를 표현한다. 백틱 안에서 변수를 사용할 수 있다.
 * 변수를 사용할 때는 ${변수명} 형식으로 사용합니다.
 */

 // 기존  ES5문법
 var num1 = 1;
 var num2 = 2;
 var result = 3;
 var string1 = num1 + '더하기' + num2 +'는 \'' + result + '\'';
 console.log(string1); // 1 더하기 2는 '3'


// ES6 문법
const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`; // 1 더하기 2 는 '3'
