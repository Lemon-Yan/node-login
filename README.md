# node-login
node实现的登录、注册Demo

该Demo根据菜鸟教程的练手项目，请提前到菜鸟教程的官网查看[nodejs](https://www.runoob.com/nodejs/nodejs-tutorial.html)的相关教程，根据教程实际操作一遍，然后自己动手去实现登录、注册功能，此Demo只作参考，不符合前端相关规范。

![](https://user-gold-cdn.xitu.io/2019/9/12/16d230c1536107ca?w=1076&h=891&f=png&s=80347)


## 使用的技术栈
node+express+mongodb

## 项目目录结构
>- node_modules: 第三方模块目录
>- public: 公共文件目录（js、css、image）
>- login.html：登录页面
>- register.html：注册页面
>- main.html：主页面
>- db.js：数据库相关封装（数据库添加、查询）
>- login.js：接口启动文件（登录、注册接口）


## 登录场景
（1）用户名不能为空；
（2）密码不能为空；
（3）用户名和密码不为空的情况下，查询数据库，判断用户是否存在。
     如果存在，判断用户名和密码是否一致，一致登录成功；不一致返回用户名或密码错误；
     如果不存在，直接返回不存在该用户。
	 
## 注册场景
（1）用户名不能为空；
（2）密码不能为空；
（3）用户名和密码不为空的情况下，查询数据库，判断用户是否存在。
     如果存在，返回该用户已存在，可直接登录；
     如果不存在，注册用户，插入数据库。

## 部分操作演示
### 登录
![](https://user-gold-cdn.xitu.io/2019/9/12/16d230bbaae8caf9?w=1624&h=850&f=png&s=65806)

### 主页
![](https://user-gold-cdn.xitu.io/2019/9/12/16d230b60cd9c211?w=976&h=576&f=png&s=12368)

### 注册
![](https://user-gold-cdn.xitu.io/2019/9/12/16d230b02295dbcd?w=1815&h=922&f=png&s=77095)

### 插入数据库
![](https://user-gold-cdn.xitu.io/2019/9/12/16d230a1eebdd1cf?w=1362&h=622&f=png&s=57786)


## 项目开发
安装依赖：`npm install`

## 项目启动
定位到项目，打开命令行，输入命令：`node login.js`


 
