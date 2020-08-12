const {expect} = require('chai')
const {asyncSome, asyncFind} = require('../index')
const FakeItem = require('../test-doubles/FakeItem')

describe('Library', function(){
    describe('AsyncSome', function(){
        it('must be usable', async function(){
            var items = [FakeItem(false), FakeItem(true), FakeItem(false)]
            var result = await asyncSome(items, async function(item){
                return await item.getValue()
            })
    
            expect(result).to.equal(true)
        })
    })

    describe('AsyncFind', function(){
        it('must be usable', async function(){
            var items = [FakeItem(false), FakeItem(true), FakeItem(false)]
            var result = await asyncFind(items, async function(item){
                return await item.getValue()
            })
    
            expect(result).to.equal(items[1])
        })
    })
})