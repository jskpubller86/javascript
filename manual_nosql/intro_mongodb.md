# 1. NoSql이란 무엇인가?
기존의 sql이 아닌 NoSql의 인기가 생긴이유는 클라우드 컴퓨티이 환경에서 빅데이터를 처리하기에 효과적이기 때문이다. <br>
장점은 아래와 같다.<br> 

1. 클라우드 컴퓨팅 환경에 적합하다.<br>
   1) Open Source이다.  
   2) 하드웨어 확장에 유연한 대처가 가능하다.  	
   3) 무엇보다 RDBMS에 비해저렴한 분산 처리와 병령 처리가 가능하다.  
   
2. 유연한 데이터 모델이다. <br> 
	1) 비정형 데이터 구조 설계로 설계 비용이 감소한다.  <br>
	2) 관계형 데이터베이스의 Relationship과 Join 구조를 Linking과 Embedded로 구현하여 성능이 빠르다. <br>
	
3. Big Data 처리에 효과적이다. <br>
	1) Memory Mapping 기능을 통해 Read/Write가 빠르다.  
	2) 전형적인 OS와 Hardware에 구축할 수 있다.  
	3) 기존 RDB와 동일하게 데이터 처리가 가능하다.  

결국 위 내용을 요약하면 기존의 DBMS보다 빠르고 클라우드 컴퓨팅 환경을 위한 유연한 시스템 환경에 적합하며 불필요한 테이블과 조인을 없애고 무료로 사용할 수 있는 것이다. 

# 2. 꾸준히 버전업을 하는 NoSql 제품 목록
1. [MongoDB](http://www.mongodb.org)
2. [Casadra](http://couchdb.apache.org)
3. [HBASE](http://hbase.apache.org)
4. [CouchDB](http://couchdb.apache.org)
5. Riak
6. Redis


# 3. 유연성, 일관성, 파티션 기능에 따른 분류

## 1) KEY-VALUE DATABASE
- Amazon's Dynamo Paper
- Data Model : Collection of K-V pairs
- 제품유형 : Riak, Voldemort, Tokyo*

## 2) COLUMNFAMILY DATABASE
- Google's BigTable paper
- Data Model: Column Families
- 제품유형: Hbase, Casandra, Hypertable

## 3) DOCUMENT DATABASE
- Lotus Notes
- Data Model : Collection of K-V collection
- 제품유형 : Mongo DB, Cough DB

## 4) GRAPH DATABASE
- Euler & Graph Theory
- Data Model : nodes, rels, K-V on both
- 제품유형 : AllegroGraph, Sones

데이터 베이스 순위를 확인할 수 있는 사이트 [http:db-engines.com](http:db-engines.com)


# 4. MongoDB EcoSystem과 Hadoop EcoSystem 비교

|     | MongoDB EcoSystem | Hadoop EcoSystem |
|:----------|:-----------|:-----------------|
| 개발사 | MongoDB.inc (미국 샌프란시스코 소재) | Apache 재단 (Sub Project에 의해 개발됨 |
| 기능 | - MapReducde (분산/병령 처리)<br > - Sharding System(분산저장 system) <br> - ReplicaSets (분산 저장 system <br> - Text Search Enging  <br> - Aggregate FrameWork (데이터 추출/분석 도구) <br> - MongoDB (NoSQL) <br> - GridFs (비정형 관리도구) <br> -  MongoDB Monitoring Service(모니터링 도구) | - MapReduce (분산/병령 처리 시스템) <br> - HDFS (분산 파일 System) <br> - Sharding Systema ( 분산 저장 System) <br> - ReplicaSets (분산 복제 System) <br> - HABSE(NoSQL)  <br> - Hive/Pig (데이터 추출/분석 도구) <br> - Zookepper (분산 Clordinator)|
|확장성 | - Scale Out 가능 <br> - 다수의 노드 확장 용이 (추가 라이선스가 요구되지 않음)| - Scale Out 가능 <br> - 다수의 노드 확장 용이 (추가 라이선스가 요구되지 않음 |
| 안전성 | - Fail 발생시 복제 기능 제공 <br> - 다수의 노드로 복제 용이 (추가 라이선스가 요구 되지 않음) | - Fail 발생시 복제 기능 제공 <br> - 다수의 노드로 복제 용이(추가 라이선스가 요구되지 않음 |
| 주요특징 | - Document 데이터 저장 구조 제공 (Data Set 타입에 유리) <br> - 사용자 interface 매우 좋음(MongoDB) <br> - 트랜잭션 처리 가능 <br> - 일반 기업인 MongoDB inc에 의해 개발되기 때문에 버전관리가 용이하며 연동시 버그 발생율이 낮고 시스템 안전성이 높음 <br> - 안전성 확보를 위해 MongoDB inc 를 통해 기술 지원 가능 | - Column Family 데이터 저장 구조 제공 (Key Value 타입에 유리) <br> - 사용자 Interface 매우 나쁨(HBase)<br> - 트랜잭션 처리가 매우 낮음 <br> - 비영리 단체 Apache 재단에 개발됨 <br> - 각 Sub-System은 여러개 프로젝트에서 개발되기 때문에 버전 관리가 용이하지 않으며 연동시 버그 발생율이 높음 <br> - Apache 재단에서 직접 기술 지원이 안됨  |


# 5. MongoDB란?
1. Humongos라는 회사의 제품명이었으며 현재 MongoDB.inc로 회사명이 변경됨
2. JSON Type의 데이터 저장 구조를 제공한다. 
3. Sharding(분산)/Replica(복제) 기능을 제공한다. 
4. MapReduce(분산/병령처리) 기능을 제공한다. 
5. CRUD 위주의 다중 트랜잭션 처리도 가능하다.
6. Memory Mapping 기술을 기반으로 BigData처리에 탁월한 성능을 제공한다.

# 6. 관계형 데이터베이스와의 용어 비교
1. TABLE -> COLLECTION 
2. ROW -> DOCUMENT
3. COLUMN -> FIELD
4. PRIMARY KEY -> OBJECT_ID Field
5. RELATIONSHIP -> EMBEDED & LINK

# 7. 설치 가능한 플랫폼
1. Window 32 Bit / 64 Bit
2. Linux 32 Bit / 64 Bit
3. Unix Solaris 32 Bit / 64 Bit
4. Mac OS X-32 Bit / 64 Bit

# 8. 지원 드라이버
1. C / C# / C++
2. JAVA/JAVA Script
3. Perl/PHP/Python
4. Ruby/Erlang/Haskell/Scala/기타


