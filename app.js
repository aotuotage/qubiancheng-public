var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/login');
var listRouter = require('./routes/list');
var detailsRouter = require('./routes/details');
var adminRouter = require('./routes/admin');
var adminPageRouter = require('./routes/adminPage');
var editRouter = require('./routes/edit');
var articleRouter = require('./routes/article');
var questionsRouter = require('./routes/questions');
var brushquestionsRouter = require('./routes/brushquestions');
var courseRouter = require('./routes/course');

const tokenObj = require("./token/tokenObj") //引入token验证文件

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('views', path.join(__dirname, 'dist'));
app.use(express.static(path.join(__dirname, 'dist')))
app.set('view engine', 'ejs');

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", 'http://qubiancheng1024.com');
  //允许的header类型  
  res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token,Appid,Secret,Authorization");
  //跨域允许的请求方式   
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  next();
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  var mark = req.url.search(/\?/i);
  var newUrl;
  if(mark){
    newUrl = req.url.slice(0,mark) 
  } else {
    newUrl = req.url
  }
  if (newUrl == "/users" || newUrl == "/course") { 
    //如果是教程页验证
    //获取前端传来的token,开始验证，如果验证通过运行进入下一步，否则直接解决提供服务
    //表示非登录请求，需要验证token
    var token = req.headers.authorization; 
    tokenObj.verifyToken(token, function (bo) {
      if (bo) {
        next();
      }else {
        res.send({ success: false, msg: "token无效,请重新登录" })
      }
    });
  }
  else {
    next();
  }
});

app.use('/index', indexRouter); //前端首页接口
app.use('/users', usersRouter); //前端用户中心接口
app.use('/login', testRouter); //前端登录接口
app.use('/list', listRouter); //前端列表接口
app.use('/details', detailsRouter); //前端文章详情接口
app.use('/admin', adminRouter); //后台登录接口
app.use('/adminpage', adminPageRouter); //后台管理页面接口
app.use('/edit', editRouter); //后台教程编辑接口
app.use('/article', articleRouter); //后台文章编辑接口
app.use('/questions', questionsRouter); //后台问题编辑接口
app.use('/brushquestions', brushquestionsRouter); //前端问题详情接口
app.use('/course', courseRouter); //前端教程详情接口

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;