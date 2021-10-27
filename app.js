"use strict";

const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

const home = require("./routes/home");
const usersRouter = require('./routes/users');


app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드

app.use('/user', usersRouter);
// app.use(express.static(path.join(__dirname, '../react-project/build')));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, '../react-project/build/index.html'))
// });


// app.get('*', ()  => {
//   res.sendFile(path.join(__dirname, '../react-project/build/index.html'))
// })


module.exports = app;