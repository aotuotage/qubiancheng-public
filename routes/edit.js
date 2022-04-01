var express = require('express');
var router = express.Router();
const role = require("../authentication/role") //管理员身份验证
const Course = require("../mongoose/model/courseModel")//用户列表model

//新建教程
router.post('/', function (req, res, next) {
  let theRole = role(req.body.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  var data = new Course({
    title: req.body.title,
    theUrl: req.body.theUrl,
    code: req.body.code,
    ehtml: req.body.ehtml,
    time: req.body.time,
    type: req.body.type
  });
  let resdata = {}
  data.save(function (err) {//执行增加操作
    if (err) {
      resdata.status = 'fail'
      return;
    }
    resdata.status = 'success'
    res.send(resdata);
  });
});
//修改教程
router.post('/change', function (req, res, next) {
  let theRole = role(req.body.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let data = req.body
  let resdata = {}
  Course.updateOne(
    {_id: data.id },
    data,
    function (err, doc) {
      if (err) {
        resdata.status = 'fail'
      }
      resdata.status = 'success'
      res.send(resdata)
    })
});
//获取单条教程数据
router.get('/getext', function (req, res, next) {
  let theRole = role(req.query.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let data = req.query.key
  Course.find({ _id: req.query.key }, function (err, data) {
    if (err) {
      return err
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
