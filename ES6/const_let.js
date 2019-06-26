/**
 * es6 에서는  var가 사라지고 const와 let이 생겼다.
 * var는 함수 스코프를 가지지만 cont와 let은 블록스코프를 가진다.
 */
if (true) {
    var x = 3;
}
 console.log(x);

if (true) {
    const y = 3;
}
 console.log(y); // y is not defined


/**
 * const는 상수이기 때문에 한 번 값을 대입하면 변경할 수 없다.
 * 또한  초기값이 있어야 한다.
 */
const a = 0;
a = 1; // Assignment to constant variable
let b = 0;
b = 1; // 1
const c; Missing initializer in const declaration
