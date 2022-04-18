const express = require("express");

// const jwt = require("jsonwebtoken");
var bodyParser = require('body-parser');

require("dotenv").config();

const mongoose = require("mongoose");
const app = express();
const socketIo = require("socket.io");
const PORT = process.env.PORT || 3001;

const medications = require("./routes/api/medication");
const login = require("./routes/api/login");
const clock = require("./routes/api/clock");
const budget = require("./routes/api/budget");
const tasks = require("./routes/api/tasks");
const shopping = require("./routes/api/shopping");
const homeimage = require("./routes/api/homeimage");
const upload = require("./routes/api/upload");

// Define middleware here
// app.use(express.json());
app.use(bodyParser.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: false, limit: "50mb", parameterLimit:50000 }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production")
{
  app.use(express.static("client/build"));
}

// Use routes
app.use("/api/medication", medications);
app.use("/api/login", login);
app.use("/api/clock", clock);
app.use("/api/budget", budget);
app.use("/api/tasks", tasks);
app.use("/api/shopping", shopping);
app.use("/api/homeimage", homeimage);
app.use("/api/upload", upload);

// DB config
const db = require("./config/keys").mongoURI;
const { check } = require("express-validator");
const { default: axios } = require("axios");

// Connect to the Mongo DB
mongoose
  // .connect(process.env.MONGODB_URI || "mongodb://localhost/principalcarer")
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Start the API Server
const server = app.listen(PORT, () =>
  console.log(`🌎 ==> API server now on port ${PORT}!`)
);

const io = socketIo(server);

io.on("connection", (socket) =>
{
  console.log("New client connected " + socket.id);
  socket.emit("message", "This is a message from the server");

  socket.on("clientMessage", (message) => console.log(message));

  socket.on("mouse", (data) =>
  {
    console.log(data);
    socket.broadcast.emit("mouse", data);
  });

  socket.on("square", (data) =>
  {
    console.log(data);
    socket.broadcast.emit("square", data);
  });

  socket.on("disconnect", () => console.log("Client disconnected"));
});
