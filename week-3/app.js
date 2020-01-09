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

module.exports.feetToInch = (x) => {
    if(!x && x!== 0)
        return Error("1 Argument is expected 0 passed")
    else if (typeof x != "number")
        return Error("Invalid Type")
    else if (x <= -1)
        return Error("Number Must be positive")
    else if (x == Infinity)
        return Error("Argument should be finate")
    return 12 * x
}


/**
 *
 * @name feetToInch
 * @description it will convert Feet To Yard
 * @param{1} Number
 * 
 */
module.exports.feetToYard = (x) => {
    if (!x)
        return Error("1 Argument is expected 0 passed")
    else if (typeof x != "number")
        return Error("Invalid Type")
    else if (x <= -1)
        return Error("Number Must be positive")
    return x / 3
}

