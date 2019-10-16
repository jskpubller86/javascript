var season = new Array("봄","여름","가을","겨울");

/**
 * 배열의 인덱스에 이름을 사용할 수 있다.
 * [key:value,key:value]
 *
 */
var score = new Array();
var subject = "java";
score["web"] = 75;
score[subject] = 92;
score['project'] = 85;
score.title = 50;
score[7] = 20; // 4,5,6 인덱스 원소를 undefined로 채우면서 7곱번째 인덱스에 20으로 채운다.

console.log(score); // [empty × 7, 20, web: 75, java: 92, project: 85, title: 50]
console.log(score.length); // 8
console.log(score.title);


var arrUndeineds = new Array();
arrUndeineds[0] = undefined;
arrUndeineds[1] = null;

console.log(arrUndeineds); // [undefined, null]
