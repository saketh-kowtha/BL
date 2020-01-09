/**
 * @author Kowtha aketh
 *
 * @description TDD Unit testing 
 *
 */

const emailValidate = require('../email')
 
const {assert, expect} = require("chai")

describe("Validating Email", function () {

    it("Without @", function () {
        expect(emailValidate("abc")).equals("Must contain @ symbol")
    })

    it("Tld starting without Dot", function () {
        expect(emailValidate("abc@.com.my")).equals("Tld cannot start with .")
    })

    it("Checking Valid Tld", function () {
        expect(emailValidate("abc123@gmail.a")).equals("a is not a valid TLD, Last tld must contain atleast two characters")
    })

})