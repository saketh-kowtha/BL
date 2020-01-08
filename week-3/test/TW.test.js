/**
 * @author Kowtha aketh
 *
 * @description TDD Unit testing - Testing File
 * 
 */

//Import section
const { assert, expect } = require('chai')

const {basicFare, premiumFare, multipleRides, enhancedInvoice} = require("../Tw")

const rides = {
    "A1": [
        {
            time: 10,
            distance: 20,
            type: 'premium'
        },
        {
            time: 8,
            distance: 20
        },
        {
            time: 2,
            distance: 20
        },
        {
            time: 0,
            distance: 20,
            type: 'premium'
        },
        {
            time: null,
            distance: 20,
            type: 'premium'
        },
        {
            time: 'str',
            distance: 20
        },
        {
            time: '',
            distance: 20
        },
        {
            time: undefined,
            distance: 20
        },
        {
            time: NaN,
            distance: 20
        },
        {
            time: Infinity,
            distance: 20
        },
        {
            time: -1,
            distance: 20
        },
        {
            time: 3,
            distance: null
        },
        {
            time: 34,
            distance: 'str'
        },
        {
            time: '',
            distance: Infinity
        },
        {
            time: undefined,
            distance: undefined
        },
        {
            time: 1000,
            distance: NaN,
            type: undefined
        },
        {
            time: -1,
            distance: -100
        },
        {
            time: -1,
            distance: 5555555555555555555555
        },
    ],

    "A3": [
        {
            time: 10,
            distance: 20
        },
        {
            time: 8,
            distance: 20,
            type: 'premium'
        },
        {
            time: 10,
            distance: 20
        },
        {
            time: 8,
            distance: 20,
            type: 'premium'
        },
    ],
    "A4": 1,
    "A5": "User",
    "A6": NaN,
}

describe("Testing Basic Fare", function () {
    rides["A1"].forEach(e => {
        it(`Time : ${e.time} , Distance : ${e.distance}`, () => {
            assert.isNumber(basicFare(e.time, e.distance))
        })
    })

    rides["A3"].forEach(e => {
        it(`Time : ${e.time} , Distance : ${e.distance}`, () => {
            assert.isNumber(basicFare(e.time, e.distance))
        })
    })
})


describe("Testing Premium Fare", function () {
    rides["A1"].forEach(e => {
        it(`Time : ${e.time} , Distance : ${e.distance}`, () => {
            assert.isNumber(premiumFare(e.time, e.distance))
        })
    })

    rides["A3"].forEach(e => {
        it(`Time : ${e.time} , Distance : ${e.distance}`, () => {
            assert.isNumber(basicFare(e.time, e.distance))
        })
    })
})

describe("Testing Multiple Rides", function () {
    it(`JSON A1 Data`, () => {
        multipleRides(rides["A1"])
    })

    it(`JSON A2 Data`, () => {
        multipleRides(rides["A2"])
    })

    it(`JSON A4 Data`, () => {
        multipleRides(rides["A4"])
    })

    it(`JSON A5 Data`, () => {
        multipleRides(rides["A5"])
    })

    it(`JSON A6 Data`, () => {
        multipleRides(rides["A6"])
    })
})

describe("Testing Enhanced Invoice", function () {
    it(`Jon Data (rides)`, function () {
        enhancedInvoice(rides)
    })
})
