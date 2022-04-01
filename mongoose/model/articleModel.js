const mongoose = require("../mongoose")

var ArticleSchema = mongoose.Schema({
  title: String,
  ehtml: String,
  time: String,
  type: String
})
var Article = mongoose.model('Article', ArticleSchema, 'article');
module.exports = Article