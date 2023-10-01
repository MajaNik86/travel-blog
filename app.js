const express = require('express');

const path = require('path');


const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(htmlFilePath);
})

app.get('/destinations', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'destinations.html');
    res.sendFile(htmlFilePath);
})

app.get('/recommend', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
    res.sendFile(htmlFilePath);
})
app.get('/about', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'about.html');
    res.sendFile(htmlFilePath);
})

app.listen(3000);