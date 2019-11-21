

# CSS Animatable

### Definition and Usage

몇 css 속성들은 움직임에 대한 것이며, 그것은 애니이션과 변화에 사용될 수 있음을 의미한다. 

Animatable 속성들은 size, numbers, percentage 그리고 색상과 같은 값들로 부터 점차적으로 변할 수 있다.

-----


### Browser Support

테이블 안에 있는 숫자는 calc()를 지원해주는 첫번째 버전입니다. 

숫자에 붙은 -webkit- , -moz- , or -o- 는 prefix를 붙여 작업할 수 있는 첫번째 버전입니다.

| ![img](https://www.w3schools.com/images/compatible_chrome.gif) | ![img](https://www.w3schools.com/images/compatible_edge.gif) | ![img](https://www.w3schools.com/images/compatible_firefox.gif) | ![img](https://www.w3schools.com/images/compatible_safari.gif) | ![img](https://www.w3schools.com/images/compatible_opera.gif) |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                    43.0<br/>4.0 -webkit-                     |                             10.0                             |                      16.0<br/>5.0 -moz-                      |                     9.0<br/>4.0 -webkit-                     |             30.0<br/>15.0 -webkit-<br/>12.0 -o-              |

-----



### Example

background-color를 red에서 blue로 애니메이션 합니다.

~~~css
/* Code for old Chrome, Safari and Opera */
@-webkit-keyframes mymove {
  from {background-color: red;}
  to {background-color: blue;}
}

/* Standard syntax */
@keyframes mymove {
  from {background-color: red;}
  to {background-color: blue;}
}
~~~

----

### Animatable Properties

애니메이션 되는 속성들은 다음 표와 같다.


| **Property**                                                 |      |
| ------------------------------------------------------------ | ---- |
| [background](https://www.w3schools.com/cssref/css3_pr_background.asp) |     [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_background) |
| [background-color](https://www.w3schools.com/cssref/pr_background-color.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_background-color)     |
| [background-position](https://www.w3schools.com/cssref/pr_background-position.asp) |   [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_background-position)   |
| [background-size](https://www.w3schools.com/cssref/css3_pr_background-size.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_background-size)    |
| [border](https://www.w3schools.com/cssref/pr_border.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border)     |
| [border-bottom](https://www.w3schools.com/cssref/pr_border-bottom.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-bottom)    |
| [border-bottom-color](https://www.w3schools.com/cssref/pr_border-bottom_color.asp)| [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-bottom-color)      |
| [border-bottom-left-radius](https://www.w3schools.com/cssref/css3_pr_border-bottom-left-radius.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-bottom-left-radius)    |
| [border-bottom-right-radius](https://www.w3schools.com/cssref/css3_pr_border-bottom-right-radius.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-bottom-right-radius)     |
| [border-bottom-width](https://www.w3schools.com/cssref/pr_border-bottom_width.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-bottom-width)    |
| [border-color](https://www.w3schools.com/cssref/pr_border-color.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-color)    |
| [border-left](https://www.w3schools.com/cssref/pr_border-left.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-left)      |
| [border-left-color](https://www.w3schools.com/cssref/pr_border-left_color.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-left-color)    |
| [border-left-width](https://www.w3schools.com/cssref/pr_border-left_width.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-left-width)    |
| [border-right](https://www.w3schools.com/cssref/pr_border-right.asp)|    [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-right)   |
| [border-right-color](https://www.w3schools.com/cssref/pr_border-right_color.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-right-color)    |
| [border-right-width](https://www.w3schools.com/cssref/pr_border-right_width.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-right-width)    |
| [border-spacing](https://www.w3schools.com/cssref/pr_border-spacing.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-spacing)     |
| [border-top](https://www.w3schools.com/cssref/pr_border-top.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-top)     |
| [border-top-color](https://www.w3schools.com/cssref/pr_border-top_color.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-top-color)    |
| [border-top-left-radius](https://www.w3schools.com/cssref/css3_pr_border-top-left-radius.asp) |    [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-top-left-radius)  |
| [border-top-right-radius](https://www.w3schools.com/cssref/css3_pr_border-top-right-radius.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-top-right-radius)    |
| [border-top-width](https://www.w3schools.com/cssref/pr_border-top_width.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_border-top-width)    |
| [bottom](https://www.w3schools.com/cssref/pr_pos_bottom.asp)| [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_bottom)      |
| [box-shadow](https://www.w3schools.com/cssref/css3_pr_box-shadow.asp) |   [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_box-shadow)   |
| [clip](https://www.w3schools.com/cssref/pr_pos_clip.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_clip)     |
| [color](https://www.w3schools.com/cssref/pr_text_color.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_color)    |
| [column-count](https://www.w3schools.com/cssref/css3_pr_column-count.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_column-count)    |
| [column-gap](https://www.w3schools.com/cssref/css3_pr_column-gap.asp) |   [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_column-gap)   |
| [column-rule](https://www.w3schools.com/cssref/css3_pr_column-rule.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_column-rule)    |
| [column-rule-color](https://www.w3schools.com/cssref/css3_pr_column-rule-color.asp) |   [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_column-rule-color)   |
| [column-rule-width](https://www.w3schools.com/cssref/css3_pr_column-rule-width.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_column-rule-width)     |
| [column-width](https://www.w3schools.com/cssref/css3_pr_column-width.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_column-width)    |
| [columns](https://www.w3schools.com/cssref/css3_pr_columns.asp)|  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_columns)     |
| [filter](https://www.w3schools.com/cssref/css3_pr_filter.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_filter)    |
| [flex](https://www.w3schools.com/cssref/css3_pr_flex.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_flex)     |
| [flex-basis](https://www.w3schools.com/cssref/css3_pr_flex-basis.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_flex-basis)    |
| [flex-grow](https://www.w3schools.com/cssref/css3_pr_flex-grow.asp) |   [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_flex-grow)   |
| [flex-shrink](https://www.w3schools.com/cssref/css3_pr_flex-shrink.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_flex-shrink)    |
| [font](https://www.w3schools.com/cssref/pr_font_font.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_font)     |
| [font-size](https://www.w3schools.com/cssref/pr_font_font-size.asp) |      |
| [font-size-adjust](https://www.w3schools.com/cssref/css3_pr_font-size-adjust.asp) |      |
| [font-stretch](https://www.w3schools.com/cssref/css3_pr_font-stretch.asp) |      |
| [font-weight](https://www.w3schools.com/cssref/pr_font_weight.asp) |    [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_font-weight)  |
| [height](https://www.w3schools.com/cssref/pr_dim_height.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_height)    |
| [left](https://www.w3schools.com/cssref/pr_pos_left.asp)|  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_left)     |
| [letter-spacing](https://www.w3schools.com/cssref/pr_text_letter-spacing.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_letter-spacing)    |
| [line-height](https://www.w3schools.com/cssref/pr_dim_line-height.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_line-height)     |
| [margin](https://www.w3schools.com/cssref/pr_margin.asp)|  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_margin)     |
| [margin-bottom](https://www.w3schools.com/cssref/pr_margin-bottom.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_margin-bottom)    |
| [margin-left](https://www.w3schools.com/cssref/pr_margin-left.asp) |    [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_margin-left)  |
| [margin-right](https://www.w3schools.com/cssref/pr_margin-right.asp) |   [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_margin-right)   |
| [margin-top](https://www.w3schools.com/cssref/pr_margin-top.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_margin-top)   |
| [max-height](https://www.w3schools.com/cssref/pr_dim_max-height.asp) |   [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_max-height)   |
| [max-width](https://www.w3schools.com/cssref/pr_dim_max-width.asp)|  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_max-width)     |
| [min-height](https://www.w3schools.com/cssref/pr_dim_min-height.asp) |   [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_min-height)   |
| [min-width](https://www.w3schools.com/cssref/pr_dim_min-width.asp) |     [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_min-width) |
| [object-position](https://www.w3schools.com/cssref/css3_pr_object-position.asp) |   [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_object-position)   |
| [opacity](https://www.w3schools.com/cssref/css3_pr_opacity.asp)| [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_opacity)      |
| [order](https://www.w3schools.com/cssref/css3_pr_order.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_order)    |
| [outline](https://www.w3schools.com/cssref/pr_outline.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_outline)    |
| [outline-color](https://www.w3schools.com/cssref/pr_outline-color.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_outline-color)    |
| [outline-offset](https://www.w3schools.com/cssref/css3_pr_outline-offset.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_outline-offset)    |
| [outline-width](https://www.w3schools.com/cssref/pr_outline-width.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_outline-width)    |
| [padding](https://www.w3schools.com/cssref/pr_padding.asp) |   [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_padding)   |
| [padding-bottom](https://www.w3schools.com/cssref/pr_padding-bottom.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_padding-bottom)     |
| [padding-left](https://www.w3schools.com/cssref/pr_padding-left.asp) |    [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_padding-left)  |
| [padding-right](https://www.w3schools.com/cssref/pr_padding-right.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_padding-right)    |
| [padding-top](https://www.w3schools.com/cssref/pr_padding-top.asp) |     [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_padding-top) |
| [perspective](https://www.w3schools.com/cssref/css3_pr_perspective.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_perspective)    |
| [perspective-origin](https://www.w3schools.com/cssref/css3_pr_perspective-origin.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_perspective-origin)     |
| [right](https://www.w3schools.com/cssref/pr_pos_right.asp)|  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_right)     |
| [text-decoration-color](https://www.w3schools.com/cssref/css3_pr_text-decoration-color.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_text-decoration-color)     |
| [text-indent](https://www.w3schools.com/cssref/pr_text_text-indent.asp)| [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_text-indent)      |
| [text-shadow](https://www.w3schools.com/cssref/css3_pr_text-shadow.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_text-shadow)     |
| [top](https://www.w3schools.com/cssref/pr_pos_top.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_top)    |
| [transform](https://www.w3schools.com/cssref/css3_pr_transform.asp) | [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_transform)     |
| [transform-origin](https://www.w3schools.com/cssref/css3_pr_transform-origin.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_transform-origin)    |
| [vertical-align](https://www.w3schools.com/cssref/pr_pos_vertical-align.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_vertical-align)    |
| [visibility](https://www.w3schools.com/cssref/pr_class_visibility.asp) |      |
| [width](https://www.w3schools.com/cssref/pr_dim_width.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_width)    |
| [word-spacing](https://www.w3schools.com/cssref/pr_text_word-spacing.asp) |  [Try it](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_anim_word-spacing)    |
| [z-index](https://www.w3schools.com/cssref/pr_pos_z-index.asp) |      |





