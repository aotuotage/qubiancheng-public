//文章详情
var express = require('express');
var router = express.Router();
const Article = require("../mongoose/model/articleModel")//文章列表model

router.get('/', function(req, res, next) {
  let data = req.query.key
  const getCourse = async () => {
    //文章查询
    let article = await Article.find({_id: data});
    return article
  }
  getCourse().then(function (result) {
    res.send(result);
  })
});

module.exports = router;
