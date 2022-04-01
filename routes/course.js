//教程详情
var express = require('express');
var router = express.Router();
const Course = require("../mongoose/model/courseModel")//教程列表model

router.get('/', function(req, res, next) {
  let data = req.query.key
  const getCourse = async () => {
    //教程查询
    let course = await Course.find({_id: data})
    return course
  }
  getCourse().then(function (result) {
    res.send(result);
  })
});

module.exports = router;
