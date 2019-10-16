# @RequestMapping

컨트롤에서 사용되며 URI를 매핑 시켜준다. 

~~~java
@Controller
public class MemberController {
		@RequestMapping("/memeber/login") // host 부분을 제외한 URI를 지정
  	public String login(Model model)
    {
    	 // TO-DO  
    }
}
~~~

요청 메서드도 지정할 수 있다.

~~~java
@Controller
public class MemberController {
    // host 부분을 제외한 URI를 지정
    @RequestMapping("/memeber/login", method = RequestMethod.POST)
    public String login(Model model)
    {
         // TO-DO  
    }
}
~~~

요청 메서드를 간추려 표현할 수 있다. 단, 대문자로 표현한다. 이거 스프링 버전에 따라 좀 다르다. 

~~~java
@Controller
public class MemberController {
    @RequestMapping("/memeber/login", method = POST) 
    public String login(Model model)
    {
         // TO-DO  
    }
}
~~~

메소드는 배열형태로 지정할 수 있다. 

~~~java
@Controller
public class MemberController {
    @RequestMapping("/memeber/login", method = {POST, GET}) 
    public String login(Model model)
    {
         // TO-DO  
    }
}
~~~

