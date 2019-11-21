# 1. async await

~~~javascript
function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return  user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm'});
        })
        .then((user) => {
            // 생략
        })
        .catch((err) => {
            console.error(err);
        });
}
~~~

위 코드는 여전히 깁니다. async function이라는 것이 추가되었다. 

~~~~javascript

async function findAndSaveUser(Users){
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm'});
    // 생략
}
~~~~

위 코드는 에러를 처리하는 부분이 없으므로 다음과 같은 추가 작업을 합니다. catch 부분이 에러 부분을 처리한다.

~~~javascript
async function findAndSaveUser(Users){
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm'});
        // 생략
    } catch (err) {
        console.error(err);
    }
}
~~~

화살표 함수도 async와 같이 사용할 수 있다. 

~~~javascript
const findAndSaveUser = async () => {
        try {
            let user = await Users.findOne({});
            user.name = 'zero';
            user = await user.save();
            user = await Users.findOne({ gender: 'm'});
            // 생략
        } catch (err) {
            console.error(err);
        }
    }

~~~

for문과 async/await을 같이 써서 Promise.all을 대체 할 수 있다. 

~~~javascript
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]){
        console.log(promise);
    }
})();
~~~

















