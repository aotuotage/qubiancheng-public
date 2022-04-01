var express = require('express');
var router = express.Router();
const Course = require("../mongoose/model/courseModel")//教程列表model
const Article = require("../mongoose/model/articleModel")//文章列表model
const Questions = require("../mongoose/model/questionsModel")//题目列表model

//问题列表
router.get('/questions', function (req, res, next) {
  let limitnum = 8
  //分页查询
  let resCourse = {}
  let newArray = []
  //查询总数
  Questions.count({}, function (err, num) {
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
            for (let i = 0; i < data.length; i++) {
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
//问题关键词搜索列表
router.get('/questionskeyword', function (req, res, next) {
  let limitnum = 8
  //分页查询
  let resCourse = {}
  let newArray = []
  //查询总数
  Questions.count({ 'type': req.query.type }, function (err, num) {
    if (err) {
      return err
    } else {
      //按分页查询
      Questions.find({ 'type': req.query.type }).sort({ '_id': -1 })
        .skip((req.query.page - 1) * limitnum - 0)
        .limit(limitnum)
        .exec(function (err2, data) {
          if (err2) {
            return err2
          } else {
            resCourse.questionsnum = num
            for (let i = 0; i < data.length; i++) {
              let newdata = {
                title: data[i].title,
                time: data[i].time,
                _id: data[i]._id,
                type: data[i].type
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
//问题文本搜索
router.get('/questionsseach', function (req, res, next) {
  let limitnum = 8
  //分页查询
  let resCourse = {}
  let newArray = []
  //查询总数
  Questions.count({ 
    $or: [
      { title: { $regex: req.query.seach, $options: '$i' } }
    ]
   }, function (err, num) {
    if (err) {
      return err
    } else {
      //按分页查询
      Questions.find({ 
        $or: [
          { title: { $regex: req.query.seach, $options: '$i' } }
        ]
       }).sort({ '_id': -1 })
        .skip((req.query.page - 1) * limitnum - 0)
        .limit(limitnum)
        .exec(function (err2, data) {
          if (err2) {
            return err2
          } else {
            resCourse.questionsnum = num
            for (let i = 0; i < data.length; i++) {
              let newdata = {
                title: data[i].title,
                time: data[i].time,
                _id: data[i]._id,
                type: data[i].type
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
//文章列表
router.get('/article', function (req, res, next) {
  let limitnum = 8
  //分页查询
  let resCourse = {}
  let newArray = []
  //查询总数
  Article.count({}, function (err, num) {
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
            for (let i = 0; i < data.length; i++) {
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
//文章关键词搜索列表
router.get('/keyword', function (req, res, next) {
  let limitnum = 8
  //分页查询
  let resCourse = {}
  let newArray = []
  //查询总数
  Article.count({ 'type': req.query.type }, function (err, num) {
    if (err) {
      return err
    } else {
      //按分页查询
      Article.find({ 'type': req.query.type }).sort({ '_id': -1 })
        .skip((req.query.page - 1) * limitnum - 0)
        .limit(limitnum)
        .exec(function (err2, data) {
          if (err2) {
            return err2
          } else {
            resCourse.articlenum = num
            for (let i = 0; i < data.length; i++) {
              let newdata = {
                title: data[i].title,
                time: data[i].time,
                _id: data[i]._id,
                type: data[i].type
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
//文章文本搜索
router.get('/articleseach', function (req, res, next) {
  let limitnum = 8
  //分页查询
  let resCourse = {}
  let newArray = []
  //查询总数
  Article.count({ 
    $or: [
      { title: { $regex: req.query.seach, $options: '$i' } }
    ]
   }, function (err, num) {
    if (err) {
      return err
    } else {
      //按分页查询
      Article.find({ 
        $or: [
          { title: { $regex: req.query.seach, $options: '$i' } }
        ]
       }).sort({ '_id': -1 })
        .skip((req.query.page - 1) * limitnum - 0)
        .limit(limitnum)
        .exec(function (err2, data) {
          if (err2) {
            return err2
          } else {
            resCourse.articlenum = num
            for (let i = 0; i < data.length; i++) {
              let newdata = {
                title: data[i].title,
                time: data[i].time,
                _id: data[i]._id,
                type: data[i].type
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
//教程列表
router.get('/course', function (req, res, next) {
  let limitnum = 8
  //分页查询
  let resCourse = {}
  let newArray = []
  //查询总数
  Course.count({ 'type': req.query.type }, function (err, num) {
    if (err) {
      return err
    } else {
      //按分页查询
      Course.find({ 'type': req.query.type }).sort({ '_id': 1 })
        .skip((req.query.page - 1) * limitnum - 0)
        .limit(limitnum)
        .exec(function (err2, data) {
          if (err2) {
            return err2
          } else {
            resCourse.coursenum = num
            for (let i = 0; i < data.length; i++) {
              let newdata = {
                title: data[i].title,
                time: data[i].time,
                _id: data[i]._id,
                type: data[i].type
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

module.exports = router;
