# 1. mongodb 설치 
몽고디비는 압출파일을 다운받고 해제하면 설치가 완료되고 즉시 실행가능하다. 

## 1.1. 윈도우 

<https://www.mongodb.com/download-center/community> 으로 이동하여 다운로드 버튼을 클릭한다. 

다운로드가 완료되면 setup 파일을 실행시킨다. 

설치를 진행하는 것은 별 설정없이 대부분 next버튼으로 진행하면 되므로 자세한 설명은 생략한다. 

※ 참고로 윈도우 7에서는 mongodb compass를 별도로 설치해야한다. 

설치가 완료되면  `제어판\시스템 및 보안\시스템`의 `고급 시스템 설정`에서 환경변수인 `path`에 몽고디비의 bin폴더 경로를 지정해 준다.  

bin의 경로는 보통 다음과 같다. 

`C:\Program Files\MongoDB\Server\4.0\bin`


# 2. mongodb 인스턴스 생성하기 

몽고디비 인스턴스를 만들 폴더를 만든다. 이름은 자유롭게 작성한다.

~~~bash
$ mkdir mongoDB
~~~

생성 후에 다음의 명령어로 몽고디비 인스턴스를 생성한다. 

~~~bash
$ mongod --dbpath ./mongoDB
~~~

다음과 같은 몽고디비 메시지가 출력된다.

~~~

