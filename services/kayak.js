const fetch = require("node-fetch");
const cheerio = require("cheerio");

async function searchFlights({destination, origin, departureOn, arrivesOn, options = {seatCount: 1}}) {
    const searchResults = [];
    // https://www.kayak.fr/flights/NTE-BCN/2024-05-28/2024-06-04/2adults
    return searchResults;
}

module.exports = { searchFlights }