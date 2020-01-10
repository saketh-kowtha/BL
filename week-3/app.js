/**
 * 
 * 
 * @author Kowtha aketh
 *
 * @description TDD Unit testing - Source File
 * 
 */


/**
 * Converts Feet to Inch
 * @name feetToInch
 * @description it will convert Feet To Inch
 * @param{1} Number  
 * 
 */

module.exports.feetToInch = (x) => {
    if(!x && x!== 0)
        throw Error("1 Argument is expected 0 passed")
    else if (typeof x != "number")
        throw Error("Invalid Type")
    else if (x <= -1)
        throw Error("Number Must be positive")
    else if (x == Infinity)
        throw Error("Number Must be Finate")
    return 12 * x
}


/**
 *
 * Converts  Feet to Yard
 * @name feetToInch
 * @description it will convert Feet To Yard
 * @param{1} Number
 * 
 */
module.exports.feetToYard = (x) => {
    if (!x && x!== 0)
        return Error("1 Argument is expected 0 passed")
    else if (typeof x != "number")
        return Error("Invalid Type")
    else if (x <= -1)
        return Error("Number Must be positive")
    else if (x == Infinity)
        throw Error("Number Must be Finate")
    return x / 3
}

