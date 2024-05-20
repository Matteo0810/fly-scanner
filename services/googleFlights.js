const {getBrowser} = require("../utils/browser");
const { getUserAgent } = require("../utils/userAgent");

const BASE_URL = "https://www.google.com/travel/flights";

async function searchFlights({destination, origin, departureOn, arrivesOn, options = {seatCount: 1}}) {
    const searchResults = [];
    let searchText = `Flights to ${destination} from ${origin} on ${departureOn} throught ${arrivesOn}`;
    if(options.seatCount)
        searchText += ` ${options.seatCount} seat${options.seatCount>1?'s':''}`;

    const browser = await getBrowser();
    const page = await browser.newPage();

    await page.setExtraHTTPHeaders({
        "Cookie": "CONSENT=YES+1;",
        "User-Agent": getUserAgent()
    });
    await page.goto(`${BASE_URL}?q=${encodeURIComponent(searchText)}`);

    // await Promise.all([
    //     page.waitForNavigation(),
    //     page.click(".VfPpkd-LgbsSe", {})
    // ]);

    await page.waitForSelector(".Rk10dc", {visible: true});

    //const list = await page.$eval(".Rk10dc", el => el.querySelectorAll(".pIav2d .m9ravf"))
    //console.log(list) 

    const fs = require("fs");
    fs.writeFileSync("index.html", await page.content(), {encoding: "utf8"});
    // const button = await page.waitForSelector(".VfPpkd-LgbsSe");
    // await button.click();
    // await button.dispose();

    await page.close();
    // const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(searchText)}`, {
    //     method: "GET",
    //     headers: {
    //         "Cookie": "CONSENT=YES+1;",
    //         "User-Agent": getUserAgent()
    //     }
    // });
    // const $ = cheerio.load(await response.text());

    // $(".Rk10dc>li:not(.ZVk93d)").each((_, li) => {
    //     // layover = stops lors d'un vol
    //     if(_ === 6)
    //         console.log(_, $(li).html());
    // })
    // // $(".Rk10dc").each((_, el) => {
    // //     const flight = {
    // //         flights: [],
    // //         price: 0
    // //     };
    // //     $(el).find(".KhL0De").each((_, el) => {
    // //         const company = {
    // //             name: $(el).find(".sSHqwe.tPgKwe.ogfYpf>span").html(),
    // //             logoURL: $(el).find(".EbY4Pc").css()?.["--travel-primitives-themeable-image-default"].replace(/url\(|\)/g, "")
    // //         }
    // //         $(el).find(".tPgKwe.ogfYpf").each((_, el) => {
    // //             console.log(_)
    // //             flight.flights.push({
    // //                 origin: "",
    // //                 destination: "",
    // //                 duration: parseDuration($(el).find(".Ak5kof>.AdWm1c.tPgKwe.ogfYpf").text()),
    // //                 company
    // //             });
    // //         });
    // //     })
    // //     searchResults.push(flight);
    // // });

    return searchResults;
}

module.exports = {
    searchFlights
}