# Dl(Defendency Injection )

의존 주입을 말한다.

의존 주입이란 다음과 같은 것을 말한다.

~~~java
class Area{
		public int getArea(int a, int b){
      	return a * b;
    }
}
class Volume{
  	public int getVolume(int a, int b, int h){
      	Area area = new Area(); // Volume 클래스는 Area 클래스를 의존함.
      	return area.getArea(a,b) * h;
    }
}
class Main{
  public static void main(String[] args){
			Volume volume = new Volume();
    	int result = volume.getVolume(10,20,5);
    	System.out.println(result); // 1000
  }
}
~~~

하지만 위 방식은 매번 생성을 해야 하기 때문에 비효율적이다.  예를 들어 다음과 같은 코드를 보자 

~~~~java
class PencilA {
  	public void write(){
      	System.out.println('A 연필');
    }
}
class PencilB {
  	public void write(){
      	System.out.println('B 연필');
    }
}

class Main{
  public static void main(String[] args){
			PencilA pencil = new PencilA();
    	pencil.write(); // A 연필
  }
}

~~~~

위의 예제 코드에서 'B 연필' 로 바꾸려면 Main 클래스의  Pencil생성자를 바꿔줘야 한다. 

하지만 외부 생성자와 인터페이스를 사용하면 그럴 필요가 없다. 

~~~java
interface Pencil {
  	public void write();
}
class PencilA implements Pencil{
  	public void write(){
      	System.out.println('A 연필');
    }
}
class PencilB implements Pencil{
  	public void write(){
      	System.out.println('B 연필');
    }
}
~~~

~~~xml
<bean id="pencil" class="PencilA"></bean>
~~~

~~~java
class Main{
  public static void main(String[] args){
    	String configLoc= "classpath:applicationCTX.xml";
			AbstractApplicationContext ctx = new GenericXmlApplicationContext(configLoc);
			Pencil pencil = ctx.getBean("pencil", Pencil.class); // Pencil 인터페이스
    	pencil.write(); // A 연필
  }
}	
~~~

빈 객체만 변경하면  main은 건드릴 필요가 없다. 

~~~xml
<bean id="pencil" class="PencilB"></bean>
~~~

~~~java
class Main{
  public static void main(String[] args){
    	String configLoc= "classpath:applicationCTX.xml";
			AbstractApplicationContext ctx = new GenericXmlApplicationContext(configLoc);
			Pencil pencil = ctx.getBean("pencil", Pencil.class); // Pencil 인터페이스
    	pencil.write(); // B 연필
  }
}	
~~~

규모가 큰 프로젝트일수록 차이가 커진다.

# IOC (Inversion of control)

외부에서 생성된 빈 객체를 담는 컨테이너를 의미한다.

