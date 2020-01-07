/**
 * @author Kowtha aketh
 *
 * @description TDD Unit testing - Testing File
 * 
 */

 //Import section
const {assert, expect} = require('chai')

const {feetToInch, feetToYard} = require("../app")


let count = 1
//Group Testing Feet To Inch
describe('Feet To Inch', function(){

    beforeEach(() => {
        console.log(`    Test Case ${count} Begins`)
    })

    afterEach(()=>{
        console.log(`    Test Case ${count++} End\n`)
    })

    //Uc 1 : 0 I == 0 Feet
    it('0 feet to Inches', function(){
        assert.equal(feetToInch(0), 0)
    })

    //Uc 2 : Null Check
    it('Null Check', function(){
        assert.isNaN(feetToInch())
    })

    //Uc 3 : Type Check
    it('Type Check', function(){
        assert.typeOf(feetToInch(0), "number")
    })

    //Uc 4 : Value Check
    it('Value check', function(){
        assert.equal(feetToInch(5), 60)
    })

    //Uc 5 : Equality Check
    it('Equality check', function(){
        expect(feetToInch(0)).equal(0)
    })

    //Uc 6 : 1 Inch Not Equal To 1 Feet
    it('1 i != 1 f', function(){
        expect(feetToInch(1)).not.equal(1)
    })

    //Uc 7 : 1 Feet Not Equal To 1 Inch
    it('1 f != 1 i', function(){
        expect(1).not.equal(feetToInch(1))
    })

    //Uc 8 : 1 Feet Equal to 12 Inches
    it('1 f = 12 i', function(){
        expect(feetToInch(1)).equal(12)
    })

    //Uc 9 : 12 Feet Equal to 1 Inch
    it('12 f = 1 i', function(){
        expect(12).equal(feetToInch(1))
    })

})

count = 1

//Group Testing Feet To Inch
describe("Feet To Yard", function(){

    beforeEach(() => {
        console.log(`    Test Case ${count} Begins`)
    })

    afterEach(()=>{
        console.log(`    Test Case ${count++} End\n`)
    })

    before(() => {
        count = 1
    })

    after(() => {
        console.log("Bye-Bye")
    })

    //Uc 1: 3 feet Eq To 1 Yard
    it("3ft = 1yd", function(){
        expect(feetToYard(3)).equal(1)
    })

    //Uc 2: 1 feet Not Eq To 1 Yard
    it("1ft != 1yd", function(){
        expect(feetToYard(1)).not.equal(1)
    })

    //Uc 3: 1 Inch  Not Eq To 1 Yard
    it("1in =! 1yd", function(){
        expect(feetToYard(1)).not.equal(1)
    })

    //Uc4 : 1 Yard Eq To 36 Inch
    it("1yd = 36i", function(){
        expect(1).equal(feetToYard(36 / 12))
    })

    //Uc5 : 36 Yard Eq To 1 Yard
    it("36i = 1yd", function(){
        expect(feetToYard(36 / 12)).equal(1)        
    })

    //Uc5 : 3 Yard Eq To 1 feet
    it("3yd = 1ft", function(){
        expect(1).equal(feetToYard(3))
    })

})
