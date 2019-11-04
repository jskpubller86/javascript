# 1. mongodb 설치 

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
> db.shutdownServer()

# 결과
2019-10-24T14:51:49.248+0900 I  NETWORK  [js] DBClientConnection failed to receive message from localhost:27017 - HostUnreachable: Connection closed by peer
server should be down...
2019-10-24T14:51:49.250+0900 I  NETWORK  [js] trying reconnect to localhost:27017 failed
2019-10-24T14:51:49.250+0900 I  NETWORK  [js] reconnect localhost:27017 failed failed 
>
~~~

# 4. collection

## 4.1. 생성 및 확인

~~~bash
> db.createCollection("emp", {capped: true, size: 2100000000, max: 500000});
# 결과
{ "ok" : 1 }

> show collections
# 결과
emp
~~~

## 4.2. 컬렉션 상태 확인

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
		"creationString" : "access_pattern_hint=none,allocation_size=4KB,app_metadata=(formatVersion=1),assert=(commit_timestamp=none,durable_timestamp=none,read_timestamp=none),block_allocation=best,block_compressor=snappy,cache_resident=false,checksum=on,colgroups=,collator=,columns=,dictionary=0,encryption=(keyid=,name=),exclusive=false,extractor=,format=btree,huffman_key=,huffman_value=,ignore_in_memory_cache_size=false,immutable=false,internal_item_max=0,internal_key_max=0,internal_key_truncate=true,internal_page_max=4KB,key_format=q,key_gap=10,leaf_item_max=0,leaf_key_max=0,leaf_page_max=32KB,leaf_value_max=64MB,log=(enabled=true),lsm=(auto_throttle=true,bloom=true,bloom_bit_count=16,bloom_config=,bloom_hash_count=8,bloom_oldest=false,chunk_count_limit=0,chunk_max=5GB,chunk_size=10MB,merge_custom=(prefix=,start_generation=0,suffix=),merge_max=15,merge_min=0),memory_page_image_max=0,memory_page_max=10m,os_cache_dirty_max=0,os_cache_max=0,prefix_compression=false,prefix_compression_min=4,source=,split_deepen_min_child=0,split_deepen_per_child=0,split_pct=90,type=file,value_format=u",
		"type" : "file",
		"uri" : "statistics:table:collection-0-7530895149974851241",
		"LSM" : {
			"bloom filter false positives" : 0,
			"bloom filter hits" : 0,
			"bloom filter misses" : 0,
			"bloom filter pages evicted from cache" : 0,
			"bloom filter pages read into cache" : 0,
			"bloom filters in the LSM tree" : 0,
			"chunks in the LSM tree" : 0,
			"highest merge generation in the LSM tree" : 0,
			"queries that could have benefited from a Bloom filter that did not exist" : 0,
			"sleep for LSM checkpoint throttle" : 0,
			"sleep for LSM merge throttle" : 0,
			"total size of bloom filters" : 0
		},
		"block-manager" : {
			"allocations requiring file extension" : 0,
			"blocks allocated" : 0,
			"blocks freed" : 0,
			"checkpoint size" : 0,
			"file allocation unit size" : 4096,
			"file bytes available for reuse" : 0,
			"file magic number" : 120897,
			"file major version number" : 1,
			"file size in bytes" : 4096,
			"minor version number" : 0
		},
		"btree" : {
			"btree checkpoint generation" : 11,
			"column-store fixed-size leaf pages" : 0,
			"column-store internal pages" : 0,
			"column-store variable-size RLE encoded values" : 0,
			"column-store variable-size deleted values" : 0,
			"column-store variable-size leaf pages" : 0,
			"fixed-record size" : 0,
			"maximum internal page key size" : 368,
			"maximum internal page size" : 4096,
			"maximum leaf page key size" : 2867,
			"maximum leaf page size" : 32768,
			"maximum leaf page value size" : 67108864,
			"maximum tree depth" : 0,
			"number of key/value pairs" : 0,
			"overflow pages" : 0,
			"pages rewritten by compaction" : 0,
			"row-store empty values" : 0,
			"row-store internal pages" : 0,
			"row-store leaf pages" : 0
		},
		"cache" : {
			"bytes currently in the cache" : 182,
			"bytes dirty in the cache cumulative" : 0,
			"bytes read into cache" : 0,
			"bytes written from cache" : 0,
			"checkpoint blocked page eviction" : 0,
			"data source pages selected for eviction unable to be evicted" : 0,
			"eviction walk passes of a file" : 0,
			"eviction walk target pages histogram - 0-9" : 0,
			"eviction walk target pages histogram - 10-31" : 0,
			"eviction walk target pages histogram - 128 and higher" : 0,
			"eviction walk target pages histogram - 32-63" : 0,
			"eviction walk target pages histogram - 64-128" : 0,
			"eviction walks abandoned" : 0,
			"eviction walks gave up because they restarted their walk twice" : 0,
			"eviction walks gave up because they saw too many pages and found no candidates" : 0,
			"eviction walks gave up because they saw too many pages and found too few candidates" : 0,
			"eviction walks reached end of tree" : 0,
			"eviction walks started from root of tree" : 0,
			"eviction walks started from saved location in tree" : 0,
			"hazard pointer blocked page eviction" : 0,
			"in-memory page passed criteria to be split" : 0,
			"in-memory page splits" : 0,
			"internal pages evicted" : 0,
			"internal pages split during eviction" : 0,
			"leaf pages split during eviction" : 0,
			"modified pages evicted" : 0,
			"overflow pages read into cache" : 0,
			"page split during eviction deepened the tree" : 0,
			"page written requiring cache overflow records" : 0,
			"pages read into cache" : 0,
			"pages read into cache after truncate" : 0,
			"pages read into cache after truncate in prepare state" : 0,
			"pages read into cache requiring cache overflow entries" : 0,
			"pages requested from the cache" : 0,
			"pages seen by eviction walk" : 0,
			"pages written from cache" : 0,
			"pages written requiring in-memory restoration" : 0,
			"tracked dirty bytes in the cache" : 0,
			"unmodified pages evicted" : 0
		},
		"cache_walk" : {
			"Average difference between current eviction generation when the page was last considered" : 0,
			"Average on-disk page image size seen" : 0,
			"Average time in cache for pages that have been visited by the eviction server" : 0,
			"Average time in cache for pages that have not been visited by the eviction server" : 0,
			"Clean pages currently in cache" : 0,
			"Current eviction generation" : 0,
			"Dirty pages currently in cache" : 0,
			"Entries in the root page" : 0,
			"Internal pages currently in cache" : 0,
			"Leaf pages currently in cache" : 0,
			"Maximum difference between current eviction generation when the page was last considered" : 0,
			"Maximum page size seen" : 0,
			"Minimum on-disk page image size seen" : 0,
			"Number of pages never visited by eviction server" : 0,
			"On-disk page image sizes smaller than a single allocation unit" : 0,
			"Pages created in memory and never written" : 0,
			"Pages currently queued for eviction" : 0,
			"Pages that could not be queued for eviction" : 0,
			"Refs skipped during cache traversal" : 0,
			"Size of the root page" : 0,
			"Total number of pages currently in cache" : 0
		},
		"compression" : {
			"compressed page maximum internal page size prior to compression" : 4096,
			"compressed page maximum leaf page size prior to compression " : 131072,
			"compressed pages read" : 0,
			"compressed pages written" : 0,
			"page written failed to compress" : 0,
			"page written was too small to compress" : 0
		},
		"cursor" : {
			"bulk loaded cursor insert calls" : 0,
			"cache cursors reuse count" : 0,
			"close calls that result in cache" : 0,
			"create calls" : 1,
			"insert calls" : 0,
			"insert key and value bytes" : 0,
			"modify" : 0,
			"modify key and value bytes affected" : 0,
			"modify value bytes modified" : 0,
			"next calls" : 0,
			"open cursor count" : 0,
			"operation restarted" : 0,
			"prev calls" : 1,
			"remove calls" : 0,
			"remove key bytes removed" : 0,
			"reserve calls" : 0,
			"reset calls" : 2,
			"search calls" : 0,
			"search near calls" : 0,
			"truncate calls" : 0,
			"update calls" : 0,
			"update key and value bytes" : 0,
			"update value size change" : 0
		},
		"reconciliation" : {
			"dictionary matches" : 0,
			"fast-path pages deleted" : 0,
			"internal page key bytes discarded using suffix compression" : 0,
			"internal page multi-block writes" : 0,
			"internal-page overflow keys" : 0,
			"leaf page key bytes discarded using prefix compression" : 0,
			"leaf page multi-block writes" : 0,
			"leaf-page overflow keys" : 0,
			"maximum blocks required for a page" : 0,
			"overflow values written" : 0,
			"page checksum matches" : 0,
			"page reconciliation calls" : 0,
			"page reconciliation calls for eviction" : 0,
			"pages deleted" : 0
		},
		"session" : {
			"object compaction" : 0
		},
		"transaction" : {
			"update conflicts" : 0
		}
	},
	"nindexes" : 1,
	"indexBuilds" : [ ],
	"totalIndexSize" : 4096,
	"indexSizes" : {
		"_id_" : 4096
	},
	"scaleFactor" : 1,
	"ok" : 1
}
~~~ 

