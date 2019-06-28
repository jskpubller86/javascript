# AJAX(Asynchronous Javascript And XML)

페이지 이동 없이 서버에 요청을 보내고 응답을 받는 기술이다.

자바 스크립트로 동기화 소스 구현

~~~ javascript
var xhr = new XMLHttpRequest();
var data = {
    name : 'zerocho',
    birth: 1994,
};
xhr.onreadystatechange = function(){  // 요청이 완료된 후 작업
    if (xhr.readyState === xhr.DONE) { // 요청이 완료되었을 때
        if (xhr.status === 200 || xhr.status === 201) {//200이나 201 상태 코드를 받으면
            console.log(xhr.responseText); // 응답내용 출력
        } else {
            console.error(xhr.responseText); // 에러 응답내용 출력
        }
    }
};
xhr.open('POST', 'https://www.zerocho.com/api/post/json'); // 메소드와 주소 설정
xhr.setRequestHeader('Content-Type', 'application/json'); // 요청 헤더 설정
xhr.send(JSON.stringify(data)); // json 데이터로 요청 발송
~~~

onreaystatechange 말고 onload error로 성공과 실패를 구별해도 된다. 

~~~javascript
var xhr = new XMLHttpRequest();
xhr.onload = function(){
    if (xhr.status === 200 || xhr.status === 201) {
        console.log(xhr.responseText);
    }
};
xhr.onerror = function () {
    console.error(xhr.responseText);
};
xhr.open('GET', 'https://www.zerocho.com/api/get'); // 메소드와 주소 설정
xhr.send(); // 요청 전송
~~~



# FormData

HTML form 태그의 데이터를 동적으로 제어할 수 있는 기능이다. 주로 AJAX와 함께 사용된다.

~~~~javascript
var  formData = new FormData();
formData.append('name', 'zerocho');
formData.append('item', 'orange');
formData.append('item', 'melon');
formData.has('item'); // true
formData.has('money'); // false
formData.get('item'); //orange
formData.getAll('item'); // ['orange', 'melon']
formData.append('test',['hi', 'zero']); 
formData.get('test') //hi, zero
formData.set('item', 'apple');
formData.getAll('item'); // ['orange', 'melon', apple']
~~~~

form 요소의 name과 value 속성의 값을 이용하여 쉽게 formData를 만들 수 있다. 

~~~html
<form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username">
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc">
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile">
  </div>
<input type="submit" value="Submit!">
</form>
~~~

~~~~javascript
var myForm = document.getElementById('myForm');
formData = new FormData(myForm);
~~~~

만들어진 formData를  XMLHttpRequest를 send를 통해 쉽게 발송할 수 있다. 

~~~javascript
xhr.send(formData);
~~~



# CORS

비동기로 구현을 할 때 알아두어야 할게 있다. 바로 CORS(Cross Origin Resource Sharing)이다. 

쉽게 설명하면 다른 도메인에 있는 리소스를 공유하는 것이다. 

하지만 `<script></script>`로 둘러싸여 있는 **스크립트**에서 생성된 Cross-Site HTTP Requests는 [**Same Origin Policy**](https://developer.mozilla.org/ko/docs/Web/Security/Same-origin_policy)를 적용 받기 때문에 Cross-Site HTTP Requests가 불가능하다.

W3C에서는 이 문제를 해결하기 위해서 CORS라는 이름의 권고안이 나오게 되었다.



CORS 요청은 Simple/Preflight, Credential/Non-Credential의 조합으로 4가지가 존재한다.

브라우저가 요청 내용을 분석하여 4가지 방식 중 해당하는 방식으로 서버에 요청을 날리므로, 프로그래머가 목적에 맞는 방식을 선택하고 그 조건에 맞게 코딩해야 한다.

### Simple Request

아래의 3가지 조건을 모두 만족하면 Simple Request

- GET, HEAD, POST 중의 한 가지 방식을 사용해야 한다.
- POST 방식일 경우 Content-type이 아래 셋 중의 하나여야 한다.
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- 커스텀 헤더를 전송하지 말아야 한다.

Simple Request는 서버에 1번 요청하고, 서버도 1번 회신하는 것으로 처리가 종료된다.



### Preflight Request

Simple Request 조건에 해당하지 않으면 브라우저는 Preflight Request 방식으로 요청한다.

따라서, Preflight Request는

- GET, HEAD, POST 외의 다른 방식으로도 요청을 보낼 수 있고,
- application/xml 처럼 다른 Content-type으로 요청을 보낼 수도 있으며,
- 커스텀 헤더도 사용할 수 있다.

이름에서 짐작할 수 있듯, Preflight Request는 예비 요청과 본 요청으로 나뉘어 전송된다.

먼저 서버에 예비 요청(Preflight Request)를 보내고 서버는 예비 요청에 대해 응답하고,
그 다음에 본 요청(Actual Request)을 서버에 보내고, 서버도 본 요청에 응답한다.

**하지만, 예비 요청과 본 요청에 대한 서버단의 응답을 프로그래머가 프로그램 내에서 구분하여 처리하는 것은 아니다.**
프로그래머가 **Access-Control-** 계열의 Response Header만 적절히 정해주면,
OPTIONS 요청으로 오는 예비 요청과 GET, POST, HEAD, PUT, DELETE 등으로 오는 본 요청의 처리는 서버가 알아서 처리한다.



### Request with Credential

HTTP Cookie와 HTTP Authentication 정보를 인식할 수 있게 해주는 요청

요청 시 **xhr.withCredentials = true**를 지정해서 Credential 요청을 보낼 수 있고,
서버는 Response Header에 반드시 **Access-Control-Allow-Credentials: true**를 포함해야 하고,
**Access-Control-Allow-Origin** 헤더의 값에는 *****가 오면 안되고 `http://foo.origin`과 같은 구체적인 도메인이 와야 한다.

### Request without Credential

CORS 요청은 기본적으로 Non-Credential 요청이므로, **xhr.withCredentials = true**를 지정하지 않으면 Non-Credential 요청이다.