const express=require('express');

var router = express.Router();

var pool = require('../pool.js')

router.post('/login',function(req,res){
    //获取浏览器请求的数据
    var obj=req.body;
    var $phone=obj.phone;
    var $email=obj.phone;
    var $upwd=obj.upwd;
    var sql = `SELECT * FROM user WHERE (phone=? OR email=?) AND upwd=?`;
    //查看数据库中是否有这个用户
    pool.query(sql,[$phone,$phone,$upwd],function(err,result){
      if(err) throw err;
      //查询的结果是数组
      if(result.length>0){
        res.send('true');
      }else{
          res.send('false');
      }
    });
  
  });


  router.post('/phoneReg',function(req,res){
    //获取浏览器请求的数据
    var obj=req.body;
    var $phone=obj.regPhone;
    var $upwd=obj.regUpwd;
    var sql = `SELECT * FROM user WHERE phone=? AND upwd=?`;
    //查看数据库中是否有这个用户
    pool.query(sql,[$phone,$upwd],function(err,result){
      if(err) throw err;
      //查询的结果是数组
      if(result.length>0){
        res.send('false');
      }else{
        pool.query(`insert into user values(null,null,?,null,null,?,null,null,null,null,null,null,null,null)`,[$upwd,$phone],function(err,result){
          if(result.affectedRows>0){
            res.send('true');
          } 
        })
      }
    });
  });


module.exports = router;