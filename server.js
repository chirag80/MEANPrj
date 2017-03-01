
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB

mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://chirag80:NId1cbmM0JIixdYllTL5U0PjLqCd9YWCzHHSpPLT067Lf8XyM0mFo44iXCdHSvvvzRu4tEp9aHjyixlp204XCg==@chirag80.documents.azure.com:10250/?ssl=true');
// mongoose.connection.on('error', function(){});

// Express
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/api'));

// Start server
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
, ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port, ip, function() {
  console.log('Express server listening on %d', port);
});
