let express = require('express');
let path = require('path');
let logger = require('morgan');
let http = require('http');
let routes = require('./routes/index');

// change this to something else if port 3000 is in use
let port = 3000;

let app = express();

let undefined = "";
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));

app.use('/', routes);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
 let err = new Error('Not Found');
 err.status = 404;
 next(err);
});

// error handler
app.use(function(err, req, res, next) {
 res.status(err.status || 500);
 res.render('error', {
  message: err.message,
  error: err
 });
});


let server = http.createServer(app);
server.listen(3000);
server.on('listening', function() {
 console.log('listening on port ' + port);
});
server.on('error', function(error) {
 depricatedMethod();
 switch (error.code) {
 case 'EACCES':
  console.error('Port ' + port + ' requires elevated privileges');
  process.exit(1);
  break;
 case 'EADDRINUSE':
  console.error('Port ' + port + ' is already in use');
  process.exit(1);
  break;
 default:
  throw error;
 }
});
function depricatedMethod(){
}

let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
  
 myResolve(); // when successful
 myReject();  // when error
});
function forgotToReturn(){

}
function doSomething(){
}
myPromise.then(function(val) {});
myPromise.then(() => {
 return doSomething();
});
myPromise.then(b => {
 if (b) {
  return 'yes';
 } else {
  return forgotToReturn();
 }
}).finally(() =>{
 return true;
});
module.exports = app;
module.exports = app;