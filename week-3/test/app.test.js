/**
 * Unit Testing for feetToInch and feetToYard functions
 * 
 * @author Kowtha Saketh
 *
 * @description TDD Unit testing - app.js
 * 
 */

 //Import section
const {assert, expect} = require('chai')

const {feetToInch, feetToYard} = require("../app")


//Group Testing Feet To Inch
describe('Test for Feet To Inch', function(){

    //Uc 1 : 0 I == 0 Feet
    it('Should return 0 Inch for 0 feet', function(){
        assert.equal(feetToInch(0), 0)
    })

    //Uc 2 : Null Check
    it('Should return error for Null or invalid argument', function(){
        assert.throws(() => feetToInch(), Error, "1 Argument is expected 0 passed")
    })

    //Uc 3 : Type Check
    it('Should return true if output type i number', function(){
        assert.typeOf(feetToInch(0), "number")
    })

    //Uc 4 : Value Check
    it('Should return 60 for value 5 feet', function(){
        assert.equal(feetToInch(5), 60)
    })

    //Uc 5 : Equality Check
    it('Should return 0 for 0 feet', function(){
        expect(feetToInch(0)).equal(0)
    })

    //Uc 6 : 1 Inch Not Equal To 1 Feet
    it('Should not return 1 i for 1 feet', function(){
        expect(feetToInch(1)).not.equal(1)
    })

    //Uc 7 : 1 Feet Not Equal To 1 Inch
    it('Should not return 1 f for 1 inch', function(){
        expect(1).not.equal(feetToInch(1))
    })

    //Uc 8 : 1 Feet Equal to 12 Inches
    it('Should return 1 f for 12 i', function(){
        expect(feetToInch(1)).equal(12)
    })

    //Uc 9 : 12 Feet Equal to 1 Inch
    it('Should return  12 f for 1 i', function(){
        expect(12).equal(feetToInch(1))
    })

})


//Group Testing Feet To Inch
describe("Test for Feet To Yard", function(){

    //Uc 1: 3 feet Eq To 1 Yard
    it("Should return  3ft for 1yd", function(){
        expect(feetToYard(3)).equal(1)
    })

    //Uc 2: 1 feet Not Eq To 1 Yard
    it("Should not return 1ft for 1yd", function(){
        expect(feetToYard(1)).not.equal(1)
    })

    //Uc 3: 1 Inch  Not Eq To 1 Yard
    it("Should not return 1in for 1yd", function(){
        expect(feetToYard(1)).not.equal(1)
    })

    //Uc4 : 1 Yard Eq To 36 Inch
    it("Should return 1yd for 36i", function(){
        expect(1).equal(feetToYard(36 / 12))
    })

    //Uc5 : 36 Yard Eq To 1 Yard
    it("Should return 36i for 1yd", function(){
        expect(feetToYard(36 / 12)).equal(1)        
    })

    //Uc5 : 3 Yard Eq To 1 feet
    it("Should return 3yd for 1ft", function(){
        expect(1).equal(feetToYard(3))
    })

})

