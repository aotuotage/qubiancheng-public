const mongoose = require("../mongoose")

var UserSchema = mongoose.Schema({
  name: String,
  phone: String,
  time: String
})
var User = mongoose.model('User', UserSchema, 'user');
module.exports = User