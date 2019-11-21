# Redux Thunk
## 왜 리덕스가 필요한가?

일반적인 redux 스토어를 사용하는 것에서, 단순히 동기식으로 디스패치 액션을 업데이트 하는 것만 할 수 있습니다. 
미들웨어를 이용하면 스토어의 능력을 확장해 주며, 스토어와 동작하는 비동기식 로직을 작성할 수 있다. 

대표적으로 리덕스 외부 미들웨어 라이브러리는 redux-thunk와 sagas가 있으며 redux-thunk는 스토어에 접근하기 위해서 필요한 복잡한 동기식 로직과 ajax 같은 비동기식 로직을 작성할 있다.

## 동작
Thunk middleware는 액션 대신에 액션 디스패치를 가지고 있는 함수를 리턴하는 함수를 받아들입니다.<br/>
Thunk는 액션 디스패치하는 것을 연기하는 것에 사용될 수 있습니다.<br/>
Thunk 함수는 스토어 메소드인 dispatch와 getState를 파라미터처럼 받습니다.<br/>

다음은 액션 생성자는 비동기 디스패치를 수행하는 함수를 반환합니다. 

~~~javascript
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'; // 

function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

// 1초 있다가 dispatch를 실행하는 함수
function incrementAsync() {
  return (dispatch, getState) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}
~~~

An action creator that returns a function to perform conditional dispatch:
다음은 액션 생성자는 조건적 디스패치를 수행하는 함수를 반환한다. 

~~~javascript 
function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}
~~~

## What's a thunk?!
A thunk is a function that wraps an expression to delay its evaluation.
thunk는 redux의 변화를 연기시키는 표현을 감싸는 함수이다.

~~~javascript
// calculation of 1 + 2 is immediate
// x === 3
let x = 1 + 2;

// calculation of 1 + 2 is delayed
// foo can be called later to perform the calculation
// foo is a thunk!
let foo = () => 1 + 2;
~~~

The term originated as a humorous past-tense version of "think".
이러한 경향은 think의 버전이다. 







