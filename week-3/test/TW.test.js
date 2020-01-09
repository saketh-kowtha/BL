/**
 * @author Kowtha aketh
 *
 * @description TDD Unit testing - Testing File
 * 
 */

//Import section
const { assert, expect } = require('chai')

const {basicFare, premiumFare, multipleRides, enhancedInvoice} = require("../Tw")

const testCases = {
    "Fare": [NaN, undefined, Infinity, "", null, 0.58, "123", "abc", " ", -29, 0],
    
}

describe("Testing Basic Fare", function () {
    testCases["Fare"].forEach(e => {
        const time = parseInt(Math.random() * 100)
        const distance = parseInt(Math.random() * 100)
        it(`Time : ${time} , Distance : ${distance}`, function () {
            assert.isNumber(basicFare(time, distance))
        })
    })


    testCases["Fare"].forEach(e => {
        const time = e
        const distance = parseInt(Math.random() * 100)
        it(`Time : ${time} , Distance : ${distance}`, function () {
            if (e == NaN || e == undefined || e == null)
                assert.throws(() => { return new Error("Invalid Arguments") }, Error, "Invalid Arguments")
            else if (e == Infinity)
                assert.throws(() => { return new Error("Argument should be finate") }, Error, "Argument should be finate")
            else if (e < 0)
                assert.throws(() => { return new Error("Number Must be positive") }, Error, "Number Must be positive")
            else if (typeof e != "number")
                assert.throws(() => { return new Error("Invalid Type") }, Error, "Invalid Type")

        })
    })


    testCases["Fare"].forEach(e => {
        const time = parseInt(Math.random() * 100)
        const distance = e
        it(`Time : ${time} , Distance : ${distance}`, function () {
            if (e == NaN || e == undefined || e == null)
                assert.throws(() => {return new Error("Invalid Arguments")}, Error, "Invalid Arguments")
            else if (e == Infinity)
                assert.throws(() => { return new Error("Argument should be finate") }, Error, "Argument should be finate")
            else if (e < 0)
                assert.throws(() => {return new Error("Number Must be positive") }, Error, "Number Must be positive")
            else if (typeof e != "number")
                assert.throws(() => { return new Error("Invalid Type") }, Error, "Invalid Type")

        })
    })

})