## 4.3. 컬렉션 이름 변경

~~~bash
> db.emp.renameCollection("employees")
# 결과
{ "ok" : 1 }
~~~

## 4.4. 컬렉션 삭제

~~~bash
> db.employees.drop();
# 결과 
true
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



# 6. DB 확인

~~~bash
$ show dbs

# 결과
admin   0.000GB
config  0.000GB
local   0.000GB
~~~


# 7. DB 논리적 구조 확인

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
		"physicalCores" : 6,
		"cpuFrequencyMHz" : 2600,
		"cpuString" : "Intel(R) Core(TM) i7-8850H CPU @ 2.60GHz",
		"cpuFeatures" : "FPU VME DE PSE TSC MSR PAE MCE CX8 APIC SEP MTRR PGE MCA CMOV PAT PSE36 CLFSH DS ACPI MMX FXSR SSE SSE2 SS HTT TM PBE SSE3 PCLMULQDQ DTES64 MON DSCPL VMX SMX EST TM2 SSSE3 FMA CX16 TPR PDCM SSE4.1 SSE4.2 x2APIC MOVBE POPCNT AES PCID XSAVE OSXSAVE SEGLIM64 TSCTMR AVX1.0 RDRAND F16C SYSCALL XD 1GBPAGE EM64T LAHF LZCNT PREFETCHW RDTSCP TSCI",
		"pageSize" : 4096,
		"scheduler" : "dualq"
	},
	"ok" : 1
}
~~~
