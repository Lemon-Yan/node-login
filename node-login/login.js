var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db');


app.use('/public', express.static('public'));

//创建application/x-www-form-urlencoded编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//登录页面
app.get('/login.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'login.html');
})

//定位到登录页面
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'login.html');
})

//登录接口
app.post('/process_login', urlencodedParser, function (req, res) {
    var userName = req.body.userName;
    var pwd = req.body.pwd; 
    if (!userName) {
        res.json({ code: -1, message: '用户名不能为空' });
    } else if (!pwd) {
        res.json({ code: -1, message: '密码不能为空' });
    } else {
        db.searchUser({ name: userName }, function (result) {
            if (result.length > 0) {
                if (result[0].name == userName && result[0].pwd == pwd) {
                    res.json({ code: 0, message: '登录成功' }); 
                } else {
                    res.json({ code: -1, message: '用户名或密码错误' });
                }
            } else {
                res.json({ code: -1, message: '不存在该用户' });
            }
        });
    }
})

//主页面
app.get('/main.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'main.html');
})

//注册页面
app.get('/register.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'register.html');
})

//注册接口
app.post('/process_register', urlencodedParser, function (req, res) {
    var userName = req.body.userName;
    var pwd = req.body.pwd;
    if (!userName) {
        res.json({ code: -1, message: '用户名不能为空' });
    } else if (!pwd) {
        res.json({ code: -1, message: '密码不能为空' });
    } else {
        db.searchUser({ name: userName }, function (result) {
            if (result.length > 0 && result[0].name == userName) {
                res.json({ code: -1, message: '用户已存在，可直接登录' });
            } else {
                // res.json({ code: -1, message: '不存在该用户' });
                db.insertUser({ name: userName, pwd: pwd }, function (insertResult) {
                    console.log(insertResult)
                    if (insertResult.insertedCount > 0) {
                        res.json({ code: 0, message: '注册成功' });
                    } else {
                        res.json({ code: -1, message: '注册失败，请重新注册' });
                    }
                })
            }
        });
    }
})

var server = app.listen(8082, function () { 
    var port = server.address().port; 
    console.log('应用实例，访问地址为 http://127.0.0.1:', port);
})


