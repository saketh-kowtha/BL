const assert = require('chai').assert

const {feetToInch} = require("../app")

describe('Feet To Inch', function(){
    it('0 feet to Inches', function(){
        assert.equal(feetToInch(0), 0)
    })
})

