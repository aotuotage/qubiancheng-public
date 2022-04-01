var jwt = require("jsonwebtoken");

var tokenObj = {
    createToken: function (cont, time) {//创建token
        var content = {
            name:cont
        } //token存储的内容
        var secretOrPrivateKey = 'qubiancheng1024.com' // 这是加密的key（密钥或私钥） 
        var token = jwt.sign(content, secretOrPrivateKey, {
            expiresIn: time // 过期时间
        })
        return token;
    },
    verifyToken: function (token, fn) {//验证token
        var secretOrPrivateKey = 'qubiancheng1024.com' // 这是加密的key（密钥或私钥）
        jwt.verify(token, secretOrPrivateKey, function (err, decode) {
            if (err) { // 当token过期，或这是一个伪造的token，或这是无效的token时会触发此逻辑 
                console.log(err)
                fn(false)
            } else {
                fn(true);
            }
        })
    }
}
module.exports = tokenObj;