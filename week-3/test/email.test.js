/**
 * @author Kowtha aketh
 *
 * @description TDD Unit testing 
 *
 */

const emailValidate = require('../email')

const { assert, expect } = require("chai")

describe("Validating Email (Negative Test Cases)", function () {

    it("Without @", function () {
        expect(emailValidate("abc")).equals("Must contain @ symbol")
    })

    it("Tld starting without Dot", function () {
        expect(emailValidate("abc@.com.my")).equals("Tld cannot start with .")
    })

    it("Checking Valid Tld (single letter TLD)", function () {
        expect(emailValidate("abc123@gmail.a")).equals("a is not a valid TLD, Last tld must contain atleast two characters")
    })

    it("Checking Valid Tld (start with .)", function () {
        expect(emailValidate("abc123@.com")).equals("Tld cannot start with .")
    })

    it("Checking Valid Tld (start with .)", function () {
        expect(emailValidate("abc123@.com.com")).equals("Tld cannot start with .")
    })

    it("Checking Email (starting with .)", function () {
        expect(emailValidate(".abc@abc.com")).equals("Email first character cannot start with .")
    })

    it("Checking Email (with invalid chars)", function () {
        expect(emailValidate("abc()*@abc.com")).equals("Email only allow character, digit, underscore, dot and dash")
    })

    it("Invalid Tld (Invalid chars)", function () {
        expect(emailValidate("abc@%*.com")).equals("Email tld is only allow characters or digits")
    })

    it("Invalid Email (Double dots)", function () {
        expect(emailValidate("abc..2002@gmail.com")).equals("Double Dots are not allowed in email")
    })

    it("Invalid Email (End with dot)", function () {
        expect(emailValidate("abc.@gmail.com")).equals("Emails last character cannot end with dot")
    })

    it("With Multiple @'s", function () {
        expect(emailValidate("abc@abc@gmail.com")).equals("Only single @ is allowed")
    })

    it("TLD with nums", function () {
        expect(emailValidate("abc@gmail.com.1a")).equals("Email TLD should contain only chars")
    })

    it("Multiple Tld Names", function () {
        expect(emailValidate("abc@gmail.com.aa.au")).equals("Email cannot have multiple Tld")
    })

})


describe("Validating Email Positive Cases", function () {
    
    it("abc@yahoo.com", function () {
        expect(emailValidate("abc@yahoo.com")).equal(true)
    })

    it("abc-100@yahoo.com", function () {
        expect(emailValidate("abc-100@yahoo.com")).equal(true)
    })

    it("abc.100@yahoo.com", function () {
        expect(emailValidate("abc.100@yahoo.com")).equal(true)
    })

    it("abc111@abc.com", function () {
        expect(emailValidate("abc111@abc.com")).equal(true)
    })

    it("abc-100@abc.net", function () {
        expect(emailValidate("abc-100@abc.net")).equal(true)
    })

    it("abc.100@abc.com.net", function () {
        expect(emailValidate("abc.100@abc.com.net")).equal(true)
    })

    it("abc@1.com", function () {
        expect(emailValidate("abc@1.com")).equal(true)
    })

    it("abc@gmail.com.com", function () {
        expect(emailValidate("abc@gmail.com.com")).equal(true)
    })

    it("abc+100@abc.net", function () {
        expect(emailValidate("abc+100@abc.net")).equal(true)
    })

})