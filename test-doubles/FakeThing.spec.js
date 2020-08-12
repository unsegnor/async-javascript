const {expect} = require('chai')
const FakeItem = require('./FakeItem')

describe('FakeItem', function(){
    it('its value must be true when initialized with true', async function(){
        var item = FakeItem(true)
        var value = await item.getValue()
        expect(value).to.equal(true)
    })

    it('its value must be false when initialized with false', async function(){
        var item = FakeItem(false)
        var value = await item.getValue()
        expect(value).to.equal(false)
    })

    it('getValue must return a promise', async function(){
        var item = FakeItem(false)
        var promise = item.getValue()
        expect(promise).to.not.equal(false)
        expect(typeof promise).to.equal('object')
        expect(typeof promise.then).to.equal('function')
    })
})