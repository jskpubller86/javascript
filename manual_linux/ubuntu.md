# 1. 한글 설치 
## 1.1. 한글 팩 설치

~~~bash
$ sudo apt-get install language-pack-ko
$ sudo apt-get install language-pack-ko-base
~~~

## 1.2. 한글 팩 선택

~~~bash
$ apt-get install localepurge  # 설정 스크립트가 뜨면 euckr 선택
~~~



iptables 포트 열기

~~~
iptables -I INPUT 1 -p tcp --dport 80 -j ACCEPT
iptables -I OUTPUT 1 -p tcp --dport 80 -j ACCEPT
iptables 포트 포워딩 설정
~~~

// 80 포트를 9042로 포워딩

~~~
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 9042
iptables 포트 포워딩 삭제
iptables -t nat -D PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 9042
iptables 확인
iptables -t nat -L
~~~



# 2. 패키지 확인 

~~~
$ dpkg -l | grep apache2
~~~