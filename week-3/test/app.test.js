const assert = require('chai').assert
const expect = require('chai').expect

const {feetToInch, inchToFeet, feetToYard} = require("../app")

describe('Feet To Inch', function(){
    it('0 feet to Inches', function(){
        assert.equal(feetToInch(0), 0)
    })


    it('Null Check', function(){
        assert.isNaN(feetToInch())
    })


    it('Type Check', function(){
        assert.typeOf(feetToInch(0), "number")
    })


    it('Value check', function(){
        assert.equal(feetToInch(5), 60)
    })

    it('Equality check', function(){
        expect(feetToInch(0)).equal(0)
    })

    it('1 i != 1 f', function(){
        expect(feetToInch(1)).not.equal(1)
    })

    it('1 f != 1 i', function(){
        expect(1).not.equal(feetToInch(1))
    })

    it('1 f = 12 i', function(){
        expect(feetToInch(1)).equal(12)
    })

    it('12 f = 1 i', function(){
        expect(12).equal(feetToInch(1))
    })

})


describe("Feet To Yard", function(){

    it("3ft = 1yd", function(){
        expect(feetToYard(3)).equal(1)
    })

    it("1ft != 1yd", function(){
        expect(feetToYard(1)).not.equal(1)
    })

    it("1in =! 1yd", function(){
        expect(feetToYard(1)).not.equal(1)
    })

    it("1yd = 36i", function(){
        expect(1).equal(feetToYard(inchToFeet(36)))
    })

    it("36i = 1yd", function(){
        expect(feetToYard(inchToFeet(36))).equal(1)        
    })

    it("3yd = 1ft", function(){
        expect(1).equal(feetToYard(3))
    })

})
