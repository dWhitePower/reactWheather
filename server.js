var express = require('express');

// Create out app

var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('Express serve is up on port 3000');
});