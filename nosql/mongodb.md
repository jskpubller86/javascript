# mongodb 설치 

## 윈도우 

<https://www.mongodb.com/download-center/community> 으로 이동하여 다운로드 버튼을 클릭한다. 

다운로드가 완료되면 setup 파일을 실행시킨다. 

설치를 진행하는 것은 별 설정없이 대부분 next버튼으로 진행하면 되므로 자세한 설명은 생략한다. 

※ 참고로 윈도우 7에서는 mongodb compass를 별도로 설치해야한다. 

설치가 완료되면  `제어판\시스템 및 보안\시스템`의 `고급 시스템 설정`에서 환경변수인 `path`에 몽고디비의 bin폴더 경로를 지정해 준다.  

bin의 경로는 보통 다음과 같다. 

`C:\Program Files\MongoDB\Server\4.0\bin`



# mongodb 유저 생성하기 

몽고디비의 유저를 생성하기 위해서는 먼저, mongodb의 root 계정을 만들어야 한다. 

~~~~bash
> use admin
> db.createUser({user: "ROOT_ID", pwd: "ROOT_PASSWO", roles:["root"]})
~~~~

몽고디비 서버를 재시작한 후, 외부에서 `--auth` 플래그를 주고 root계정으로 로그인한다.

~~~bash
$ sudo service mongod restart
$ mongo
> mongo <host:port> -u "ROOT_ID" -p "ROOT_PASSWO" --authenticationDatabase "admin"
~~~

몽고디비는 use database로 데이터베이스가 생성되며, 데이터를 추가하면 데이터베이스가 유지된다. 

~~~basic
> use DATABASE
> db.createUser({user: "DB_USER_ID", pwd: "DB_USER_PASSWORD", roles:["dbOwner"]})
~~~

성공 메세지가 나오면, 해당 유저로 데이터베이스에 접속한다. 

~~~bash
> mongo <host:port>/DATABASE -u "DB_USER_ID" -p "DB_USER_PASSWORD"
~~~

