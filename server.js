const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ✅ ADD THIS HERE */
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

/* your API route */
app.post("/register", async (req, res) => {
  // your code here
});

/* START SERVER (always at bottom) */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
