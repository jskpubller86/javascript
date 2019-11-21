# CSS calc() Function

## Example

다음과 같이 <div> 엘리먼트의 width를 계산하는 데 사용한다.


~~~~css
#div1 {
    position: absolute;
    left: 50px;
    width: calc(100% - 100px);
    border: 1px solid black;
    background-color: yellow;
    padding: 5px;
    text-align: center;
}
~~~~

-----

## Definition and Usage

calc() 함수는 산술연산( + - * / ) 을 속성 값으로 사용한다. 

~~~
version  css3
~~~

----

## Browser Support

테이블 안에 있는 숫자는 calc()를 지원해주는 첫번째 버전입니다. 

숫자에 붙은 -webkit- , -moz- , or -o-  prefix 를 붙여 작업할 수 있는 첫번째 버전입니다. 

----

| Function | ![img](https://www.w3schools.com/images/compatible_chrome.gif) | ![img](https://www.w3schools.com/images/compatible_edge.gif) | ![img](https://www.w3schools.com/images/compatible_firefox.gif) | ![img](https://www.w3schools.com/images/compatible_safari.gif) | ![img](https://www.w3schools.com/images/compatible_opera.gif) |
| -------- | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
| calc()   |                  26.0  <br />19.0 -webkit-                   |                             9.0                              |                   16.0   <br /> 4.0 -moz-                    | 7.0    <br />6.0 -webkit-                                    | 15.0                                                         |

-----

## CSS Syntax

~~~basic
calc(expression)
~~~

| **Value**  | **Description**                                              |
| ---------- | ------------------------------------------------------------ |
| expression | 필수 입니다. 수학으로 표현하며 결과는 속성의 값처럼 사용됩니다. <br/>+ - * / 연산자들을 사용할 수 있습니다.<br/>연산자와 피 연산자 사이는 반드시 한 칸의 공백을 삽입해야 한다.<br/> |

