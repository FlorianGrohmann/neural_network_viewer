//app.use(bodyParser.urlencoded({extended : true}));
//app.use('/changeBackgroundColor', bodyParser.text());
const express = require("express");
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));

// Website files

app.get('/network_viewer', async function(req, res) {
    res.sendFile(path.resolve(__dirname + "/.." + "/src/network_viewer.html"));
});
app.get('/network_viewer.css', async function(req, res) {
    path.resolve(__dirname + "/.." + "/src/network_viewer.css")
    res.sendFile(path.resolve(__dirname + "/.." + "/src/network_viewer.css"));
});

// Web content

app.get('/favicon.png', async function(req, res) {
    res.sendFile(__dirname + "/" + "favicon.png");
});
app.get('/jquery-3.6.0.min.js', async function(req, res) {
    res.sendFile(__dirname + "/" + "jquery-3.6.0.min.js");
});
app.get('/raleway-v22-latin-200.woff2', async function(req, res) {
    res.sendFile(__dirname + "/" + "raleway-v22-latin-200.woff2");
});
app.get('/raleway-v22-latin-200.woff', async function(req, res) {
    res.sendFile(__dirname + "/" + "raleway-v22-latin-200.woff");
});

// Three.js files

app.use('/build/', express.static(path.join(__dirname, '/res/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'res/jsm')));


// Server functions

app.route('/test').get((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(lastChange);
    res.end();
});

app.listen(9999, "127.0.0.1")