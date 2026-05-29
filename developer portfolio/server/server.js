const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({ path: "./.env" });


const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
const DB_URL = "mongodb://shambhavkumar2002:shambhav16feb@ac-giekhtm-shard-00-00.pvbzg98.mongodb.net:27017,ac-giekhtm-shard-00-01.pvbzg98.mongodb.net:27017,ac-giekhtm-shard-00-02.pvbzg98.mongodb.net:27017/?ssl=true&replicaSet=atlas-gz8u6z-shard-0&authSource=admin&appName=Cluster0";

mongoose.connect(DB_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// Contact Route
app.post("/api/contact", async (req, res) => {

  try {

    const newMessage = new Contact(req.body);

    await newMessage.save();

    console.log(req.body);

    res.status(200).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});