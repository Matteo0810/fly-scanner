const FlightService = {
    ALL: "all", // special tag
    GOOGLE_FLIGHTS: require("./googleFlights"),
    SKYSCANNER: require("./skyscanner"),
    KAYAK: require("./kayak")
};

/**
 * @description find a flight in a service (such as google flights) or in all services
 * @param {String} service a provided service name (in a defined enumeration)
 * @param {*} data a provided data for a flight (always the same data)
 * @returns 
 */
async function searchFlight(service, data) {
    const {ALL, ...flightServices} = FlightService;

    // search into all flight services if the tag is equal to "ALL"
    if(service === ALL) {
        return (await Promise.all(
            Object.values(flightServices).map(async service => 
                service.searchFlights(data)
            )
        )).flat();
    }

    // otherwise search by the flight service
    const result = await service?.searchFlights(data);
    // if the flight isn't found, then throw an error
    if(!result || !Array.isArray(result))
        throw new Error(`Flight service not found please find it into this list: ${Object.keys(FlightService).join(", ")}`);
    // otherwise return the result
    return result;
}  

module.exports = {
    FlightService,
    searchFlight
}