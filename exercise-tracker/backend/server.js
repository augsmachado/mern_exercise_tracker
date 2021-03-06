const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Connection with application
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Create connection with MongoDB server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

// Status error MongoDB connection
connection.on("error", console.error.bind(console, "connection error:"));

// Status successfully MongoDB connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// CRUD routes
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// Status of the server connection
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
