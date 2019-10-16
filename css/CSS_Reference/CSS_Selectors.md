

# CSS Selectors

css에서 선택자는 당신이 원하는 스타일로 만들고 싶은 엘리먼트 선택에 사용될 수 있습니다. 
가상으로 선택자의 차이를 보기위해서 css 선택자 테스터를 사용해라.
<table class="w3-table-all notranslate">
  <tr>
    <th style="width:20%">Selector</th>
    <th style="width:20%">Example</th>
    <th>Example description</th>
  </tr>
  <tr>
    <td><a href="sel_class.asp">.<i>class</i></a></td>
    <td class="notranslate">.intro</td>
    <td>class=&quot;intro&quot; 인 것을 모두 선택한다.</td>
  </tr>
  <tr>
    <td><em>.class1.class2</em></td>
    <td class="notranslate">&lt;div class=&quot;name1 name2&quot;&gt;...&lt;/div&gt;</td>
    <td>클래스 속성값으로 <em>name1</em>과 <em>name2</em>를 포함하는 엘리먼트를 선택한다.</td>
  </tr>  
  <tr>
    <td><em>.class1 .class2</em></td>
    <td class="notranslate">&lt;div class=&quot;name1&quot;&gt;<br>&nbsp; &lt;div class=&quot;name2&quot;&gt;<br>&nbsp;&nbsp;&nbsp; 
    ...<br>&nbsp; &lt;/div&gt;<br>&lt;/div&gt;</td>
    <td>클래스가 <em>name1</em>인 엘리먼트의 하위 엘리먼트 중  클래스가 <em>name2</em>인 것을 선택한다.</td>
  </tr> 
  <tr>
    <td><a href="sel_id.asp">#<i>id</i></a></td>
    <td class="notranslate">#firstname</td>
    <td> id=&quot;firstname&quot;인 것을 선택한다.</td>
  </tr>  <tr>
    <td><a href="sel_all.asp">*</a></td>
    <td class="notranslate">*</td>
    <td>모든 엘리먼트를 선택한다.</td>
  </tr>
  <tr>
    <td><i><a href="sel_element.asp">element</a></i></td>
    <td class="notranslate">p</td>
    <td> &lt;p&gt; 인 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><i><a href="sel_element_comma.asp">element, element</a></i></td>
    <td class="notranslate">div, p</td>
    <td>&lt;div&gt;와  &lt;p&gt;인 요소를 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_element_element.asp"><i>element</i> <i>element</i></a></td>
    <td class="notranslate">div p</td>
    <td>&lt;div&gt; 안에 &lt;p&gt; 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_element_gt.asp"><i>element</i>&gt;<i>element</i></a></td>
    <td class="notranslate">div &gt; p</td>
    <td>&lt;div&gt; 의 자식 요소로 있는 &lt;p&gt; 요소를 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_element_pluss.asp"><i>element</i>+<i>element</i></a></td>
    <td class="notranslate">div + p</td>
    <td>&lt;div&gt; 바로 뒤에 오는 형제 요소인 &lt;p&gt; 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_gen_sibling.asp"><i>element1</i>~<i>element2</i></a></td>
    <td>p ~ ul</td>
    <td>&lt;p&gt;  요소 다음에 오는 형제 요소들 중  모든 &lt;ul&gt; 요소들을 선택한다.  </td>
  </tr>
  <tr>
    <td><a href="sel_attribute.asp">[<i>attribute</i>]</a></td>
    <td class="notranslate">[target]</td>
    <td>target 속성이 있는 모든 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_attribute_value.asp">[<i>attribute</i>=<i>value</i>]</a></td>
    <td class="notranslate">[target=_blank]</td>
    <td>target=&quot;_blank&quot;인 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_attribute_value_contains.asp">[<i>attribute</i>~=<i>value</i>]</a></td>
    <td class="notranslate">[title~=flower]</td>
    <td>title 속성 값 중에  온전한 &quot;flower&quot; 단어가 포함된 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_attribute_value_lang.asp">[<i>attribute</i>|=<i>value</i>]</a></td>
    <td class="notranslate">[lang|=en]</td>
    <td>lang 속성 값이 온전한 &quot;en&quot;으로 시작하면서 하이픈으로 연결된  단어가 있는   요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_attr_begin.asp">[<i>attribute</i>^=<i>value</i>]</a></td>
    <td>a[href^=&quot;https&quot;]</td>
    <td>&lt;a&gt; 요소에서 href 속성 값이  온전한 &quot;https&quot; 단어로 시작한  요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_attr_end.asp">[<i>attribute</i>$=<i>value</i>]</a></td>
    <td>a[href$=&quot;.pdf&quot;]</td>
    <td>&lt;a&gt; 요소 중에서 href 속성 값이  온전한 &quot;.pdf&quot;로 끝나는 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_attr_contain.asp">[<i>attribute</i>*=<i>value</i>]</a></td>
    <td>a[href*=&quot;w3schools&quot;]</td>
    <td>&lt;a&gt; 요소 중에서 href 속성 값에  &quot;w3schools&quot; 포함된 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_active.asp">:active</a></td>
    <td class="notranslate">a:active</td>
    <td>활성화된 링크 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_after.asp">::after</a></td>
    <td class="notranslate">p::after</td>
    <td>&lt;p&gt; 요소에 가상의 after 요소를 추가한다.</td>
  </tr>
  <tr>
    <td><a href="sel_before.asp">::before</a></td>
    <td class="notranslate">p::before</td>
    <td>&lt;p&gt; 요소에 가상의 before 요소를 추가한다.</td>
  </tr>
  <tr>
    <td><a href="sel_checked.asp">:checked</a></td>
    <td>input:checked</td>
    <td> &lt;input&gt; 요소 중에 checked가 된 요소를 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_default.asp">:default</a></td>
    <td>input:default</td>
    <td>&lt;input&gt;요소 중에 default인 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_disabled.asp">:disabled</a></td>
    <td>input:disabled</td>
    <td>&lt;input&gt; 요소 중에 disabled가 된 요소를 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_empty.asp">:empty</a></td>
    <td>p:empty</td>
    <td> &lt;p&gt; 요소 중에 텍스트 노드를 포함해서 자식 요소가 없는 요소를 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_enabled.asp">:enabled</a></td>
    <td>input:enabled</td>
    <td>&lt;input&gt; 요소 중에 enable 상태인 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_firstchild.asp">:first-child</a></td>
    <td class="notranslate">p:first-child</td>
    <td>&lt;p&gt; 요소가 부모 요소의 첫번째 자식인 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_firstletter.asp">::first-letter</a></td>
    <td class="notranslate">p::first-letter</td>
    <td>&lt;p&gt;요소 안의 첫번째 글자를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_firstline.asp">::first-line</a></td>
    <td class="notranslate">p::first-line</td>
    <td>&lt;p&gt;요소 안의  첫번째 줄을 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_first-of-type.asp">:first-of-type</a></td>
    <td>p:first-of-type</td>
    <td>&lt;p&gt; 요소가 부모 요소의 첫번째 &lt;p&gt; 인 요소를 선택한다.  순서를  &lt;p&gt; 요소만으로 한정 지어 정한다.   </td>
  </tr>
  <tr>
    <td><a href="sel_focus.asp">:focus</a></td>
    <td class="notranslate">input:focus</td>
    <td> input 요소 중  focus가 된 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_hover.asp">:hover</a></td>
    <td class="notranslate">a:hover</td>
    <td> a 요소 중 :hover 상태인 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_in-range.asp">:in-range</a></td>
    <td class="notranslate">input:in-range</td>
    <td>input 요소의 value 속성의 값이 min 속성값과 max 속성값의 범위 안에 있는 요소를 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_indeterminate.asp">:indeterminate</a></td>
    <td class="notranslate">input:indeterminate</td>
    <td>input 요소들 중 값이 불확실한 요소를 선택한다. 같은 name 속성값을 가진 input 요소가 모두 선택이 안되거나 체크박스가 초기에 아무런 값없이 로드되었을 때가 indeterminate 상태이다.</td>
  </tr>
  <tr>
    <td><a href="sel_invalid.asp">:invalid</a></td>
    <td class="notranslate">input:invalid</td>
    <td>input 요소들 중 "value" 속성의 값이 유효성 검사를 통과하지 못한 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_lang.asp">:lang(<i>language</i>)</a></td>
    <td class="notranslate">p:lang(it)</td>
    <td>&lt;p&gt; 요소 중  lang 속성 값이 &quot;it&quot; (Italian) 인 요소를 선택한다. lang 속성은 언어를 지정한다.</td>
  </tr>
  <tr>
    <td><a href="sel_last-child.asp">:last-child</a></td>
    <td>p:last-child</td>
    <td>&lt;p&gt;가 보모요소의 자식요소들 중 마지막 자식 요소인 것을 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_last-of-type.asp">:last-of-type</a></td>
    <td>p:last-of-type</td>
    <td>&lt;p&gt; 요소의 부모 요소의  &lt;p&gt; 자식 요소들 중 마지막 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_link.asp">:link</a></td>
    <td class="notranslate">a:link</td>
    <td>방문하지 않은 링크 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_not.asp">:not(<i>selector</i>)</a></td>
    <td>:not(p)</td>
    <td>&lt;p&gt; 요소가 아닌 요소들을 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_nth-child.asp">:nth-child(<i>n</i>)</a></td>
    <td>p:nth-child(2)</td>
    <td>&lt;p&gt; 요소의 부모 요소의 자식 요소들 중 2번째이면서 &lt;p&gt;인 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_nth-last-child.asp">:nth-last-child(<i>n</i>)</a></td>
    <td>p:nth-last-child(2)</td>
    <td>&lt;p&gt; 요소의 부모 요소의 자식 요소들 중 마지막에서 2번째이면서 &lt;p&gt;인 요소를 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_nth-last-of-type.asp">:nth-last-of-type(<i>n</i>)</a></td>
    <td>p:nth-last-of-type(2)</td>
    <td>&lt;p&gt; 요소의 부모 요소의 자식 요소들 중 &lt;p&gt; 들 만 모아서 그중에 마지막에서 2번째인 요소를 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_nth-of-type.asp">:nth-of-type(<i>n</i>)</a></td>
    <td>p:nth-of-type(2)</td>
    <td>&lt;p&gt; 요소의 부모 요소의 자식 요소들 중 &lt;p&gt; 요소들만 모아서 그중에서 2번째인 요소를 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_only-of-type.asp">:only-of-type</a></td>
    <td>p:only-of-type</td>
    <td>&lt;p&gt; 요소의 부모 요소의 자식 요소들 중  &lt;p&gt;요소가 유일하면 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_only-child.asp">:only-child</a></td>
    <td>p:only-child</td>
    <td>&lt;p&gt; 요소의 부모 요소의 자식요소가 &lt;p&gt; 하나이면 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_optional.asp">:optional</a></td>
    <td class="notranslate">input:optional</td>
    <td>옵션이 있는 input 요소를 선택합니다. 단 , "required" 속성은 포함하지 않습니다.</td>
  </tr>
  <tr>
    <td><a href="sel_out-of-range.asp">:out-of-range</a></td>
    <td class="notranslate">input:out-of-range</td>
    <td>input 요소의 값이 지정한 범위를 벗어나면 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_placeholder.asp">::placeholder</a></td>
    <td class="notranslate">input::placeholder</td>
    <td>input 요소 중에 "placeholder"가 명시된 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_read-only.asp">:read-only</a></td>
    <td class="notranslate">input:read-only</td>
    <td>input 요소들 중 읽기 전용 속성인 "read-only"가 되어 있는 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_read-write.asp">:read-write</a></td>
    <td class="notranslate">input:read-write</td>
    <td>input 요소들 중 "read-only"가 되어 있지 않은 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_required.asp">:required</a></td>
    <td class="notranslate">input:required</td>
    <td>input 요소들 중 "required" 속성인 명시된 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_root.asp">:root</a></td>
    <td>:root</td>
    <td>document의 root 요소를 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_selection.asp">::selection</a></td>
    <td>::selection</td>
    <td>유저가 선택했던 요소를  선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_target.asp">:target</a></td>
    <td>#news:target </td>
    <td>id="news"인 요소와 연결된 anchor가 활성화가 되면 선택한다.</td>
  </tr>
  <tr>
    <td><a href="sel_valid.asp">:valid</a></td>
    <td class="notranslate">input:valid</td>
    <td>input 요소들 중에  "value" 속성의 값이 유효성 검사를 통과한 요소를 선택한다. </td>
  </tr>
  <tr>
    <td><a href="sel_visited.asp">:visited</a></td>
    <td class="notranslate">a:visited</td>
    <td>방문한적이 있는  link 요소들을 선택한다.</td>
  </tr>
</table>






