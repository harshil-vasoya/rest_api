const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Students = require("./model/Students");
const cors = require("cors");
mongoose
  .connect(
    //coonection string
  )
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());


    //get all students
    app.get("/", async (req, res) => {
      const data = await Students.find();
      res.send(data);
    });

    //get student by id
    app.get("/:id", async (req, res) => {
      const data = await Students.findOne({ FacultyID: req.params.id });
      res.send(data);
    });

    //add student to database
    app.post("/", async (req, res) => {
      const student = new Students();
      student.StudentID = req.body.StudentID;
      student.StudentName = req.body.StudentName;
      student.StudentEmail = req.body.StudentEmail;
      student.StudentMobile = req.body.StudentMobile;
      student.StudentParentMobile = req.body.StudentParentMobile;
      student.StudentImage = req.body.StudentImage;
      student.StudentDepartment = req.body.StudentDepartment;
      const data = await student.save();
      res.send(data);
    });

    //update student by id
    app.put("/:id", async (req, res) => {
      const data = await Students.findOne({ FacultyID: req.params.id });
      data.StudentName = req.body.StudentName;
      data.StudentEmail = req.body.StudentEmail;
      data.StudentMobile = req.body.StudentMobile;
      data.StudentParentMobile = req.body.StudentParentMobile;
      data.StudentImage = req.body.StudentImage;
      data.StudentDepartment = req.body.StudentDepartment;
      await data.save();
      res.send(data);
    });

    //delete student by id
    app.delete("/:id", async (req, res) => {
      const data = await Students.deleteOne({ FacultyID: req.params.id });
      res.send(data);
    });
  
    app.listen(3003, () => {
      console.log("Server Started @https://localhost:3003");
    });
  });
