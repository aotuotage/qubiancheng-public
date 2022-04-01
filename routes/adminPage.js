var express = require('express');
var router = express.Router();
const role = require("../authentication/role") //管理员身份验证
const User = require("../mongoose/model/userModel")//用户列表model
const Course = require("../mongoose/model/courseModel")//教程列表model
const Article = require("../mongoose/model/articleModel")//文章列表model
const Questions = require("../mongoose/model/questionsModel")//题目列表model

//添加用户
router.post('/add', function (req, res, next) {
  let theRole = role(req.body.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  var u = new User({
    name: req.body.name,
    phone: req.body.phone,
    time: req.body.time
  });
  let resdata = {}
  u.save(function (err) {//执行增加操作
    if (err) {
      resdata.status = 'fail'
      return;
    }
    resdata.status = 'success'
    res.send(resdata);
  });
});
//删除用户
router.post('/delete', function (req, res, next) {
  let theRole = role(req.body.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let dataId = req.body.id
  let resdata = {}
  User.deleteOne({"_id":dataId}, (err,result)=>{
    if(err){
      resdata.status = 'fail'
    }
    resdata.status = 'success'
    res.send(resdata);
  })
});
//删除教程
router.post('/deletecourse', function (req, res, next) {
  let theRole = role(req.body.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let dataId = req.body.id
  let resdata = {}
  Course.deleteOne({"_id":dataId}, (err,result)=>{
    if(err){
      resdata.status = 'fail'
    }
    resdata.status = 'success'
    res.send(resdata);
  })
});
//删除文章
router.post('/deletearticle', function (req, res, next) {
  let theRole = role(req.body.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let dataId = req.body.id
  let resdata = {}
  Article.deleteOne({"_id":dataId}, (err,result)=>{
    if(err){
      resdata.status = 'fail'
    }
    resdata.status = 'success'
    res.send(resdata);
  })
});
//删除题目
router.post('/deletequestions', function (req, res, next) {
  let theRole = role(req.body.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let dataId = req.body.id
  let resdata = {}
  Questions.deleteOne({"_id":dataId}, (err,result)=>{
    if(err){
      resdata.status = 'fail'
    }
    resdata.status = 'success'
    res.send(resdata);
  })
});
//获取用户列表
router.get('/userdata', function (req, res, next) {
  let theRole = role(req.query.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let limitnum = 10
  //分页查询
  let resdata = {}
  //查询总数
  User.count({},function (err,num){
    if (err) {
      return err
    } else {
      //按分页查询
      User.find().sort({ '_id': -1 })
      .skip((req.query.page - 1) * limitnum - 0)
      .limit(limitnum)
      .exec(function (err2, data) {
        if (err2) {
          return err2
        } else {
          resdata.usernum = num
          resdata.usersData = data
          res.send(resdata)
        }
      });
    }
  })
});
//获取教程列表
router.get('/course', function (req, res, next) {
  let theRole = role(req.query.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let limitnum = 10
  //分页查询
  let resCourse = {}
  let newArray = []
  //查询总数
  Course.count({},function (err,num){
    if (err) {
      return err
    } else {
      //按分页查询
      Course.find({})
      .sort({'_id': -1})
      .skip((req.query.page - 1) * limitnum - 0)
      .limit(limitnum)
      .exec(function (err2, data) {
        if (err2) {
          return err2
        } else {
          resCourse.coursenum = num
          for( let i = 0; i < data.length; i++ ){
            let newdata = {
              title: data[i].title,
              time: data[i].time,
              _id: data[i]._id
            }
            newArray.push(newdata)
          }
          resCourse.courseData = newArray
          res.send(resCourse)
        }
      });
    }
  })
});
//获取文章列表
router.get('/article', function (req, res, next) {
  let theRole = role(req.query.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let limitnum = 10
  //分页查询
  let resCourse = {}
  let newArray = []
  //查询总数
  Article.count({},function (err,num){
    if (err) {
      return err
    } else {
      //按分页查询
      Article.find({}).sort({ '_id': -1 })
      .skip((req.query.page - 1) * limitnum - 0)
      .limit(limitnum)
      .exec(function (err2, data) {
        if (err2) {
          return err2
        } else {
          resCourse.articlenum = num
          for( let i = 0; i < data.length; i++ ){
            let newdata = {
              title: data[i].title,
              time: data[i].time,
              _id: data[i]._id
            }
            newArray.push(newdata)
          }
          resCourse.articleData = newArray
          res.send(resCourse)
        }
      });
    }
  })
});
//获取题目列表
router.get('/questions', function (req, res, next) {
  let theRole = role(req.query.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let limitnum = 10
  //分页查询
  let resCourse = {}
  let newArray = []
  //查询总数
  Questions.count({},function (err,num){
    if (err) {
      return err
    } else {
      //按分页查询
      Questions.find({}).sort({ '_id': -1 })
      .skip((req.query.page - 1) * limitnum - 0)
      .limit(limitnum)
      .exec(function (err2, data) {
        if (err2) {
          return err2
        } else {
          resCourse.questionsnum = num
          for( let i = 0; i < data.length; i++ ){
            let newdata = {
              title: data[i].title,
              time: data[i].time,
              _id: data[i]._id
            }
            newArray.push(newdata)
          }
          resCourse.questionsData = newArray
          res.send(resCourse)
        }
      });
    }
  })
});

module.exports = router;
