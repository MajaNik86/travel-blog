const express = require("express");
const fs = require("fs");

const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/destinations", function (req, res) {
    const filePath = path.join(__dirname, "data", "destinations.json");

    const fileData = fs.readFileSync(filePath);
    const storedDestinations = JSON.parse(fileData);

    res.render("destinations", {
        numOfDestinations: storedDestinations.length,
        destinations: storedDestinations,
    });
});

app.get("/recommend", function (req, res) {
    const htmlFilePath = path.join(__dirname, "views", "recommend.html");
    res.render("recommend");
});

app.post("/recommend", function (req, res) {
    const destination = req.body;
    const filePath = path.join(__dirname, "data", "destinations.json");

    const fileData = fs.readFileSync(filePath);
    const storedDestinations = JSON.parse(fileData);

    storedDestinations.push(destination);
    fs.writeFileSync(filePath, JSON.stringify(storedDestinations));
    res.redirect("/confirm");
});
app.get("/confirm", function (req, res) {
    res.render("confirm");
});
app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(3000);
