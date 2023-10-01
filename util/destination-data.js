const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, '..', "data", "destinations.json");
function getStoredDestinations() {
    const fileData = fs.readFileSync(filePath);
    const storedDestinations = JSON.parse(fileData);
    return storedDestinations;
}

function storeDestinations(storableDestinations) {
    fs.writeFileSync(filePath, JSON.stringify(storableDestinations));
}

module.exports = {
    getStoredDestinations: getStoredDestinations,
    storeDestinations: storeDestinations,
};
