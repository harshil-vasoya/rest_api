const mongoose = require("mongoose");

const schema = mongoose.Schema({
  StudentID: Number,
  StudentName: String,
  StudentEmail: String,
  StudentMobile: Number,
  StudentParentMobile: Number,
  StudentImage: String,
  StudentDepartment: String,
});

module.exports = mongoose.model("Students", schema, "Students");
