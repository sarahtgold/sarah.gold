var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '/')));

http.listen(app.get('port'), function() {
    console.log("Server started");
});
