// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var fs = require('fs');
var mysql = require('mysql');
var swig = require('swig');
var database = require('./config/database.js');

/******************** template setup *******************/
// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });

/****************** Database setup **********/
var connection = mysql.createConnection({
    host     : database.host,
    user     : database.user,
    password : database.pass,
    database : database.db
});
// load model files
var modelFiles = fs.readdirSync('./models/');
if(Array.isArray(modelFiles)){
    if(modelFiles.length > 0){
        for(var i in modelFiles){
            require('./models/'+modelFiles[i])(connection);
        }

    }
}
// Controllers : load controller file(s) ======================================
/*
var files = fs.readdirSync('./controllers/');
if(Array.isArray(files)){
    if(files.length > 0){
        for(var i in files){
            require('./controllers/'+files[i])(app);
        }

    }
}
*/


// routes : load route file(s) ================================================
var files = fs.readdirSync('./routes/');
if(Array.isArray(files)){
    if(files.length > 0){
        for(var i in files){
            require('./routes/'+files[i])(app);
        }

    }
}

// launch ======================================================================
app.listen(port);
console.log('Server running at port ' + port);