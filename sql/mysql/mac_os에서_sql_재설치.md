# homebrew를 이용한 재설치

먼저 sql 서버가 작동인지 확인을 한다.

~~~~bash
$ brew services list
/*
Name    Status  User    Plist
emacs   stopped         
mysql   started jskim86 /Users/jskim86/Library/LaunchAgents/homebrew.mxcl.mysql.plist
*/
~~~

실행 중인 mysql을 멈춘다. 

~~~~bash
$ brew services stop mysql
# ==> Successfully stopped `mysql` (label: homebrew.mxcl.mysql)
~~~~

기존에 사용중이던 디렉터리를 삭제한다. 

~~~~bash
$ rm -rf /usr/local/var/mysql
~~~~

mysql을 uninstall 한다. 

~~~~bash
$ brew uninstall mysql
~~~~

서비스가 삭제되었는지 확인 

~~~bash
$ brew services list
/*
Name    Status  User    Plist
emacs   stopped         
*/
~~~

삭제되었다면  mysql을 검색한다. 

~~~bash
$ brew search mysql
~~~

