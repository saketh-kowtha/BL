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
            assert.isNumber(premiumFare({ time, distance }))
        })
    })


    testCases["Fare"].forEach(e => {
        const time = e
        const distance = parseInt(Math.random() * 100)
        it(`Time : ${time} , Distance : ${distance}`, function () {
            if (e == NaN || e == undefined || e == null)
                expect(basicFare({ time, distance })).to.throw("1 Argument is expected 0 passed")
            else if (e == Infinity)
                expect(basicFare({ time, distance })).to.throw("Argument should be finate")
            else if (e < 0)
                expect(basicFare({ time, distance })).to.throw("Number Must be positive")
            else if (typeof e != "number")
                expect(basicFare({ time, distance })).to.throw("Invalid Type")
        })
    })


    testCases["Fare"].forEach(e => {
        const time = e
        const distance = parseInt(Math.random() * 100)
        it(`Time : ${time} , Distance : ${distance}`, function () {
            if (e == NaN || e == undefined || e == null)
                expect(basicFare({ time, distance })).to.throw("Invalid Arguments")
            else if (e == Infinity)
                expect(basicFare({ time, distance })).to.throw("Argument should be finate")
            else if (e < 0)
                expect(basicFare({ time, distance })).to.throw("Number Must be positive")
            else if (typeof e != "number")
                expect(basicFare({ time, distance })).to.throw("Invalid Type")
        })
    })

})


