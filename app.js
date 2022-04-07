var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const flash = require('connect-flash')
const session =require('express-session')
const bodyParser =  require('body-parser');
const cors = require('cors')
const db = require('./utils/db.js')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const recipeRouter = require('./routes/recipes')

var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.resolve("./public")));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(function(req, res, next) {
//   res.locals.user = req.session.user;
//   next();
// });
app.use(session({
  name:"mycookie",
  secret : 'mycookie',
  cookie: { maxAge: 60000 },
  resave: true,
  saveUninitialized: true
}))
app.use(flash())

// connect db
db().catch(err => console.log(err));

app.use(cookieParser());
// routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/recipes', recipeRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error
// app.use((error, req, res, next)=>{
//   res.locals.user =req.user;
//   console.error("line 36",error.message);
//   res.json({data:{success:false, message:error.message}})
//
//
// })

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};  // render the error page
  res.status(err.status || 500);
  //res.render('error');
  res.json(err)
});

module.exports = app;