2019-10-24T11:01:29.208+0900 I  CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2019-10-24T11:01:29.211+0900 I  CONTROL  [initandlisten] MongoDB starting : pid=32820 port=27017 dbpath=./crowdfunding 64-bit host=jsKim86ui-MacBookPro.local
2019-10-24T11:01:29.211+0900 I  CONTROL  [initandlisten] db version v4.2.0
2019-10-24T11:01:29.211+0900 I  CONTROL  [initandlisten] git version: a4b751dcf51dd249c5865812b390cfd1c0129c30
2019-10-24T11:01:29.211+0900 I  CONTROL  [initandlisten] allocator: system
2019-10-24T11:01:29.211+0900 I  CONTROL  [initandlisten] modules: none
2019-10-24T11:01:29.211+0900 I  CONTROL  [initandlisten] build environment:
2019-10-24T11:01:29.211+0900 I  CONTROL  [initandlisten]     distarch: x86_64
2019-10-24T11:01:29.211+0900 I  CONTROL  [initandlisten]     target_arch: x86_64
2019-10-24T11:01:29.211+0900 I  CONTROL  [initandlisten] options: { storage: { dbPath: "./crowdfunding" } }
2019-10-24T11:01:29.211+0900 I  STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=7680M,cache_overflow=(file_max=0M),session_max=33000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),statistics_log=(wait=0),verbose=[recovery_progress,checkpoint_progress],
2019-10-24T11:01:29.683+0900 I  STORAGE  [initandlisten] WiredTiger message [1571882489:683480][32820:0x11402ed40], txn-recover: Set global recovery timestamp: (0,0)
2019-10-24T11:01:29.772+0900 I  RECOVERY [initandlisten] WiredTiger recoveryTimestamp. Ts: Timestamp(0, 0)
2019-10-24T11:01:29.824+0900 I  STORAGE  [initandlisten] Timestamp monitor starting
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] 
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] 
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server. 
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP 
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] 
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] 
2019-10-24T11:01:29.825+0900 I  CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
2019-10-24T11:01:29.827+0900 I  STORAGE  [initandlisten] createCollection: admin.system.version with provided UUID: faff2da2-3020-4aeb-a14f-7bdf06c86f34 and options: { uuid: UUID("faff2da2-3020-4aeb-a14f-7bdf06c86f34") }
2019-10-24T11:01:29.872+0900 I  INDEX    [initandlisten] index build: done building index _id_ on ns admin.system.version
2019-10-24T11:01:29.873+0900 I  SHARDING [initandlisten] Marking collection admin.system.version as collection version: <unsharded>
2019-10-24T11:01:29.873+0900 I  COMMAND  [initandlisten] setting featureCompatibilityVersion to 4.2
2019-10-24T11:01:29.875+0900 I  SHARDING [initandlisten] Marking collection local.system.replset as collection version: <unsharded>
2019-10-24T11:01:29.875+0900 I  STORAGE  [initandlisten] Flow Control is enabled on this deployment.
2019-10-24T11:01:29.876+0900 I  SHARDING [initandlisten] Marking collection admin.system.roles as collection version: <unsharded>
2019-10-24T11:01:29.876+0900 I  STORAGE  [initandlisten] createCollection: local.startup_log with generated UUID: f2a03ed9-0d4f-412c-89e8-ec745e7e8632 and options: { capped: true, size: 10485760 }
2019-10-24T11:01:29.929+0900 I  INDEX    [initandlisten] index build: done building index _id_ on ns local.startup_log
2019-10-24T11:01:29.929+0900 I  SHARDING [initandlisten] Marking collection local.startup_log as collection version: <unsharded>
2019-10-24T11:01:29.929+0900 I  FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory './crowdfunding/diagnostic.data'
2019-10-24T11:01:29.930+0900 I  SHARDING [LogicalSessionCacheRefresh] Marking collection config.system.sessions as collection version: <unsharded>
2019-10-24T11:01:29.930+0900 I  NETWORK  [initandlisten] Listening on /tmp/mongodb-27017.sock
2019-10-24T11:01:29.930+0900 I  NETWORK  [initandlisten] Listening on 127.0.0.1
2019-10-24T11:01:29.930+0900 I  NETWORK  [initandlisten] waiting for connections on port 27017
2019-10-24T11:01:29.932+0900 I  CONTROL  [LogicalSessionCacheReap] Sessions collection is not set up; waiting until next sessions reap interval: config.system.sessions does not exist
2019-10-24T11:01:29.934+0900 I  STORAGE  [LogicalSessionCacheRefresh] createCollection: config.system.sessions with provided UUID: fd00daa7-8b65-4be6-a541-464dd7af590e and options: { uuid: UUID("fd00daa7-8b65-4be6-a541-464dd7af590e") }
2019-10-24T11:01:29.978+0900 I  INDEX    [LogicalSessionCacheRefresh] index build: done building index _id_ on ns config.system.sessions
2019-10-24T11:01:30.024+0900 I  INDEX    [LogicalSessionCacheRefresh] index build: starting on config.system.sessions properties: { v: 2, key: { lastUse: 1 }, name: "lsidTTLIndex", ns: "config.system.sessions", expireAfterSeconds: 1800 } using method: Hybrid
2019-10-24T11:01:30.024+0900 I  INDEX    [LogicalSessionCacheRefresh] build may temporarily use up to 500 megabytes of RAM
2019-10-24T11:01:30.024+0900 I  INDEX    [LogicalSessionCacheRefresh] index build: collection scan done. scanned 0 total records in 0 seconds
2019-10-24T11:01:30.025+0900 I  INDEX    [LogicalSessionCacheRefresh] index build: inserted 0 keys from external sorter into index in 0 seconds
2019-10-24T11:01:30.036+0900 I  INDEX    [LogicalSessionCacheRefresh] index build: done building index lsidTTLIndex on ns config.system.sessions
2019-10-24T11:01:30.048+0900 I  COMMAND  [LogicalSessionCacheRefresh] command config.system.sessions command: createIndexes { createIndexes: "system.sessions", indexes: [ { key: { lastUse: 1 }, name: "lsidTTLIndex", expireAfterSeconds: 1800 } ], $db: "config" } numYields:0 reslen:114 locks:{ ParallelBatchWriterMode: { acquireCount: { r: 2 } }, ReplicationStateTransition: { acquireCount: { w: 3 } }, Global: { acquireCount: { r: 1, w: 2 } }, Database: { acquireCount: { r: 1, w: 2, W: 1 } }, Collection: { acquireCount: { r: 4, w: 1, R: 1, W: 2 } }, Mutex: { acquireCount: { r: 3 } } } flowControl:{ acquireCount: 1 } storage:{} protocol:op_msg 115ms
2019-10-24T11:06:29.939+0900 I  SHARDING [LogicalSessionCacheReap] Marking collection config.transactions as collection version: <unsharded>
~~~

## 2.1. Config 파일로 시작하기
config 파일에 미리 옵션을 적용하여 실행시키는 방법으로 먼저 해당 dbpath로 이동한다.

~~~bash
$ cd mongoDB
~~~

데이터를 저장할 폴더와 로그파일을 저장할 폴더를 생성한다.

~~~text
$ mkdir DATA
$ mkdir LOG
~~~

환경설정 파일을 만든다. 

~~~bash
$ vi mongodb.conf
~~~
파일 안에 다음의 내용을 입력한다. 

