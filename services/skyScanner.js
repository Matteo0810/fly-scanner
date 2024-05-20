const { getBrowser } = require("../utils/browser");
const { getUserAgent } = require("../utils/userAgent");

async function getFlightDetails(page, url) {
    await page.goto(url);
    const fs = require("fs");
    fs.writeFileSync("index.html", await page.content(), {encoding: "utf-8"});
    await page.waitForSelector(".BpkSpinner_bpk-spinner__MThkN", {hidden: true});
}
 
async function searchFlights({destination, origin, departureOn, arrivesOn, options={seatCount: 1}}) {
    departureOn = departureOn.split("-").join("");
    arrivesOn = arrivesOn.split("-").join("");
    origin = origin.toLowerCase();
    destination = destination.toLowerCase();

    const params = new URLSearchParams();
    if(options?.seatCount)
        params.set("adultsv2", options?.seatCount);

    const browser = await getBrowser();
    const page = await browser.newPage();

    await page.setUserAgent(getUserAgent({singleUserAgent: true}));
    await page.goto(`https://www.skyscanner.net/transport/vols/${origin}/${destination}/${departureOn}/${arrivesOn}/?${params.toString()}`);
    
    await page.waitForSelector(".BpkProgress_bpk-progress__YWIyM", {hidden: true});

    const list = await page.$eval(".FlightsDayView_results__YjlmM", el =>
        Array.from(el.querySelectorAll(".FlightsTicket_link__ODZjM"))
    );
    
    await page.click(".FlightsTicket_link__ODZjM");
    const fs = require("fs");
    fs.writeFileSync("index.html", await page.content(), {encoding: "utf-8"});

    await page.close();
    return []
}

module.exports = {
    searchFlights
}