# git commit message 书写规范

## 1.格式

```
类型(改动范围): 此次修改的说明       // 标题
// 空行
改动的详细说明                     // 内容
```
注意：标题行的括号和冒号都要使用英文符号，冒号后要跟一个空格

## 2.格式说明

1. 标题（建议不要超过50个字符）
	- 类型（必填项）
		
		```
		feat: 新功能 (feature)
		fix: 修补bug (bug fix)
		rev: 改版（revision）
		docs: 文档 (documentation)
		style: 格式，不影响代码运行的变动，比如格式化。
		refactor: 重构，即不是新增功能，也不是修改bug的代码变动
		test: 增加测试
		chore: 零星的工作，和对代码的保养，比如删除没有用的代码
		merge: 如果合并代码有冲突，解决冲突后提交消息需要自己写，就用这个
		```
	- 改动范围（必填项）
		- 填写频道的名字（也就是文件夹的名字）
		- 如果改动比较分散涉及到多个频道，或者全站的修改，写「 * 」即可
	- 此次修改的说明（必填项）
	    - 对修改的简短描述，注意这里是讲你改了什么，而不是为什么改
	
2. 内容（建议72个字符处折行）
	- 这里解释为什么修改

## 3. 建议

- 用一个空行隔开标题和正文
- 限制标题字数在 50 个字符内
- 不要用句号结束标题行
- 在标题行使用祈使语气
- 正文在 72 个字符处换行
- 使用正文解释是什么和为什么，而不是如何做
    

## 4. 其他

1. [Git别名设置](http://t.cn/RK0XTnx)

	```
	git config --global alias.st status
	git config --global alias.co checkout
	git config --global alias.ci commit
	git config --global alias.br branch
	```

2. 参考文档
    - [Commit message 和 Change log 编写指南](http://t.cn/R4SXfz7)
    - [Git Commit Message Conventions](http://t.cn/RMAcu4F)
    - [写好 Git Commit 信息的7个建议](http://t.cn/Ry35d8J)
    - [如何写好git commit message](http://t.cn/EI7EVX4)

