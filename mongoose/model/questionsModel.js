const mongoose = require("../mongoose")

var QuestionsSchema = mongoose.Schema({
  title: String,
  ehtml: String,
  ehtml2: String,
  time: String,
  type: String
})
var Questions = mongoose.model('Questions', QuestionsSchema, 'questions');
module.exports = Questions