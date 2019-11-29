# Code Guide

- [文件命名规则](#code-guide_文件命名规则)
    - [模板文件（htm, tpl 等）命名](#code-guide_文件命名规则_模板文件-htm-tpl-等-命名)
    - [SCSS(css)文件命名](#code-guide_文件命名规则_scss-css-文件命名)
    - [JS文件命名](#code-guide_文件命名规则_js文件命名)
- [HTML](#code-guide_html)
    - [语法](#code-guide_html_语法)
    - [属性顺序](#code-guide_html_属性顺序)
    - [boolean属性](#code-guide_html_boolean属性)
    - [JS生成标签](#code-guide_html_js生成标签)
    - [减少标签数量](#code-guide_html_减少标签数量)
    - [实用高于完美](#code-guide_html_实用高于完美)
- [CSS, SCSS](#code-guide_css-scss)
    - [缩进](#code-guide_css-scss_缩进)
    - [分号](#code-guide_css-scss_分号)
    - [空格](#code-guide_css-scss_空格)
    - [空行](#code-guide_css-scss_空行)
    - [换行](#code-guide_css-scss_换行)
    - [注释](#code-guide_css-scss_注释)
    - [引号](#code-guide_css-scss_引号)
    - [命名](#code-guide_css-scss_命名)
    - [属性声明顺序](#code-guide_css-scss_属性声明顺序)
    - [颜色](#code-guide_css-scss_颜色)
    - [属性简写](#code-guide_css-scss_属性简写)
    - [SCSS相关](#code-guide_css-scss_scss相关)
    - [杂项](#code-guide_css-scss_杂项)
- [JavaScript](#code-guide_javascript)
    - [缩进](#code-guide_javascript_缩进)
    - [单行长度](#code-guide_javascript_单行长度)
    - [分号](#code-guide_javascript_分号)
    - [空格](#code-guide_javascript_空格)
    - [空行](#code-guide_javascript_空行)
    - [换行](#code-guide_javascript_换行)
    - [注释](#code-guide_javascript_注释)
    - [变量、函数、常量、构造函数命名](#code-guide_javascript_变量、函数、常量、构造函数命名)
    - [直接量](#code-guide_javascript_直接量)
    - [变量声明](#code-guide_javascript_变量声明)
    - [函数](#code-guide_javascript_函数)
    - [数组、对象](#code-guide_javascript_数组、对象)
    - [括号](#code-guide_javascript_括号)
    - [null](#code-guide_javascript_null)
    - [undefined](#code-guide_javascript_undefined)
    - [杂项](#code-guide_javascript_杂项)
        

## 文件命名规则
### 模板文件（htm, tpl 等）命名
- 全部采用小写方式。
- 一个以上的单词以下划线分隔。

例：
	
```
index.htm
header_login_ty.htm
post_activity.htm
viewthread_mod.htm
```
	

### SCSS(css)文件命名
1. 页面级 scss
	- 全部采用小写方式。
	- 文件名对应模板所在文件夹以及模板文件名。
	- 一个以上的单词以下划线分隔。

	例：
	
	```
	以天眼为例：
	模板位置(省略了前边的目录 p2peye/template/131120/)：
	portal/index.htm
	
	对应的 scss 文件应该命名为：
	portal_index.scss	
	```
	
2. 公用 scss
	- 下划线开头
	- 全部采用小写方式。
	- 一个以上的单词以下划线分隔。

	例：
	
	```
	_footer.scss
	_mreset.scss
	_utils.scss
	```

### JS文件命名
1. 页面级 js
	- 全部采用小写方式。
	- 一个以上的单词以下划线分隔。
	- js 文件位置 和 模板所在位置对称。

	例：
	
	```
	以天眼为例：
	PC模板位置(省略了前边的目录 sites/p2peye/template/131120/)：
	portal/index.htm
	
	对应的 js 文件应该为(省略了前边的目录 sites/net_resources/static/scripts/p2peye/pc/)：
	portal/index.js
	

	H5模板位置(省略了前边的目录 sites/p2peye/template/131120/touch/)：
	portal/index.htm
	
	对应的 js 文件应该为(省略了前边的目录 sites/net_resources/static/scripts/p2peye/mobile/)：
	portal/index.js	
	```
	
2. 公用 js
	- 全部采用小写方式。
	- 一个以上的单词以下划线分隔。

	例：
	
	```
	index_header.js
	mobile_popup.js
	seo_sem_adv_h5.js
	```

## HTML
### 语法
- 缩进使用soft tab（4个空格）；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线做分隔符；

```html
<!DOCTYPE html>
<html>
    <head>
        <title>title</title>
    </head>
    <body>
        <img src="images/logo.png" alt="Company">
        <h1 class="hello-world">Hello, world!</h1>
    </body>
</html>
```

### 属性顺序
属性应该按照特定的顺序出现以保证易读性；

- class
- id
- name
- data-*
- src, for, type, href, value , max-length, max, min, pattern
- placeholder, title, alt
- aria-*, role
- required, readonly, disabled

<!--class是为高可复用组件设计的，所以应处在第一位；-->

<!--id更加具体且应该尽量少使用，所以将它放在第二位。-->

```html
<a class="..." id="..." data-modal="toggle" href="#">Example link</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

### 类名
- 全部采用小写方式。
- 一个以上的单词以中划线分隔。
- 遵循模块化命名规范，参考[AliceUI](http://aliceui.github.io/docs/rule.html#%E6%A8%A1%E5%9D%97%E5%8C%96%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83)

```html
<!-- 不好的写法 -->
<div class="ui-box">
   <h3 class="title"></h3>
   <p class="conent"></p>
</div>

<!-- 好的写法 -->
<div class="ui-box">
   <h3 class="ui-box-title"></h3>
   <p class="ui-box-conent"></p>
</div>
```


### boolean属性
boolean属性指不需要声明取值的属性，XHTML需要每个属性声明取值，但是HTML5并不需要；

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
    <option value="1" selected>1</option>
</select>
```
### JS生成标签

在JS文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。


### 减少标签数量

在编写HTML代码时，需要尽量避免多余的父节点；

其实在更多时候，我们需要通过迭代和重构来使 HTML 变得更少。

### 实用高于完美

尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；

任何时候都要用 __尽量小的复杂度__ 和 __尽量少的标签__ 来解决问题。

## CSS, SCSS
### 缩进
使用soft tab（4个空格）。

```css
.element {
    position: absolute;
    top: 10px;
    left: 10px;

    border-radius: 10px;
    width: 50px;
    height: 50px;
}
```
### 分号
每个属性的末尾都要加分号。

### 空格
1. 以下几种情况不需要空格：
	- 属性名后
	- 多个规则的分隔符 ``` , ``` 前
	- ``` !important ``` 的 ``` ! ``` 后
	- 属性值中 ``` ( ``` 后和 ``` ) ``` 前
	- 行末不要有多余的空格

2. 以下几种情况需要空格：
	- 属性值前
	- 选择器``` >, +, ~ ```前后
	- ``` { ``` 前
	- ``` !important ``` 的 ``` ! ``` 前
	- ``` @else ``` 前后
	- 属性值中的 ``` , ``` 后
	- 注释``` /* ```后和 ``` */ ```前


	```css
	/* 不好的写法（!important 的 '!' 前没有空格，而后有空格） */
	.element {
	    color :red! important;
	    background-color: rgba(0,0,0,.5);
	}
	
	/* 好的写法 */
	.element {
	    color: red !important;
	    background-color: rgba(0, 0, 0, .5);
	}
	
	/* 不好的写法（逗号前有空格） */
	.element ,
	.dialog{
	    ...
	}
	
	/* 好的写法 */
	.element,
	.dialog {
	
	}
	
	/* 不好的写法（ '>' 前后没有空格） */
	.element>.dialog{
	    ...
	}
	
	/* 好的写法 */
	.element > .dialog{
	    ...
	}
	
	/* 不好的写法（'{' 前没有空格） */
	.element{
	    ...
	}
	
	/* 好的写法 */
	.element {
	    ...
	}
	
	/* 不好的写法（'{' 前没有空格，'@else' 前后没有空格） */
	@if{
	    ...
	}@else{
	    ...
	}
	
	/* 好的写法 */
	@if {
	    ...
	} @else {
	    ...
	}
	```

### 空行
以下几种情况需要空行：

- 文件最后保留一个空行
- ``` } ``` 后最好跟一个空行，包括scss中嵌套的规则
- 属性之间需要适当的空行，具体见[属性声明顺序](#属性声明顺序)

```scss
/* 不好的写法 */
.element {
    ...
}
.dialog {
    color: red;
    &:after {
        ...
    }
}

/* 好的写法 */
.element {
    ...
}

.dialog {
    color: red;

    &:after {
        ...
    }
}
```
### 换行

1. 以下情况不需要换行：
	- ``` { ``` 前
2. 以下几种情况需要换行：
	- ``` { ``` 后和 ``` } ``` 前
	- 每个属性独占一行
	- 多个选择器的分隔符 ``` , ``` 后

	```scss
	/* 不好的写法（'{' 前不需要换行，多个属性在一行） */
	.element
	{color: red; background-color: black;}
	
	/* 好的写法 */
	.element {
	    color: red;
	    background-color: black;
	}
	
	/* 不好的写法 */
	.element, .dialog {
	    ...
	}
	
	/* 好的写法 */
	.element,
	.dialog {
	    ...
	}
	```

### 注释
- 注释统一用 ``` /* */ ``` （scss中也不要用 ``` // ``` ），具体参照下边的写法；
- 缩进与下一行代码保持一致；
- 可位于一个代码行的末尾，与代码间隔一个空格。

```scss
/* Modal header */
.modal-header {
    ...
}

/*
 * Modal header
 */
.modal-header {
    ...
}

.modal-header {
    /* 50px */
    width: 50px;

    color: red; /* color red */
}
```

### 引号
- 最外层统一使用双引号；
- ``` url ``` 的内容要用引号；
- 属性选择器中的属性值需要引号。

```scss
.element:after {
    content: "";
    background-image: url("logo.png");
}

li[data-type="single"] {
    ...
}
```


### 命名
- 类名使用小写字母，以中划线分隔
- id采用小驼峰命名
- scss中的变量、函数、混合、placeholder采用小驼峰命名

```scss
/* class */
.element-content {
    ...
}

/* id */
#myDialog {
    ...
}

/* 变量 */
$colorBlack: #000;

/* 函数 */
@function px2rem($px) {
    ...
}

/* 混合 */
@mixin centerBlock {
    ...
}

/* placeholder */
%myDialog {
    ...
}
```
<!-- placeholder -->



### 属性声明顺序

相关的属性声明按下边的顺序做分组处理，组之间需要有一个空行。

```scss
.declaration-order {
    display: block;
    float: right;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    border: 1px solid #e5e5e5;
    border-radius: 3px;
    width: 100px;
    height: 100px;

    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    text-align: center;

    color: #333;
    background-color: #f5f5f5;

    opacity: 1;
}
/* 以下是推荐的属性的顺序 */

[
    [
        "display",
        "visibility",
        "float",
        "clear",
        "overflow",
        "overflow-x",
        "overflow-y",
        "clip",
        "zoom"
    ],
    [
        "table-layout",
        "empty-cells",
        "caption-side",
        "border-spacing",
        "border-collapse",
        "list-style",
        "list-style-position",
        "list-style-type",
        "list-style-image"
    ],
    [
        "-webkit-box-orient",
        "-webkit-box-direction",
        "-webkit-box-decoration-break",
        "-webkit-box-pack",
        "-webkit-box-align",
        "-webkit-box-flex"
    ],
    [
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index"
    ],
    [
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "-webkit-box-sizing",
        "-moz-box-sizing",
        "box-sizing",
        "border",
        "border-width",
        "border-style",
        "border-color",
        "border-top",
        "border-top-width",
        "border-top-style",
        "border-top-color",
        "border-right",
        "border-right-width",
        "border-right-style",
        "border-right-color",
        "border-bottom",
        "border-bottom-width",
        "border-bottom-style",
        "border-bottom-color",
        "border-left",
        "border-left-width",
        "border-left-style",
        "border-left-color",
        "-webkit-border-radius",
        "-moz-border-radius",
        "border-radius",
        "-webkit-border-top-left-radius",
        "-moz-border-radius-topleft",
        "border-top-left-radius",
        "-webkit-border-top-right-radius",
        "-moz-border-radius-topright",
        "border-top-right-radius",
        "-webkit-border-bottom-right-radius",
        "-moz-border-radius-bottomright",
        "border-bottom-right-radius",
        "-webkit-border-bottom-left-radius",
        "-moz-border-radius-bottomleft",
        "border-bottom-left-radius",
        "-webkit-border-image",
        "-moz-border-image",
        "-o-border-image",
        "border-image",
        "-webkit-border-image-source",
        "-moz-border-image-source",
        "-o-border-image-source",
        "border-image-source",
        "-webkit-border-image-slice",
        "-moz-border-image-slice",
        "-o-border-image-slice",
        "border-image-slice",
        "-webkit-border-image-width",
        "-moz-border-image-width",
        "-o-border-image-width",
        "border-image-width",
        "-webkit-border-image-outset",
        "-moz-border-image-outset",
        "-o-border-image-outset",
        "border-image-outset",
        "-webkit-border-image-repeat",
        "-moz-border-image-repeat",
        "-o-border-image-repeat",
        "border-image-repeat",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height"
    ],
    [
        "font",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "font-size-adjust",
        "font-stretch",
        "font-effect",
        "font-emphasize",
        "font-emphasize-position",
        "font-emphasize-style",
        "font-smooth",
        "line-height",
        "text-align",
        "-webkit-text-align-last",
        "-moz-text-align-last",
        "-ms-text-align-last",
        "text-align-last",
        "vertical-align",
        "white-space",
        "text-decoration",
        "text-emphasis",
        "text-emphasis-color",
        "text-emphasis-style",
        "text-emphasis-position",
        "text-indent",
        "-ms-text-justify",
        "text-justify",
        "letter-spacing",
        "word-spacing",
        "-ms-writing-mode",
        "text-outline",
        "text-transform",
        "text-wrap",
        "-ms-text-overflow",
        "text-overflow",
        "text-overflow-ellipsis",
        "text-overflow-mode",
        "-ms-word-wrap",
        "word-wrap",
        "-ms-word-break",
        "word-break"
    ],
    [
        "color",
        "background",
        "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
        "background-color",
        "background-image",
        "background-repeat",
        "background-attachment",
        "background-position",
        "-ms-background-position-x",
        "background-position-x",
        "-ms-background-position-y",
        "background-position-y",
        "-webkit-background-clip",
        "-moz-background-clip",
        "background-clip",
        "background-origin",
        "-webkit-background-size",
        "-moz-background-size",
        "-o-background-size",
        "background-size"
    ],
    [
        "outline",
        "outline-width",
        "outline-style",
        "outline-color",
        "outline-offset",
        "opacity",
        "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
        "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
        "-ms-interpolation-mode",
        "-webkit-box-shadow",
        "-moz-box-shadow",
        "box-shadow",
        "filter:progid:DXImageTransform.Microsoft.gradient",
        "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
        "text-shadow"
    ],
    [
        "-webkit-transition",
        "-moz-transition",
        "-ms-transition",
        "-o-transition",
        "transition",
        "-webkit-transition-delay",
        "-moz-transition-delay",
        "-ms-transition-delay",
        "-o-transition-delay",
        "transition-delay",
        "-webkit-transition-timing-function",
        "-moz-transition-timing-function",
        "-ms-transition-timing-function",
        "-o-transition-timing-function",
        "transition-timing-function",
        "-webkit-transition-duration",
        "-moz-transition-duration",
        "-ms-transition-duration",
        "-o-transition-duration",
        "transition-duration",
        "-webkit-transition-property",
        "-moz-transition-property",
        "-ms-transition-property",
        "-o-transition-property",
        "transition-property",
        "-webkit-transform",
        "-moz-transform",
        "-ms-transform",
        "-o-transform",
        "transform",
        "-webkit-transform-origin",
        "-moz-transform-origin",
        "-ms-transform-origin",
        "-o-transform-origin",
        "transform-origin",
        "-webkit-animation",
        "-moz-animation",
        "-ms-animation",
        "-o-animation",
        "animation",
        "-webkit-animation-name",
        "-moz-animation-name",
        "-ms-animation-name",
        "-o-animation-name",
        "animation-name",
        "-webkit-animation-duration",
        "-moz-animation-duration",
        "-ms-animation-duration",
        "-o-animation-duration",
        "animation-duration",
        "-webkit-animation-play-state",
        "-moz-animation-play-state",
        "-ms-animation-play-state",
        "-o-animation-play-state",
        "animation-play-state",
        "-webkit-animation-timing-function",
        "-moz-animation-timing-function",
        "-ms-animation-timing-function",
        "-o-animation-timing-function",
        "animation-timing-function",
        "-webkit-animation-delay",
        "-moz-animation-delay",
        "-ms-animation-delay",
        "-o-animation-delay",
        "animation-delay",
        "-webkit-animation-iteration-count",
        "-moz-animation-iteration-count",
        "-ms-animation-iteration-count",
        "-o-animation-iteration-count",
        "animation-iteration-count",
        "-webkit-animation-direction",
        "-moz-animation-direction",
        "-ms-animation-direction",
        "-o-animation-direction",
        "animation-direction"
    ],
    [
        "content",
        "quotes",
        "counter-reset",
        "counter-increment",
        "resize",
        "cursor",
        "-webkit-user-select",
        "-moz-user-select",
        "-ms-user-select",
        "user-select",
        "nav-index",
        "nav-up",
        "nav-right",
        "nav-down",
        "nav-left",
        "-moz-tab-size",
        "-o-tab-size",
        "tab-size",
        "-webkit-hyphens",
        "-moz-hyphens",
        "hyphens",
        "pointer-events"
    ]
]
```


### 颜色
- 颜色16进制用小写字母；
- 颜色16进制尽量用简写。

```scss
/* 不好的写法 */
.element {
    color: #ABCDEF;
    background-color: #001122;
}

/* 好的写法 */
.element {
    color: #abcdef;
    background-color: #012;
}
```

### 属性简写

- 属性简写需要你非常清楚属性值的正确顺序，而且在大多数情况下并不需要设置属性简写中包含的所有值，所以建议尽量分开声明会更加清晰（分开声明也可以避免将你不想覆盖的属性覆盖）；
- ``` margin ``` 和 ``` padding ``` 相反，需要使用简写；
- 常见的属性简写包括： ``` font, background, transition, animation ``` 

```scss
/* 不推荐的写法 */
.element {
    transition: opacity 1s linear 2s;
}

/* 好的写法 */
.element {
    transition-delay: 2s;
    transition-timing-function: linear;
    transition-duration: 1s;
    transition-property: opacity;
}
```

### SCSS相关

- 提交的代码中不要有 ``` @debug ``` ；
- ``` @import ``` 引入的文件不需要开头的 ``` _ ``` 和结尾的 ``` .scss ``` ；
- 使用 ``` aliceUI ``` 模块化命名规则；
- ``` @extend ``` 中使用placeholder选择器；
- 去掉不必要的父级引用符号 ``` & ``` 。

```scss
/* 不好的写法 */
@import "_dialog.scss";

/* 好的写法 */
@import "dialog";

/* 不好的写法 */
.fatal {
    @extend .error;
}

/* 好的写法 */
.fatal {
    @extend %error;
}

/* 不好的写法 */
.element {
    & > .dialog {
        ...
    }
}

/* 好的写法 */
.element {
    > .dialog {
        ...
    }
}
```

### 杂项
- 不允许有空的样式；
- 禁止使用标签选择器；
- 去掉小数点前面的 ``` 0 ```；
- 去掉数字中不必要的小数点和末尾的 ``` 0 ``` ；
- 属性值 ``` 0 ``` 后面不要加单位；
- 同个属性不同前缀的写法需要在垂直方向保持对齐，具体参照下边的写法；
- 无前缀的标准属性应该写在有前缀的属性后面；
- 不要在同个规则里出现重复的属性，如果重复的属性是连续的则没关系（有时写重复的属性是为了兼容）；
- 不要在一个文件里出现两个相同的规则；
- 用 ``` border: 0; ``` 代替 ``` border: none; ``` ；
- 尽量减少或者不使用后代选择器，以及 scss 嵌套。
- 发布的 css 代码中不要有 ``` @import ```；
- 尽量少用 ``` * ``` 选择器。

```scss
/* 不好的写法（空的样式）*/
.element {
}

/* 不好的写法（标签选择器） */
li {
    ...
}

/* 不好的写法 */
.element {
    color: rgba(0, 0, 0, 0.5);
}

/* 好的写法 */
.element {
    color: rgba(0, 0, 0, .5);
}

/* 不好的写法 */
.element {
    width: 50.0px;
}

/* 好的写法 */
.element {
    width: 50px;
}

/* 不好的写法 */
.element {
    width: 0px;
}

/* 好的写法 */
.element {
    width: 0;
}

/* 不好的写法 */
.element {
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;

    background: linear-gradient(to bottom, #fff 0, #eee 100%);
    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    background: -moz-linear-gradient(top, #fff 0, #eee 100%);
}

/* 好的写法 */
.element {
    -webkit-border-radius: 3px;
       -moz-border-radius: 3px;
            border-radius: 3px;

    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    background:    -moz-linear-gradient(top, #fff 0, #eee 100%);
    background:         linear-gradient(to bottom, #fff 0, #eee 100%);
}

/* 不好的写法 */
.element {
    color: rgb(0, 0, 0);
    width: 50px;
    color: rgba(0, 0, 0, .5);
}

/* 好的写法 */
.element {
    color: rgb(0, 0, 0);
    color: rgba(0, 0, 0, .5);
}
```


## JavaScript
### 缩进
推荐使用4个空格作为一个缩进(坚持使用适度的缩进是万里长征的第一步)。

```javascript
var x = 1,
    y = 1;

if (x < y) {
    x += 10;
} else {
    x += 1;
}
```

### 单行长度
不要超过80，但如果编辑器开启 ``` word wrap ``` 可以不考虑单行长度。

### 分号
- 不要省略分号
- 以下几种情况后需加分号：
	- 变量声明
	- 表达式
	- return
	- throw
	- break
	- continue
	- do-while


```javascript
/* var declaration */
var x = 1;

/* expression statement */
x++;

/* do-while */
do {
    x++;
} while (x < 10);

```


### 空格

1. 以下几种情况不需要空格：
	- 对象的属性名后
	- 前缀一元运算符后
	- 后缀一元运算符前
	- 函数调用括号前
	- 无论是函数声明还是函数表达式， ``` ( ``` 前不要空格
	- 数组的 ``` [ ``` 后和 ``` ] ``` 前
	- 对象的 ``` { ``` 后和 ``` } ``` 前
	- 运算符 ``` ( ``` 后和 ``` ) ``` 前

2. 以下几种情况需要空格：
	- 二元运算符前后
	- 三元运算符 ``` ? : ``` 前后
	- 代码块 ``` { ```前
	- 下列关键字前：``` else, while, catch, finally ```
	- 下列关键字后：``` if, else, for, while, do, switch, case, try, catch, finally, with, return, typeof ```
	- 单行注释 ``` // ``` 后（若单行注释和代码同行，则 ``` // ``` 前也需要），多行注释 ``` * ``` 后
	- 对象的属性值前
	- for循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
	- 无论是函数声明还是函数表达式，``` { ```前一定要有空格
	- 函数的参数之间

```javascript
// 不好的写法
var a = {
    b :1
};

// 好的写法
var a = {
    b: 1
};

// 不好的写法
++ x;
y ++;
z = x?1:2;

// 好的写法
++x;
y++;
z = x ? 1 : 2;

// 不好的写法
var a = [ 1, 2 ];

// 好的写法
var a = [1, 2];

// 不好的写法
var a = ( 1+2 )*3;

// 好的写法
var a = (1 + 2) * 3;

// no space before '(', one space before '{', one space between function parameters
var doSomething = function(a, b, c) {
    // do something
};

// no space before '('
doSomething(item);

// 不好的写法
for(i=0;i<6;i++){
    x++;
}

// 好的写法
for (i = 0; i < 6; i++) {
    x++;
}
```

### 空行
- 语义不相关的代码用空行分隔，确保语义有关联的代码在一起，可以更好地提升代码的阅读体验。
	- 流程控制语句 ```if 、 for ``` 等之前添加空行
	- 方法之间添加空行
	- 方法中的局部变量和第一条语句之间
	- 注释之前
	- 方法内的逻辑片段之间

```javascript
// need blank line after variable declaration
var x = 1;

// not need blank line when variable declaration is last expression in the current block
if (x >= 1) {
    var y = x + 1;
}

var a = 2;

// need blank line before line comment
a++;

function b() {
    // not need blank line when comment is first line of block
    return a;
}

// need blank line after blocks
for (var i = 0; i < 2; i++) {
    if (true) {
        return false;
    }

    continue;
}

var obj = {
    foo: function() {
        return 1;
    },

    bar: function() {
        return 2;
    }
};

// not need blank line when in argument list, array, object
func(
    2,
    function() {
        a++;
    },
    3
);

var foo = [
    2,
    function() {
        a++;
    },
    3
];

var foo = {
    a: 2,
    b: function() {
        a++;
    },
    c: 3
};
```


### 换行

- 换行的地方，行末必须有 ``` , ``` 或者运算符；
- 以下几种情况不需要换行：
	- 下列关键字后：``` else, catch, finally ```
	- 代码块 ``` { ``` 前

- 以下几种情况需要换行：
	- 代码块 ``` { ``` 后和 ``` } ``` 前
	- 变量赋值后

```javascript
// 不好的写法
var a = {
    b: 1
    , c: 2
};

x = y
    ? 1 : 2;

// 好的写法
var a = {
    b: 1,
    c: 2
};

x = y ? 1 : 2;
x = y ?
    1 : 2;

// no need line break with 'else', 'catch', 'finally'
if (condition) {
    ...
} else {
    ...
}

try {
    ...
} catch (e) {
    ...
} finally {
    ...
}

// 不好的写法
function test()
{
    ...
}

// 好的写法
function test() {
    ...
}

// 不好的写法
var a, foo = 7, b,
    c, bar = 8;

// 好的写法
var a,
    foo = 7,
    b, c, bar = 8;
```


### 注释

- 单行注释，有这三种用法
	- 独占一行，用来解释下一行代码，之前空一行，并且和下一行代码的缩进保持一致
	- 在代码行尾注释，代码结束到注释之间至少要有一个缩进，注释加代码不应该超过最大字符限制，若果超了，就把注释放在代码上方
	- 注释掉大段的代码
	
	```javascript
	// 好的写法
	if(condition){
		
		// 如果代码执行到这，说明通过了所有校验
		allowed();
	}
	
	// 不好的写法：注释之前没有空行
	if(condition){
		// 如果代码执行到这，说明通过了所有校验
		allowed();
	}
	
	// 不好的写法：错误的缩进
	if(condition){
	// 如果代码执行到这，说明通过了所有校验
		allowed();
	}
	
	// 好的写法
	var result = somthing + somethingElse;    // somethingElse 的取值不能是 null
		
	// 不好的写法：代码和注释之间没有间隔
	var result = somthing + somethingElse;// somethingElse 的取值不能是 null
	
	// 好的写法
	// if(condition){
	//     doSomthing();
	//     thenDoSomthingElse();
	// }
	
	// 不好的写法：这里应该用多行注释
	// 下边这段代码非常难，那么我来解释一下
	// 首先是这样。。。
	// 然后是这样。。。。。
	// 最后是这样。。。
	// 这样你明白了吗
	if(condition){
		// 如果代码执行到这，说明通过了所有校验
		allowed();
	}
	
	```

- 多行注释：以 ``` /* ``` 开始，以  ``` */ ``` 结束
	- 用来解释下一行代码，之前空一行，并且和下一行代码的缩进保持一致
	- 代码尾部注释不要用多行注释
	
	```javascript
	// 不好的写法：代码尾部注释不要使用多行注释
	var result = somthing + somethingElse;  /* somethingElse 的取值不能是 null */
	```

- 文档注释：最流行的格式来自于 ``` JSDoc ``` ，使用 斜线加双星号开始 ``` /** ```。 各类标签如 ``` @param, @method, @func ``` 等请参考 [JSDoc Guide](http://yuri4ever.github.io/jsdoc/) ；（VSCode 自带JSDoc）建议在以下情况下使用：
    - 所有的方法：应当对方法，期望的参数和可能的返回值添加注释描述
    - 所有构造函数：应当对自定义类型和期望的参数添加注释描述。
    - 所有包含文档化方法的对象：如果一个对象包含了一个或者多个附带翁当注释的方法，那么这个对象也应适当添加文档注释。

```javascript
/**
 * @func
 * @desc 一个带参数的函数
 * @param {string} a - 参数a
 * @param {number} b=1 - 参数b默认值为1
 * @param {string} c=1 - 参数c有两种支持的取值</br>1—表示x</br>2—表示xx
 * @param {object} d - 参数d为一个对象
 * @param {string} d.e - 参数d的e属性
 * @param {string} d.f - 参数d的f属性
 * @param {object[]} g - 参数g为一个对象数组
 * @param {string} g.h - 参数g数组中一项的h属性
 * @param {string} g.i - 参数g数组中一项的i属性
 * @param {string} [j] - 参数j是一个可选参数
 */
function foo(a, b, c, d, g, j) {
    ...
}
```
- 如何使用注释
	- __原则是，在需要让代码变的更清晰的时候添加注释__
	
	```javascript
	// 不好的写法：画蛇添足的的注释
	
	// 初始化 count
	var count = 10;
	
	// 好的写法：解释了代码看不出来的特殊含义
	
	// 改变这个值可能会让你被老板骂
	var count = 10;
	```
	- 可能被认为错误的代码，当有代码可能被别的开发者认为有误时，需要添加注释

	```javascript
	if(a && (b = c)){     // 提示： b = c 就是为了赋值
		return b;
	}
	```

### 变量、函数、常量、构造函数命名

- 变量和函数的命名对于代码的可读性至关重要，一般来说，命名长度要尽可能短，并且抓住要点。不要让命名承载其他的附加含义，对于其他的开发者来说如果没有看上下文，是无法理解这些变量的用处的。
	- 变量：命名词缀应该是名词，要尽量体现出值的数据类型，比如：
		- ``` count、length、size ``` 表明是数字
		-  ``` name、title、message  ``` 表明是字符串
		- 单个字符命名的变量，如 ```  i、j、k  ``` 通常在循环中使用
		- 标准变量采用驼峰式命名（除了对象的属性外）
		-  ``` ID ``` 在变量名中全大写
		-  ``` URL ``` 在变量名中全大写
		-  ``` Android ``` 在变量名中大写第一个字母
		-  ``` iOS ``` 在变量名中小写第一个，大写后两个字母
		- jquery对象必须以 ``` $ ``` 开头命名
	- 函数：命名的词缀应该是动词，比如：
		- can : 函数返回一个布尔值
		- has : 函数返回一个布尔值
		- is : 函数返回一个布尔值
		- get : 函数用来 获取 / 计算 一个值
		- set : 函数用来 保存 一个值
	
	```javascript
	// 好的变量命名
	var count = 10,
		myName = "Freyalin",
		found = true;
		
	// 不好的写法：变量看起来像函数
	var getCount = 10,
		isFound = true;
		
	// 好的函数命名
	function getName(){
		return myName;
	}
	
	// 不好的写法：函数看起来像变量
	function theName(){
		return myName;
	}
	
	// 使用动词词缀的函数可以让代码更有可读性，例如
	if(isEnabled()){
		setName("Freyalin");
	}
	
	if(getName === "Freyalin"){
		doSomething();
	}
	```
	
	- 常量：ES6之前没有确切的常量的概念，但这并不妨碍我们使用它，常量是指初始化之后就不再改变的量
		- 源于C语言的约定，推荐使用 __全大写字母__ 加 __下划线__ 的形式命名常量，下划线用来分隔单词。
	
	```javascript
	// 常量的例子
	var MAX_COUNT = 10;
	if(count < MAX_COUNT){
		doSomething();
	}
	```
	
	- 构造函数：大驼峰（这个约定大家都懂，不解释）
	
	```javascript
	function Person(name){
		this.name = name;
	}
	
	Person.prototype.sayName = function(){
		alert(this.name);
	};
	
	var me = new Person("Freyalin");
	```
### 直接量
- 字符串：推荐使用双引号，（当然使用单引号也没有问题，但你的代码要保持一种风格，不要混用）。

```javascript
var name = "Freyalin";
```
- 数字：浮点数不要省略整数部分和小数部分，不要使用8进制的写法（0开头）以避免引起歧义。

```javascript
// 整数
var count = 10;

// 小数
var price = 10.1;
var price = 10.01;

// 不推荐的小数写法：没有小数部分
var price = 10.;

// 不推荐的小数写法：没有整数部分
var price = .2;

// 不推荐的写法：八进制，容易混淆，建议弃用
var price = 010; 

// 十六进制写法
var num = 0xA2;

// 科学计数法
var num = 1e23;
```
<!--- null: 最好的理解是将它当做对象的占位符（在第8小结会有更进一步的讨论）
- nudefind: 建议避免在代码中使用undefind-->

- 对象直接量：常用的创建对象的方法就是直接在对象中写出所有的属性

```javascript
// 比如我们很少见到这种写法（也是不好的写法）
var book = new Object();
book.title = "mysql从删库到跑路";
book.author = "Freyalin";

//好的写法
var book = {
    title : "mysql从删库到跑路",
    author : "Freyalin"
}
```
- 数组直接量：和对象直接量类似，不赞成显示的使用 Array 构造函数来创建数组

```javascript
// 不好的写法
var color = new Array("red", "blue", "green");
var numbers = new Array(1, 2, 3, 4);

//好的写法
var color = [ "red", "blue", "green" ];
var numbers = [ 1, 2, 3, 4 ];
```

### 变量声明
一个函数作用域中所有的变量声明尽量提到函数首部，用一个var声明，不允许出现两个连续的var声明。

```javascript
function doSomethingWithItems(items) {

    // 用一个 var
    var value = 10,
        result = value + 10,
        i,
        len;

    for (i = 0, len = items.length; i < len; i++) {
        result += 10;
    }
}
```


### 函数

- 无论是函数声明还是函数表达式， ``` ( ``` 前不要空格，但 ``` { ``` 前要有空格；
- 函数调用括号前不需要空格；
- 立即执行函数外必须包一层括号；
- 不要给inline function命名；
- 参数之间用 ``` ,  ``` 分隔，注意逗号后有一个空格。

```javascript
// 好的写法， '('前有一个空格, 但是'{'前没有
var doSomething = function(item) {
    // do something
};

function doSomething(item) {
    // do something
}

// 不好的写法
doSomething (item);

// 好的写法
doSomething(item);

// 立即执行函数外必须包一层括号
(function() {
    return 1;
})();

// 不好的写法, 不要给inline function命名
[1, 2].forEach(function x() {
    ...
});

// 好的写法
[1, 2].forEach(function() {
    ...
});

// 不好的写法, 不要给inline function命名
var a = [1, 2, function a() {
    ...
}];

// 好的写法
var a = [1, 2, function() {
    ...
}];

// 参数之间用 ', ' 分隔
var doSomething = function(a, b, c) {
    // do something
};
```
### 数组、对象
- 对象属性名不需要加引号；
- 对象以缩进的形式书写，不要写在一行；
- 数组、对象最后不要有逗号。

```javascript
// 不好的写法
var a = {
    'b': 1
};

var a = {b: 1};

var a = {
    b: 1,
    c: 2,
};

// 好的写法
var a = {
    b: 1,
    c: 2
};
```
### 括号
下列关键字后必须有大括号（即使代码块的内容只有一行）： ``` if, else, for, while, do, switch, try, catch, finally, with ``` 。

```javascript
// 不好的写法
if (condition)
    doSomething();

// 好的写法
if (condition) {
    doSomething();
}
```
### null

1. 适用场景：
	- 初始化一个将来可能被赋值为对象的变量
	- 与已经初始化的变量做比较
	- 作为一个参数为对象的函数的调用传参
	- 作为一个返回对象的函数的返回值
2. 不适用场景：
	- 不要用null来判断函数调用时有无传参
	- 不要与未初始化的变量做比较

```javascript
// 不好的写法
function test(a, b) {
    if (b === null) {
        // not mean b is not supply
        ...
    }
}

var a;

if (a === null) {
    ...
}

// 好的写法
var a = null;

if (a === null) {
    ...
}
```

### undefined
- 永远不要直接使用 ``` undefined ``` 进行变量判断；
- 使用typeof和字符串``` 'undefined' ```对变量进行判断。

```javascript
// 不好的写法
if (person === undefined) {
    ...
}

// 好的写法
if (typeof person === 'undefined') {
    ...
}
```

### 杂项
- 不要混用tab和space；
- 不要在一处使用多个tab或space；
- 对上下文 ``` this ``` 的引用只能使用 ``` _this, that, self ``` 其中一个来命名；
- 行尾不要有空白字符；
- ``` switch ``` 的 ``` fall through ``` 和 ``` no default ``` 的情况一定要有注释特别说明；
- 不允许有空的代码块；
- 不要在内置对象的原型上添加方法，如 ``` Array, Date ``` ；
- 不要在内层作用域的代码里声明了变量，之后却访问到了外层作用域的同名变量；
- 变量不要先使用后声明；
- 不要在同个作用域下声明同名变量；
- 不要声明了变量却不使用；
- ``` debugger ``` 不要出现在提交的代码里；
- 数组中不要存在空元素；
- 不要在循环内部声明函数；


<!--- 不要像这样使用构造函数，例：new function () { ... }, new Object。-->
<!--- for-in里一定要有hasOwnProperty的判断；-->
<!--- 不要在应该做比较的地方做赋值；-->
<!--- 不要在一句代码中单单使用构造函数，记得将其赋值给某个变量；-->
<!--- 换行符统一用'LF'；-->


<!--
```javascript
// 不好的写法（在一处使用了多个空格）
var a   = 1;

function Person() {
    // 不好的写法
    var me = this;

    // 好的写法
    var _this = this;

    // 好的写法
    var that = this;

    // 好的写法
    var self = this;
}

// 好的写法（对 fall through 和 no default 做了注释）
switch (condition) {
    case 1:
    case 2:
        ...
        break;
    case 3:
        ...
    // 这里没有 break ， 是 fall through
    case 4
        ...
        break;
    // 因为***，不需要 default
}

// 不好的写法（空的代码块）
if (condition) {

}

// 好的写法
for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        // be sure that obj[key] belongs to the object and was not inherited
        console.log(obj[key]);
    }
}

// 不好的写法
Array.prototype.count = function(value) {
    return 4;
};

// 不好的写法
var x = 1;

function test() {
    if (true) {
        var x = 0;
    }

    x += 1;
}

// 不好的写法
function test() {
    console.log(x);

    var x = 1;
}

// 不好的写法
new Person();

// 好的写法
var person = new Person();

// 不好的写法
delete(obj.attr);

// 好的写法
delete obj.attr;

// 不好的写法
if (a = 10) {
    a++;
}

// 不好的写法
var a = [1, , , 2, 3];

// 不好的写法
var nums = [];

for (var i = 0; i < 10; i++) {
    (function(i) {
        nums[i] = function(j) {
            return i + j;
        };
    }(i));
}

// 不好的写法
var singleton = new function() {
    var privateVar;

    this.publicMethod = function() {
        privateVar = 1;
    };

    this.publicMethod2 = function() {
        privateVar = 2;
    };
};

```

-->
