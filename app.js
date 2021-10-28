"use strict";

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/home/index');
const home = require("./routes/home");
const usersRouter = require('./routes/users');
const models = require('./models/index.js');

const app = express();

models.sequelize.sync().then(() => {
  console.log('db연결성공');
}). catch(err => {
  console.log('db연결실패');
  console.log(err);
})


app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");

app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드

app.use('/user', usersRouter);
// app.use(express.static(path.join(__dirname, '../react-project/build')));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, '../react-project/build/index.html'))
// });
app.use(function(req, res, next) {
  next(createError(404))
})

// app.get('*', ()  => {
//   res.sendFile(path.join(__dirname, '../react-project/build/index.html'))
// })



app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;