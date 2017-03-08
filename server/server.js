var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
const port = 10245;


var basePath = __dirname;
basePath = basePath.substring(0, basePath.lastIndexOf('\\'));


app.use('/scripts', express.static(basePath + '/scripts'));
app.use('/js', express.static(basePath + '/js'));
app.use('/saxonce', express.static(basePath + '/saxonce'));
app.use('/rich-text', express.static(basePath + '/rich-text'));

app.get('/', (req, res) => {
    res.sendFile(path.join(basePath + '/index.html'));
});

app.get('/content', (req, res) => {
    res.sendFile(path.join(basePath + '/content/1.html'));
});

app.listen(port);