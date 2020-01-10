/**
 * 
 * Unit Testing for um function
 * 
 * @author Kowtha Saketh
 *
 * @description TDD Unit testing - TW.js
 * 
 */

//Import section
const { assert, expect } = require('chai')


const sum = require("../sum")

//Group Test for sum
describe("Test for sum", function () {

    //Without arguments
    it("Should return 0 for no arguments", function () {
        expect(sum()).equal(0)
    })   

    //with single argument
    it("Should return 0 if a is 2 and b is null", function () {
        expect(sum(2)).equal(0)
    })   

    //with tring type argument
    it("Should return 0 if a='abc' and b = 2", function () {
        expect(sum("abc", 2)).equal(0)
    })   

    //with empty String argument
    it("Should return 0 if a is empty string and b is 2", function () {
        expect(sum("", 2)).equal(0)
    })   

    //with positive test case 2 and  4
    it("Should return 6 if a is 2 and b is 6", function () {
        expect(sum(2, 4)).equal(6)
    })  
    
    //Should return infinity if any of the argument is infinity
    it("Should return Infinty if a is Infinity and b is 6", function () {
        expect(sum(Infinity, 4)).equal(Infinity)
    })  

    //Should return 0 if any of the argument is Type Array
    it("Should return 0 if any argument type is array", function () {
        expect(sum([], 4)).equal(0)
    })  

})