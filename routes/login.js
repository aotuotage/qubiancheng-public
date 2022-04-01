var express = require('express');
var router = express.Router();
const User = require("../mongoose/model/userModel")//用户列表model
const tokenObj = require("../token/tokenObj") //引入token文件

/* GET users listing. */
router.post('/', function (req, res, next) {
  var data = {};
  User.findOne({'name': req.body.name, 'phone': req.body.psd}, (err,result)=>{
    if(result == null){
      data.status = 'fail'
      res.send(data);
    }else{
      var token = tokenObj.createToken(req.body.name, 2592000);
      data.msg = '登录成功';
      data.status = 'success';
      data.name = req.body.name;
      data.token = token;
      res.send(data);
    }
  })
});

module.exports = router;
