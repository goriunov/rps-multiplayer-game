var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var compression = require('compression');
var path = require('path');
var http = require('http');
var engines = require('consolidate');


var app = express();


app.use(compression());
app.use(express.static(path.join(__dirname,'front-end/dist')));

var router = require(path.join(__dirname , 'routes/index'));
console.log(path.join(__dirname,'front-end/dist'));

// Views Engine
app.set('views' , path.join(__dirname ,'front-end/dist'));
app.engine('html', engines.handlebars);
app.set('view engine', 'html');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


app.use('/' , router);


//Create server and connect socket io
var server = http.createServer(app);
var port = 3000;

if (process.env.PORT) {
    port = process.env.PORT;
}

// Socket IO Library
var IO = require('socket.io')(server);
var sockets = require(path.join(__dirname ,'routes/sockets'))(IO);
app.use('/' , function(){
    sockets();
});

server.listen(port , function(){
    console.log('Server listening on http://localhost:' + port);
});







