var express = require('express');
var router = express.Router();
const Course = require("../mongoose/model/courseModel")//教程列表model
const Article = require("../mongoose/model/articleModel")//文章列表model
const Questions = require("../mongoose/model/questionsModel")//题目列表model

/* GET home page. */
router.get('/', function (req, res, next) {

  const getArticle = async () => {
    let resdata = {}
    //文章查询
    let article = await Article.find({}).sort({ '_id': -1 }).skip(0).limit(10);
    //教程查询
    let course = await Course.find({}).sort({ '_id': -1 }).skip(0).limit(10);
    //问题查询
    let questions = await Questions.find({}).sort({ '_id': -1 }).skip(0).limit(10);
    let newArticleArray = []
    let newCourseArray = []
    let newQuestionsArray = []
    for( let i = 0; i < article.length; i++ ){
      let newdata = {
        title: article[i].title,
        time: article[i].time,
        _id: article[i]._id
      }
      newArticleArray.push(newdata)
    }
    resdata.articleData = newArticleArray
    for( let i = 0; i < course.length; i++ ){
      let newdata = {
        title: course[i].title,
        time: course[i].time,
        _id: course[i]._id
      }
      newCourseArray.push(newdata)
    }
    resdata.courseData = newCourseArray
    for( let i = 0; i < questions.length; i++ ){
      let newdata = {
        title: questions[i].title,
        time: questions[i].time,
        _id: questions[i]._id
      }
      newQuestionsArray.push(newdata)
    }
    resdata.questionsData = newQuestionsArray
    return resdata
  }
  getArticle().then(function (result) {
    res.send(result)
  })
});

module.exports = router;
