const { searchFlight, FlightService } = require("./services");

searchFlight(FlightService.SKYSCANNER, {
    origin: "CDG", 
    destination: "NRT", 
    departureOn: "2024-05-10", 
    arrivesOn: "2024-05-20", 
    options: {
        seatCount: 1
    }
}).then(console.log)