//1.引入mongoose
const mongoose = require('mongoose');
//2、建立连接  
//useNewUrlParser这个属性会在url里识别验证用户所需的db,未升级前是不需要指定的,升级到一定要指定。
mongoose.connect('mongodb://127.0.0.1:27017/qubiancheng',
    { useNewUrlParser: true }, function (err) {
        if (err) {
            console.log(err);
            return;
        }
    });
// 4. 暴露已经链接了数据库的 mongoose 对象
module.exports = mongoose;