~~~bash 
systemLog:
    destination: file
    path: ./LOG/mongod.log
    logAppend: true
storage: 
    dbPath: ./DATA
    directoryPerDB: true
    journal: 
        enabled: true
processManagement:
    fork: true
net: 
    port: 40001
~~~

mongod --config 옵션으로 mongodb.conf 파일을 지정하여 인스턴스를 생성한다.

~~~bash
$ mongod --config ./mongodb.conf

# 결과 
about to fork child process, waiting until server is ready for connections.
forked process: 62608
child process started successfully, parent exiting
~~~

40001번 포트로 접속하면 접속되는 것을 확인할 수 있다. 

~~~bash
$ mongo localhost:40001
~~~

# 3. db 변경 및 생성

사용할 디비를 변경하려면 다음과 같이한다. use [DB name]
만약 DB가 없다면 자동으로 생성한다.

~~~bash
> use admin
~~~

# 4. monogoDB 종료하기

shutdonwServer 명령으로 종료할 때는 admin 디비가 사용 중일 때만 가능하다.

~~~bash
> use admin
> db.shutdownServer()

# 결과
2019-10-24T14:51:49.248+0900 I  NETWORK  [js] DBClientConnection failed to receive message from localhost:27017 - HostUnreachable: Connection closed by peer
server should be down...
2019-10-24T14:51:49.250+0900 I  NETWORK  [js] trying reconnect to localhost:27017 failed
2019-10-24T14:51:49.250+0900 I  NETWORK  [js] reconnect localhost:27017 failed failed 
>
~~~



# 5. 클라이언트 접속 로그아웃

db 서버가 종료되지 않고 클라이언트의 접속만 종료된다. 여기서 클라이언트란 웹이나 앱을 말한다.

~~~bash
> db.logout

# 결과
2019-10-24T15:02:57.549+0900 I  NETWORK  [js] trying reconnect to localhost:27017 failed
2019-10-24T15:02:57.550+0900 I  NETWORK  [js] reconnect localhost:27017 ok
{ "ok" : 1 }
>
~~~


# 6. mongodb 유저 생성하기 

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



# 7. DB 확인

~~~bash
$ show dbs

# 결과
admin   0.000GB
config  0.000GB
local   0.000GB
~~~


# 8. DB 논리적 구조 확인

~~~bash
$ db.stats()

# 결과
{
	"db" : "test",
	"collections" : 0,
	"views" : 0,
	"objects" : 0,
	"avgObjSize" : 0,
	"dataSize" : 0,
	"storageSize" : 0,
	"numExtents" : 0,
	"indexes" : 0,
	"indexSize" : 0,
	"scaleFactor" : 1,
	"fileSize" : 0,
	"fsUsedSize" : 0,
	"fsTotalSize" : 0,
	"ok" : 1
}

$ db.hostInfo()

# 결과
{
	"system" : {
		"currentTime" : ISODate("2019-10-24T04:04:39.977Z"),
		"hostname" : "ip-70-12-225-37.kscymo.spcsdns.net:40001",
		"cpuAddrSize" : 64,
		"memSizeMB" : 16384,
		"memLimitMB" : 16384,
		"numCores" : 12,
		"cpuArch" : "x86_64",
		"numaEnabled" : false
	},
	"os" : {
		"type" : "Darwin",
		"name" : "Mac OS X",
		"version" : "19.0.0"
	},
	"extra" : {
		"versionString" : "Darwin Kernel Version 19.0.0: Wed Sep 25 20:18:50 PDT 2019; root:xnu-6153.11.26~2/RELEASE_X86_64",
		"alwaysFullSync" : 0,
		"nfsAsync" : 0,
		"model" : "MacBookPro15,1",
	....	
	},
	"ok" : 1
}
~~~

# 9. Collection의 생성
몽고디비에는 Capped Collection과 Non Capped Collection 2가지 탑이 있다. 
Non Capped는  디스크 공간이 허용하는 범위 내에서 계속적으로 저장할 수 있으며 Capped는 최초 할당한 크기내에서 데이터를 저장하고 만약 할당된 크기를 모두 사용하면 저장된 데이터를 지우고 처음부터 다시 저장을 한다.
capped는 로그 데이터 유형에 적합하다.

## 9.1. capped collection 생성

