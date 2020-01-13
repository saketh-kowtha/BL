/**
 * 
 * 
 * 
 * @author Kowtha Saketh
 *
 * @description TDD Unit testing - Source File
 *
 */


/**
 *
 * @name feetToInch
 * @description it will convert Feet To Inch
 * @param{1} Number
 *
 */

const { getUserRidesInfo } = require("./rides.js")

const BASIC_MIN_FARE = 5
const BASIC_COST_PER_MIN = 1
const BASIC_COST_PER_KM = 10

const PREMIUM_MIN_FARE = 15
const PREMIUM_COST_PER_MIN = 2
const PREMIUM_COST_PER_KM = 20


/**
 * @name basicFare
 * @description Calculates the fare based on time and distance
 * @param {1} time
 * @param {2} distance
 */

const premiumFare = (time, distance) => {
    if (!time || isNaN(time) || (typeof time == "string") || time == "")
        throw new Error("Invalid Arguments")
    else if (!distance || isNaN(distance) || (typeof distance == "string") || distance == "")
        throw new Error("Invalid Arguments")
    else if (time <= -1 || distance <= -1)
        throw new Error("Number Must be positive")
    else if (time == Infinity || distance == Infinity)
        throw new Error("Argument should be finate")

    return PREMIUM_MIN_FARE + (PREMIUM_COST_PER_MIN * time) + (PREMIUM_COST_PER_KM * distance)
}

/**
 * @name basicFare
 * @description Calculates the fare based on time and distance
 * @param {1} time 
 * @param {2} distance 
 */

const basicFare = (time, distance) => {
    if (!time && time != 0 || isNaN(time) || (typeof time == "string") || time == "")
        throw new Error("Invalid Arguments")
    else if (!distance && distance != 0 || isNaN(distance) || (typeof distance == "string") || distance == "")
        throw new Error("Invalid Arguments")
    else if (time <= -1 || distance <= -1)
        throw new Error("Number Must be positive")
    else if (time == Infinity || distance == Infinity)
        throw new Error("Argument should be finate")

    return BASIC_MIN_FARE + (BASIC_COST_PER_KM * distance) + (BASIC_COST_PER_MIN * time)
}


/**
 * @name multipleRides
 * @description Calculates the fare based on time and distance
 * @param {1} JSON-ARRAY 
 * 
 */

const multipleRides = (data) => {
    if (!data || !Array.isArray(data))
        throw Error("Invalid Arguments")
    return data.reduce((sum, ele) => {
        if (!ele.time || !ele.distance)
            throw new Error("Invalid JSON passed")
        if (ele.type == "premium" || ele.type == "basic")
            return sum + (ele.type == "premium" ? premiumFare(ele.time, ele.distance) : basicFare(ele.time, ele.distance))
        else
            throw new Error("Invalid Ride Type")

    }, 0)
}


/**
 * @name enhancedInvoice
 * @description Calculates the fare based on time and distance
 * @param {1}  Number
 */

const enhancedInvoice = (id) => {
    debugger
    if (!id)
        throw Error("No Arguments Passed")
    let data = getUserRidesInfo(id)
    if (!data)
        return "Invalid Id"

    let totalFare = multipleRides(data)
    return {
        id,
        numberOfRides: data.length,
        totalFare,
        averagePerRide: totalFare / data.length
    }
}


module.exports = {
    enhancedInvoice,
    multipleRides,
    basicFare,
    premiumFare
}