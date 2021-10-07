var express = require('express');
var app = express();

app.use(express.static("."));
app.get('/',function(req,res){
res.sendFile(__dirname + '/index.html');
});
app.listen(3000);

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'yes',
    database : 'my_db'
});


 