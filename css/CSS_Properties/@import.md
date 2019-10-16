# CSS @import

###  Example

현재 스타일에 “navigation.css” 스타일을 가져온다.

~~~css
@import “navigation.css”; /* Using a string */
or
@import url(“navigation.css”); /* Using a url */
~~~

아래의 예제를 더 보기 바란다.

-----

### Definition and Usage

@import 규칙은 당신이 다른 스타일 시트를 가져오게 합니다.

@import 규칙은 반드시 상단에 명시해야 합니다. 단, @charset 선언 이후에 쓰여야 합니다.

@import 규칙은 미디어쿼리를 지원하며, 미디어에 의존한 import를 구현할 수 있다.

-----

### Browser Support

테이블 안에 있는 숫자는 calc()를 지원해주는 첫번째 버전입니다. 

| Property | ![img](https://www.w3schools.com/images/compatible_chrome.gif) | ![img](https://www.w3schools.com/images/compatible_edge.gif) | ![img](https://www.w3schools.com/images/compatible_firefox.gif) | ![img](https://www.w3schools.com/images/compatible_safari.gif) | ![img](https://www.w3schools.com/images/compatible_opera.gif) |
| :------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| @import  |                             Yes                              |                             5.5                              |                             Yes                              |                             Yes                              |                             Yes                              |

-----

### CSS Syntax

~~~css
@import url|string list-of-mediaqueries;
~~~

### Property Values

| **Value**              | **Description**                                              |
| ---------------------- | ------------------------------------------------------------ |
| *url\|string*          | import 리소스의 위치를 나타낸다. url은 절대 경로 또는 상대 경로를 쓸 수 있다. |
| *list-of-mediaqueries* | 링크된 css에 미디어쿼리 조건을 확장한다.                     |

-----

### More Examples

**Example**

media 속성이 print일 때만 printstyle.css를 가져온다.

~~~~ css
@import "printstyle.css" print;
~~~~

**Example**

media가 screen이고 viewport가 768 미만일 때 mobstyle.css를 가져온다.

~~~css
@import "mobstyle.css" screen and (max-width: 768px);
~~~


