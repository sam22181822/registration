const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  dob: String,
  department: String,
  fileLink: String,
});

const Student = mongoose.model("Student", studentSchema);

// API route
app.post("/register", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(200).json({ message: "Student registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
