/**
 * @author Kowtha aketh
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

const MIN_FARE = 5
const COST_PER_MIN = 1
const COST_PER_KM = 10

/**
 * @name basicFare
 * @description Calculates the fare based on time and distance
 * @param {1} time 
 * @param {2} distance 
 */

function basicFare(time, distance) {
    if (!time || !distance || isNaN(time) || isNaN(distance))
        return Error("Invalid Arguments")
    return MIN_FARE + ( COST_PER_KM * distance ) + ( COST_PER_MIN * time )
}


