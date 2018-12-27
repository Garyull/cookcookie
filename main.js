//导入包和路由
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');

var user = require('./routes/user.js');
var login_register = require('./routes/login_register.js')
var app = express();

//监听
app.listen(5050);

//静态资源托管
app.use(express.static(__dirname+'/html'));


//使用中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use('/user',user)
app.use('/login_register',login_register)
//路由重定向
app.get('/',function(req,res){
    res.sendFile(__dirname+'/html/index.html')
});
//ctrl+~ 打开终端

console.log("服务器启动成功");