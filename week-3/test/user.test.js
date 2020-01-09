


const assert = require('assert')

var userRegistrationController = require('../user')


describe('Test for User Name Validity', function () {

    it("Should return true if valid User Name", function () {
        var isValid = userRegistrationController.isValidName('Saketh')
        assert.equal(isValid, true)        
    })

    it("Should return false if invalid User Name", function () {
        var isValid = userRegistrationController.isValidName('abc123')
        assert.equal(isValid, false)
    })

    it("Should return false if invalid User Name", function () {
        var isValid = userRegistrationController.isValidName('538644')
        assert.equal(isValid, false)
    })

})

describe('Test for Pincode Validity', function () {

    it("Should return true if valid Pincode", function () {
        var isValid = userRegistrationController.isValidPincode('123456')
        assert.equal(isValid, true)
    })

    it("Should return false if invalid Phone Number", function () {
        var isValid = userRegistrationController.isValidPincode('56464566844')
        assert.equal(isValid, false)
    })

    it("Should return false if invalid Phone Number", function () {
        var isValid = userRegistrationController.isValidPincode('kdk')
        assert.equal(isValid, false)
    })
})