~~~
> mongo
> use SALES
> db.createCollection("employees", {capped: true, size: 100000})
# 결과 
{ "ok" : 1 }
> show collections
> db.employees.stats() // collction 상태 확인
# 결과 
{
	"ns" : "SALES.employees",
	"size" : 0,
	"count" : 0,
	"storageSize" : 4096,
	"capped" : true,
	"max" : -1,
	"maxSize" : 100096,
	"sleepCount" : 0,
	.....
}
> db.things.stats().capped // capped 상태만 확인
~~~

## 9.2. collection 이름 변경

~~~
> db.employees.renameCollection("emp")
# 결과
{"ok": 1}
~~~

## 9.3. 생성 및 확인

~~~bash
> db.createCollection("emp", {capped: true, size: 2100000000, max: 500000});
# 결과
{ "ok" : 1 }

> show collections
# 결과
emp
~~~

## 9.4. 컬렉션 상태 확인

~~~bash
> db.emp.stats()
# 결과
{
	"ns" : "test.emp",
	"size" : 0,
	"count" : 0,
	"storageSize" : 4096,
	"capped" : true,
	"max" : 500000,
	"maxSize" : NumberLong(2100000000),
	"sleepCount" : 0,
	"sleepMS" : 0,
	"wiredTiger" : {
		"metadata" : {
			"formatVersion" : 1
		},
		......
}
~~~ 

## 9.5. 컬렉션 이름 변경

~~~bash
> db.emp.renameCollection("employees")
# 결과
{ "ok" : 1 }
~~~

## 9.6. 컬렉션 삭제

~~~bash
> db.employees.drop();
# 결과 
true
~~~

# 10. 데이터 저장

몽고디비는 json타입으로 데이터를 표현한다. 

~~~
> m={ename: "smith"}
# 결과 
{"ename": "smith"}
~~~

데이터를 저장할 때는 save 메소드를 사용한다.

~~~
> db.things.save(m)
# 결과
WriteResult({"nInserted" : 1})
~~~

저장된 데이터를 검색할 때는 find를 사용하며 도큐먼트는 반드시 하나의 Object ID가 부여된다. 

~~~
db.things.find()
# 결과 
{ "_id" : ObjectId("5dd69cfb3a45f5907af0e2a1"), "ename" : "smith" }
~~~

insert 메소드를 통해서도 저장할 수 있다. 

~~~
>db.things.insert({empno: 1102, ename: "king"})
# 결과
WriteResult({"nInserted" : 1})
~~~

반복문을 통해서도 저장할 수 있다. 

~~~
> for (var n = 1103; n <= 1120; n++) db.things.save({n : n, m : "test"})
# 결과 
WriteResult({ "nInserted" : 1 })
> db.things.find()
# 결과 
{ "_id" : ObjectId("5dd69cfb3a45f5907af0e2a1"), "ename" : "smith" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2a2"), "n" : 1103, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2a3"), "n" : 1104, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2a4"), "n" : 1105, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2a5"), "n" : 1106, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2a6"), "n" : 1107, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2a7"), "n" : 1108, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2a8"), "n" : 1109, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2a9"), "n" : 1110, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2aa"), "n" : 1111, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2ab"), "n" : 1112, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2ac"), "n" : 1113, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2ad"), "n" : 1114, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2ae"), "n" : 1115, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2af"), "n" : 1116, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2b0"), "n" : 1117, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2b1"), "n" : 1118, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2b2"), "n" : 1119, "m" : "test" }
{ "_id" : ObjectId("5dd69ebe3a45f5907af0e2b3"), "n" : 1120, "m" : "test" }s
~~~

결과가 20 개가 넘을 때는 it 명령어로 skip할 수 있다. 

~~~
> it // 만약 더 보여줄 도큐먼트가 없다면 커서가 없음을 표시한다. 
# 결과 
no cursor
~~~

# 11. 데이터 업데이트 
데이터를 업데이트하는 방법에는 SAVE와 UPDATE 메소드가 있다. 

~~~
> db.things.update({n:1103}, {$set: {ename: "standford", dept :  "research"}})
# 결과
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
~~~

# 12. 데이터 삭제
조건을 오브젝트 형식으로 전달하여 삭제한다. 

~~~
> db.things.remove({m: "test"})
# 결과
WriteResult({ "nRemoved" : 18 })
~~~

조건을 미지정시 모든 데이터를 삭제한다.

~~~
> db.things.remove({})
# 결과
WriteResult({ "nRemoved" : 7 })
> db.things.find()
~~~



