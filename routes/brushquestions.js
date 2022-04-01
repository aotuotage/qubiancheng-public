//问题详情
var express = require('express');
var router = express.Router();
const Questions = require("../mongoose/model/questionsModel")//题目列表model

router.get('/', function(req, res, next) {
  let data = req.query.key
  const getCourse = async () => {
    //问题查询
    let questions = await Questions.find({_id: data});
    return questions
  }
  getCourse().then(function (result) {
    res.send(result);
  })
});

module.exports = router;
