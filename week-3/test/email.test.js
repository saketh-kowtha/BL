/**
 * @author Kowtha aketh
 *
 * @description TDD Unit testing 
 *
 */

const emailValidate = require('../email')

const { assert, expect } = require("chai")

describe("Test for Email (Negative cases)", function () {

    it("Should return message if @ is not in email", function () {
        expect(emailValidate("abc")).equals("Must contain @ symbol")
    })

    it("Should return message if Tld starting with Dot", function () {
        expect(emailValidate("abc@.com.my")).equals("Tld cannot start with .")
    })

    it("Should return message if tld as one char", function () {
        expect(emailValidate("abc123@gmail.a")).equals("a is not a valid TLD, Last tld must contain atleast two characters")
    })

    it("Should return message if tld start with .", function () {
        expect(emailValidate("abc123@.com")).equals("Tld cannot start with .")
    })

    it("Should return message if tld start with dot", function () {
        expect(emailValidate("abc123@.com.com")).equals("Tld cannot start with .")
    })

    it("Should return message if email first char starts with .", function () {
        expect(emailValidate(".abc@abc.com")).equals("Email first character cannot start with .")
    })

    it("Should return message if email has invalid chars", function () {
        expect(emailValidate("abc()*@abc.com")).equals("Email only allow character, digit, underscore, dot and dash")
    })

    it("Should return message  email tld having chars other than digit and alphabets", function () {
        expect(emailValidate("abc@%*.com")).equals("Email tld is only allow characters or digits")
    })

    it("Should return message if email has double dots", function () {
        expect(emailValidate("abc..2002@gmail.com")).equals("Double Dots are not allowed in email")
    })

    it("Should return message if email last char is dot", function () {
        expect(emailValidate("abc.@gmail.com")).equals("Emails last character cannot end with dot")
    })

    it("Should return message if email has more than 1 @", function () {
        expect(emailValidate("abc@abc@gmail.com")).equals("Only single @ is allowed")
    })

    it("Should return message if tld has digits", function () {
        expect(emailValidate("abc@gmail.com.1a")).equals("Email TLD should contain only chars")
    })

    it("Should return message if email has multiple tlds", function () {
        expect(emailValidate("abc@gmail.com.aa.au")).equals("Email cannot have multiple Tld")
    })

})


describe("Test for Email Positive Cases", function () {
    
    it("Should return true for abc@yahoo.com", function () {
        expect(emailValidate("abc@yahoo.com")).equal(true)
    })

    it("Should return true for abc-100@yahoo.com", function () {
        expect(emailValidate("abc-100@yahoo.com")).equal(true)
    })

    it("Should return true for abc.100@yahoo.com", function () {
        expect(emailValidate("abc.100@yahoo.com")).equal(true)
    })

    it("Should return true for abc111@abc.com", function () {
        expect(emailValidate("abc111@abc.com")).equal(true)
    })

    it("Should return true for abc-100@abc.net", function () {
        expect(emailValidate("abc-100@abc.net")).equal(true)
    })

    it("Should return true for abc.100@abc.com.net", function () {
        expect(emailValidate("abc.100@abc.com.net")).equal(true)
    })

    it("Should return true for abc@1.com", function () {
        expect(emailValidate("abc@1.com")).equal(true)
    })

    it("Should return true for abc@gmail.com.com", function () {
        expect(emailValidate("abc@gmail.com.com")).equal(true)
    })

    it("Should return true for abc+100@abc.net", function () {
        expect(emailValidate("abc+100@abc.net")).equal(true)
    })

})