/**
 * Unit Testing for basicFare, PremiumFare, MultipleFare and EnhancedInvoice Functions
 * 
 * @author Kowtha aketh
 *
 * @description TDD Unit testing - TW.js
 * 
 */

//Import section
const { assert, expect } = require('chai')

const { basicFare, premiumFare, multipleRides, enhancedInvoice } = require("../Tw")

//Sample Test Cases
const testCases = {
    "Fare": [NaN, undefined, Infinity, "", null, [], {}, 0.58, "123", "abc", " ", -29, 0],
    "MultipleRides": [NaN, null, Infinity, 12, "", {}],
    "MultipleRidesInternal": [["abc"], [{}], [{ time: 20, distance: 20 }, { time: 20, distance: 20, type: null }], [{ time: 20, distance: 20, type: "basic" }, { time: 20, distance: 20, type: "premium" }]],
}



let arr = [basicFare, premiumFare]


//Testing Basic fare and Premium Fare 
arr.forEach((func, index) => {
    //Group Tet Basic and Premium Fares
    describe(`Test for ${(index + 1) % 2 ? "Basic" : "Premium"} Fare`, function () {
        
        //Positve Cases Group Testing
        describe("Positve Cases for Basic and Premium Fares", function () {
            testCases["Fare"].forEach(testCase => {
                const time = parseInt(Math.random() * 100) + 1
                const distance = parseInt(Math.random() * 100) + 1

                //Positive Case Testing
                it(`Should return true if time and date are valid [Time : ${time}] , [Distance : ${distance}]`, function () {
                    expect(func(time, distance)).to.be.oneOf([time * 2 + distance * 20 + 15, time * 1 + distance * 10 + 5])
                })
            })
        })


        //Negative Case (Time) Group Testing
        describe("Negative Case (Time)", function () {
            testCases["Fare"].forEach(testCase => {
                const time = testCase
                const distance = parseInt(Math.random() * 100) + 1
                //Negative Case Testing
                it(`Should return Error if time is invalid or missing [Time : ${time} , Distance : ${distance}]`, function () {
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

        //Negative Case (Distance) Group Testing
        describe("Negative Case (Distance)", function () {
            testCases["Fare"].forEach(testCase => {
                const time = parseInt(Math.random() * 100) + 1
                const distance = testCase
                //Negative Case (Distance) Testing
                it(`Should return Error if distance is invalid or missing  [Time : ${time} , Distance : ${distance}]`, function () {
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

})


//Group Test: Multiple Rides Total
describe("Test for Multiple Rides Function", function () {

    //Multiple Ride Negative Cases
    testCases["MultipleRides"].forEach(testCase => {
        it(`Should return error if argument is invalid or missing [${JSON.stringify(testCase)}]`, function () {
            if (!Array.isArray(testCase))
                assert.throws(() => multipleRides(testCase), Error, "Invalid Arguments")
        })
    })

    //Empty Object
    it("hould return error if argument is Empty Object", function () {
        expect(multipleRides([])).to.equal(0)
    })

    //Empty Json
    it("Should return error if argument is array with empty JSON", function () {
        assert.throws(() => multipleRides([{}]), Error, "Invalid JSON passed")
        // expect(multipleRides([{}])).to.equal(0)
    })

    //Invalid Array Type
    it("Should return error if argument type is array", function () {
        assert.throws(() => multipleRides(["000"]), Error, "Invalid JSON passed")
    })

    //Invalid Property
    it("Should return error if ride type property is invalid", function () {
        assert.throws(() => multipleRides([{ time: 20, distance: 20 }, { time: 20, distance: 20, type: null }]), Error, "Invalid Ride Type")
    })

    //Multiple Rides Positive Case
    it('Should return equal value for valid arguments', function () {
        expect(multipleRides([{ time: 20, distance: 20, type: "basic" }, { time: 20, distance: 20, type: "premium" }])).to.equal(680)
    })

})

//Group Test Enhanced Invoice
describe("Test for Enhanced Invoice", function () {

    //Invalid ID
    it("Should return error for Invalid ID", function () {
        expect(enhancedInvoice("ae")).equals("Invalid Id")
    })

    //Invalid Argument
    it("Should return error if Without Arguments", function () {
        assert.throws(() => enhancedInvoice(), Error, "No Arguments Passed")
    })

    //Null Argument
    it("Should return error with null Argument", function () {
        assert.throws(() => enhancedInvoice(null), Error, "No Arguments Passed")
    })

    //Euqlity Check
    it("Should return true Equality Check", function () {
        expect(enhancedInvoice("A3")).eql({ id: "A3", numberOfRides: 4, totalFare: 1294, averagePerRide: 323.5 })
    })

})