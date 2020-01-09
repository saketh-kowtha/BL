/**
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

module.exports.premiumFare = (time, distance) => {
    if (!time || isNaN(time) || (typeof time == "string") && time.trim() == "")
        throw new Error("Invalid Arguments")
    else if (!distance || isNaN(distance) || (typeof distance == "string") && distance.trim() == "")
        throw new Error("Invalid Arguments")
    else if (time <= -1 || distance <= -1)
        throw new Error("Number Must be positive")
    else if (time == Infinity || distance == Infinity)
        throw new Error("Argument should be finate")
    
    return PREMIUM_MIN_FARE + (PREMIUM_COST_PER_MIN * distance) + (PREMIUM_COST_PER_KM * time)
}

/**
 * @name basicFare
 * @description Calculates the fare based on time and distance
 * @param {1} time 
 * @param {2} distance 
 */

module.exports.basicFare = (time, distance) => {
    if (!time || isNaN(time) || (typeof time == "string") && time.trim() == "")
        throw new Error("Invalid Arguments")
    else if (!distance || isNaN(distance) || (typeof distance == "string") && distance.trim() == "")
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

module.exports.multipleRides = (data) => {
    if (!data || !Array.isArray(data))
        return Error("Invalid Arguments")
    return data.reduce((sum = 0, ele) => {
        sum += data.type === "premium" ? premiumFare(ele.time, ele.distance) : basicFare(ele.time, ele.distance)
    })
}


/**
 * @name enhancedInvoice
 * @description Calculates the fare based on time and distance
 * @param {1}  Number
 */

module.exports.enhancedInvoice = (id) => {
    if (!id)
        return Error("No Arguments Passed")
    let data = getUserRidesInfo(id)
    if (!data)
        return Error("Invalid ID")

    let totalFare = multipleRides(data)
    return {
        id,
        numberOfRides: ridesCount,
        totalFare,
        averagePerRide: totalFare / ridesCount
    }
}


