const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const socketIo = require("socket.io");
const PORT = process.env.PORT || 3001;

const books = require("./routes/api/medication");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use routes
app.use("/api/books", books);

// DB config
const db = require("./config/keys").mongoURI;

// Connect to the Mongo DB
mongoose
//   .connect(db)
  .connect(process.env.MONGODB_URI || "mongodb://localhost/principalcarer")
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));
// process.env.MONGODB_URI || "mongodb://localhost/principalcarer",

//Start the API Server
const server = app.listen(PORT, () =>
  console.log(`🌎 ==> API server now on port ${PORT}!`)
);

const io = socketIo(server);

// Start ce
io.on("connection", (socket) => {

  console.log("New client connected " + socket.id);
  socket.emit("message", "This is a message from the server");

 
});
