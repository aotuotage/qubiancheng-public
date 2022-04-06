var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var login = {
    name: '我怎么这么好看',
    psd: 'qubiancheng'
  }
  var data = {};
  if(req.body.name == login.name && req.body.psd == login.psd){
    data.msg = '登录成功';
    data.state = 'success';
    data.name = req.body.name;
    data.authentication = 'qubianchengadmin';
  }else{
    data.msg = '登录失败';
    data.state = 'fail';
  }
  res.send(data);
});

module.exports = router;
