# ruby로 컴파일 하기 

먼저 ruby를 설치한다. ([윈도우용 ruby : http://rubyinstaller.org/](http://rubyinstaller.org/))

참고로 맥은 기본적으로 설치되어 있다.

ruby 설치 후 Command 창으로 들어가서

~~~ bash
gem install sass
~~~

Sass가 설치된다.

### 컴파일 하기

한개의 파일을 컴파일 하는 방법은

~~~bash
sass input.scss output.css
~~~

앞이 컴파일을 하는 scss 파일이고, 뒤에 css 파일명이 컴파일 후 생성되는 파일 이름이다.

이렇게 하면 output.css 파일과 output.map 파일이 생기는데, output.css는 컴파일이 진행된 파일이고, map 파일은 scss 와 css가 어떻게 연결 되어 있는지에 대한 정보 파일 정도로 이해 하면 된다.

매번 컴파일을 할 수는 없기 때문에, 파일이 변경 되면 자동으로 컴파일 하도록 설정할 수 있는데,

~~~bash
sass --watch input.scss:output.css
~~~

현재 폴더에서 src/sass 폴더를 포함, 자식폴더까지의 모든 .scss파일을
public/stylesheets 폴더에 경로를 맞춰서 컴파일 된다.
가장 무난한 방법이다.
컴파일 스타일을 결정할 수 있는데 --style 옵션을 통해서 할 수 있다.

~~~bash

~~~

