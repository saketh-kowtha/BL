/**
 * @author Kowtha aketh
 *
 * @description TDD Unit testing - TW.js
 * 
 */

//Import section
const { assert, expect } = require('chai')


const sum = require("../sum")

describe("Test for sum", function () {
    it("Should return 0 for no arguments", function () {
        expect(sum()).equal(0)
    })   

    it("Should return 0 if a is 2 and b is null", function () {
        expect(sum(2)).equal(0)
    })   

    it("Should return 0 if a='abc' and b = 2", function () {
        expect(sum("abc", 2)).equal(0)
    })   

    it("Should return 0 if a is empty string and b is 2", function () {
        expect(sum("", 2)).equal(0)
    })   

    it("Should return 6 if a is 2 and b is 6", function () {
        expect(sum(2, 4)).equal(6)
    })  
    
    it("Should return Infinty if a is Infinity and b is 6", function () {
        expect(sum(Infinity, 4)).equal(Infinity)
    })  

})