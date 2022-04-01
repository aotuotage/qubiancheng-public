var express = require('express');
var router = express.Router();
const role = require("../authentication/role") //管理员身份验证
const Questions = require("../mongoose/model/questionsModel")//题目列表model

//新建题目
router.post('/', function(req, res, next) {
  let theRole = role(req.body.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  var data = new Questions({
    title: req.body.title,
    ehtml: req.body.ehtml,
    ehtml2: req.body.ehtml2,
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
router.post('/change', function(req, res, next) {
  let data = req.body
  let theRole = role(req.body.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  let resdata = {}
  Questions.updateOne(
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
router.get('/getext', function(req, res, next) {
  let theRole = role(req.query.authentication)
  if(theRole == false) {
    res.send({ success: false, msg: "请登录" });
    return false;
  }
  Questions.find({ _id: req.query.key }, function (err, data) {
    if (err) {
      return err
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
