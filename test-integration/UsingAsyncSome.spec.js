const {expect} = require('chai')
const {asyncSome} = require('../index')
const FakeItem = require('../test-doubles/FakeItem')

describe('AsyncSome', function(){
    it('must be usable', async function(){
        var items = [FakeItem(false), FakeItem(true), FakeItem(false)]
        var result = await asyncSome(items, async function(item){
            return await item.getValue()
        })

        expect(result).to.equal(true)
    })
})