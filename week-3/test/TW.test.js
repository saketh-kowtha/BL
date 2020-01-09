/**
 * @author Kowtha aketh
 *
 * @description TDD Unit testing - Testing File
 * 
 */

//Import section
const { assert, expect } = require('chai')

const { basicFare, premiumFare, multipleRides, enhancedInvoice } = require("../Tw")

const testCases = {
    "Fare": [NaN, undefined, Infinity, "", null, 0.58, "123", "abc", " ", -29, 0],
}

let arr = [basicFare, premiumFare]

arr.forEach((func, index) => {
    describe(`Testing ${(index + 1) % 2 ? "Basic" : "Premium"} Fare`, function () {
        testCases["Fare"].forEach(testCase => {
            const time = parseInt(Math.random() * 100)
            const distance = parseInt(Math.random() * 100)
            it(`Time : ${time} , Distance : ${distance}`, function () {
                assert.isNumber(func(time, distance))
            })
        })


        testCases["Fare"].forEach(testCase => {
            const time = testCase
            const distance = parseInt(Math.random() * 100)
            it(`Time : ${time} , Distance : ${distance}`, function () {
                if (testCase == NaN || testCase == undefined || testCase == null)
                    assert.throws(() => func(time, distance), Error, "Invalid Arguments")
                else if (testCase == Infinity)
                    assert.throws(() => func(time, distance), Error, "Argument should be finate")
                else if (testCase < 0)
                    assert.throws(() => func(time, distance), Error, "Number Must be positive")
                else if (typeof testCase != "number")
                    assert.throws(() => func(time, distance), Error, "Invalid Arguments")

            })
        })


        testCases["Fare"].forEach(testCase => {
            const time = parseInt(Math.random() * 100)
            const distance = testCase
            it(`Time : ${time} , Distance : ${distance}`, function () {
                if (testCase == NaN || testCase == undefined || testCase == null)
                    assert.throws(() => func(time, distance), Error, "Invalid Arguments")
                else if (testCase == Infinity)
                    assert.throws(() => func(time, distance), Error, "Argument should be finate")
                else if (testCase < 0)
                    assert.throws(() => func(time, distance), Error, "Number Must be positive")
                else if (typeof testCase != "number")
                    assert.throws(() => func(time, distance), Error, "Invalid Arguments")

            })
        })

    })

})


