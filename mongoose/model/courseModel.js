const mongoose = require("../mongoose")

var CourseSchema = mongoose.Schema({
  title: String,
  theUrl: String,
  code: String,
  ehtml: String,
  time: String,
  type: String,
})
var Course = mongoose.model('Course', CourseSchema, 'Course');
module.exports = Course