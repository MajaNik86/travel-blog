const express = require('express');
const fs = require('fs');

const path = require('path');


const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

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

app.post('/recommend', function (req, res) {
    const destination = req.body;
    const filePath = path.join(__dirname, 'data', 'destinations.json');

    const fileData = fs.readFileSync(filePath);
    const storedDestinations = JSON.parse(fileData);

    storedDestinations.push(destination);
    fs.writeFileSync(filePath, JSON.stringify(storedDestinations))
    res.redirect('/confirm')
})
app.get('/confirm', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
    res.sendFile(htmlFilePath);
})
app.get('/about', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'about.html');
    res.sendFile(htmlFilePath);
})




app.listen(3000);