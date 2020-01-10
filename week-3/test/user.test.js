/**
 *
 * Unit Testing for um function
 *
 * @author Kowtha Saketh
 *
 * @description TDD Unit testing - TW.js
 *
 */

const assert = require('assert')

var userRegistrationController = require('../user')

//Group test for name validity
describe('Test for User Name Validity', function () {

    //Should return true if valid User Name
    it("Should return true if valid User Name", function () {
        var isValid = userRegistrationController.isValidName('Saketh')
        assert.equal(isValid, true)        
    })

    //Should return false if invalid User Name
    it("Should return false if invalid User Name", function () {
        var isValid = userRegistrationController.isValidName('abc123')
        assert.equal(isValid, false)
    })

    //Should return false if invalid User Name
    it("Should return false if invalid User Name", function () {
        var isValid = userRegistrationController.isValidName('538644')
        assert.equal(isValid, false)
    })

})

//Group test for pincode validity
describe('Test for Pincode Validity', function () {

    //Should return true if valid Pincode
    it("Should return true if valid Pincode", function () {
        var isValid = userRegistrationController.isValidPincode('123456')
        assert.equal(isValid, true)
    })

    //Should return false if invalid Phone Number
    it("Should return false if invalid Phone Number", function () {
        var isValid = userRegistrationController.isValidPincode('56464566844')
        assert.equal(isValid, false)
    })

    //Should return false if invalid Phone Number
    it("Should return false if invalid Phone Number", function () {
        var isValid = userRegistrationController.isValidPincode('kdk')
        assert.equal(isValid, false)
    })
})