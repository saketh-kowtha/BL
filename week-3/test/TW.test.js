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
    "Fare": [NaN, undefined, Infinity, "", null, [], {}, 0.58, "123", "abc", " ", -29, 0],
    "MultipleRides": [NaN, null, Infinity, 12, "", {}],
    "MultipleRidesInternal": [["abc"], [{}], [{ time: 20, distance: 20 }, { time: 20, distance: 20, type: null }], [{ time: 20, distance: 20, type: "basic" }, { time: 20, distance: 20, type: "premium" }]]
}

let arr = [basicFare, premiumFare]

arr.forEach((func, index) => {
    describe(`Testing ${(index + 1) % 2 ? "Basic" : "Premium"} Fare`, function () {
        testCases["Fare"].forEach(testCase => {
            const time = parseInt(Math.random() * 100) + 1
            const distance = parseInt(Math.random() * 100) + 1
            it(`Time : ${time} , Distance : ${distance}`, function () {
                expect(func(time, distance)).to.be.oneOf([time * 2 + distance * 20 + 15, time * 1 + distance * 10 + 5])
            })
        })


        testCases["Fare"].forEach(testCase => {
            const time = testCase
            const distance = parseInt(Math.random() * 100) + 1
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
            const time = parseInt(Math.random() * 100) + 1
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


describe("Testing Multiple Rides Function", function () {
    testCases["MultipleRides"].forEach(testCase => {
        it(`Test Case : ${JSON.stringify(testCase)}`, function () {
            if (!Array.isArray(testCase))
                assert.throws(() => multipleRides(testCase), Error, "Invalid Arguments")
        })
    })

    it("[] for Multiple Rides", function () {
        expect(multipleRides([])).to.equal(0)
    })

    it("[{}] for Multiple Rides", function () {
        assert.throws(() => multipleRides([{}]), Error, "Invalid JSON passed")
        // expect(multipleRides([{}])).to.equal(0)
    })

    it("['abc'] for Multiple Rides", function () {
        assert.throws(() => multipleRides(["000"]), Error, "Invalid JSON passed")
    })

    it("[{ time: 20, distance: 20 }, { time: 20, distance: 20, type: null }] for Multiple Rides", function () {
        assert.throws(() => multipleRides([{ time: 20, distance: 20 }, { time: 20, distance: 20, type: null }]), Error, "Invalid Ride Type")
    })
    it('[{ time: 20, distance: 20, type: "basic" }, { time: 20, distance: 20, type: "premium" }] ', function () {
        expect(multipleRides([{ time: 20, distance: 20, type: "basic" }, { time: 20, distance: 20, type: "premium" }])).to.equal(680)
    })

})
