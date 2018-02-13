
var time = require('time');
exports.handler = (event, context, callback) => {
  var currentTime = new time.Date();
  currentTime.setTimezone("America/Phoenix");
  callback(null, {
    statusCode: '200',
    body: 'The time in Phoenix is: ' + currentTime.toString(),
  });
};
