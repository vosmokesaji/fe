# 编写可维护的 JavaScript

> 题外话：PHPStrom 的提示 总能教我怎么写规范的代码，开始时觉得很神奇，后来才知道这玩意儿叫 JSLint，其中大有学问。

## 第一部分 编程风格

### 1. 基本的格式化

- 缩进：推荐使用4个空格作为一个缩进(坚持使用适度的缩进是万里长征的第一步)
- 分号：不要省略分号
	- 大家都知道，js一行只有一个语句的时候，可以不写分号，这是由于ASI的存在，会帮你插入分号，但是它对于插入分号的判断，可能与你写代码的思想相悖，所以推荐大家不要省略分号
- 行长度：一行不要超过80个字符
	- 这个数值来源于古老的编辑器，超出之后要么折行，要么隐藏这些都是我们不想看到的，所以建议将一行的长度限定在80个字符以内
- 换行：如果单行超过了最大字符限制，就要手动将1行拆成两行，一般在运算符后换行，下一行增加两个缩进层级。（将运算符置于行尾，能避免 ASI 造成错误）

	```javascript
	// 好的做法：在运算符后换行，第二行追加两个缩进
	callAFunction(document, element, window, "some striong value", true, 123, 
			navigator);
	
	// 不好的做法：第二行只有一个缩进
	callAFunction(document, element, window, "some striong value", true, 123, 
		navigator);
	
	// 不好的做法：在运算符前换行了
	callAFunction(document, element, window, "some striong value", true, 123, 
			navigator);
	
	// 例外：赋值语句
	var sum = numberA + numberB + numberC + numberD + numberE + numberF + 
			  numberG	
	```
	- 有一个例外就是，赋值语句中第二行要和赋值运算符对齐
	
	```javascript
	// 例外：赋值语句
	var sum = numberA + numberB + numberC + numberD + numberE + numberF + 
			  numberG	
	
	```
- 空行（建议性的）：语义不相关的代码用空行分隔，确保语义有关联的代码在一起，可以更好地提升代码的阅读体验。
	- 流程控制语句（if 、 for 等）之前添加空行
	- 方法之间添加空行
	- 方法中的局部变量和第一条语句之间(?)
	- 多行或者单行注释之前
	- 方法内的逻辑片段之间
- 命名：变量和函数的命名对于代码的可读性至关重要，一般来说，命名长度要尽可能短，并且抓住要点。不要让命名承载其他的附加含义，对于其他的开发者来说如果没有看上下文，是无法理解这些变量的用处的。
	- 变量：命名词缀应该是名词，要尽量体现出值的数据类型，比如：
		- count、length、size 表明是数字
		- name、title、message 表明是字符串
		- 单个字符命名的变量，如 i、j、k 通常在循环中使用
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
		- 源于C语言的约定，推荐使用 大写字母 加 下划线 的形式命名常量，下划线用来分隔单词。
	
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
- 直接量
	- 字符串：推荐使用双引号，当然使用单引号也没有问题，但你的代码要保持一种风格，不要混用。

	
	```javascript
	var name = "Freyalin";
	
	```
	- 数字：浮点数不要省略整数部分和小数部分，不要使用8进制的写法（0开头）以避免引起歧义。
	
	```javascript
	// 整数
	var count = 10;
	
	// 小数
	var price = 10.0;
	var price = 10.00;
	
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

### 2. 注释

- 单行注释，有这三种用法
	- 独占一行，用来解释下一行代码，之前空一行，并且和下一行代码的缩进保持一致
	- 在代码行尾注释，代码结束到注释之间至少要有一个缩进，注释加代码不应该超过最大支付限制，若果超了，就把注释放在代码上方
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

- 多行注释：以 /* 开始，以 */ 结束
	- 用来解释下一行代码，之前空一行，并且和下一行代码的缩进保持一致
	- 代码尾部注释不要用多行注释
	
	```javascript
	// 不好的写法：代码尾部注释不要使用多行注释
	var result = somthing + somethingElse;  /* somethingElse 的取值不能是 null */
	```
- 如何使用注释
	- 原则是，在需要让代码变的更清晰的时候添加注释
	
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
<!--- 文档注释-->
	
### 3. 语句和表达式



- 所有的块语句都应该使用花括号，包括：
	- if
	- for
	- while
	- do...while...
	- try...catch...finally

	```javascript
	// 不好的写法，尽管是合法的js代码
	if(condition)
		doSomething();
	
	// 不好的写法，尽管是合法的js代码
	if(condition) doSomething();
	
	// 不好的写法，尽管是合法的js代码
	if(condition){ doSomething(); }
	
	// 好的写法
	if(condition){ 
		doSomething(); 
	}
	```
	
- 花括号对齐方式
	- 将左花括号放在块语句中第一句代码的末尾

	```javascript
	if(condition){
		doSomething(); 
	}else{
		doSomethingElse(); 
	}
	```
	- 将花括号放在块语句首行的下一行

	```javascript
	if(condition)
	{
		doSomething(); 
	}
	else
	{
		doSomethingElse(); 
	}
	```
	- 推荐第一种
- 块语句中的空格
	- 第一种：在语句名、圆括号和花括号之间没有空格间隔（紧凑）

	```javescript
	if(condition){
		doSomething(); 
	}
	```
	- 第二种：在左边的圆括号前和右边的圆括号后各添一个空格（较为清晰）

	```javescript
	if (condition) {
		doSomething(); 
	}
	```
	- 第三种：在左边的圆括号前后和右边的圆括号前后各添一个空格（各个部分非常清晰）

	```javescript
	if ( condition ) {
		doSomething(); 
	}
	```
	- 推荐第二种，是在易读性和书写难度上的一个折衷

- switch 语句
	- 缩进

	```javescript
	switch (condition) {
		case "first":
			// 代码
			break;
		case "sec":
			// 代码
			break;
		case "first":
			// 代码
			break;
		case "first":
			// 代码
			break;
	}
	```

