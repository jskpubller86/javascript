
# 1. JSON 타입과 BSON 타입
몽고 DB에서는 모든 데이터는 반드시 JSON 타입으로 표현되지만 데이터 베이스를 저장할 경우 BSON 타입으로 저장된다. <br>
BSON 타입은 JSON 타입과 마찬가지로 name과 value 형식으로 이루어지는데 다른 점은 name과 value를 binary 타입으로 변환하는 것이다.

# 2. Data Type 종류
몽고디비에서는 다양한 데이터 타입을 제공한다. 

## 2.1. OBJECT_ID 타입
도큐먼트를 식별할 수 있는 유일한 값이며 관계형 데이터 베이스에서 PRIMARY-KEY에 해당한다. <br>
주요 특징은 다음과 같다. <br>

- 12 Byte의 Binary 값으로 구성된다.
- 하나의 도큐먼트에는 유일한 값인 Object ID가 부여된다. 
- Default Object ID와는 별도로 사용자가 직접 Object ID를 부여할 수 있다.
