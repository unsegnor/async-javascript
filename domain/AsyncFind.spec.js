const {expect} = require('chai')
const {asyncTest} = require('asynctdd')();
const asyncFind = require('./AsyncFind')

describe('AsyncFind', function(){
    it('must return the item that evaluates the async function as true', async function(){
        await asyncTest(async function(promise1, promise2, promise3){
            promise1.resolvesWith(false)
            promise2.resolvesWith(true)
            promise3.resolvesWith(false)

            var items = [promise1, promise2, promise3]

            var result = await asyncFind(items, async function(item){
                return await item()
            })
    
            expect(result).to.equal(promise2)
        })
    })

    it('must stop processing items when found one that makes the async function true', async function(){
        await asyncTest(async function(promise1, promise2, promise3){
            promise1.resolvesWith(false)
            promise2.resolvesWith(true)
            promise3.resolvesWith(false)

            var items = [promise1, promise2, promise3]

            var result = await asyncFind(items, async function(item){
                return await item()
            })
    
            expect(promise1.executed).to.equal(true)
            expect(promise2.executed).to.equal(true)
            expect(promise3.executed).to.equal(false)
        })
    })

    it('must return undefined when the async function is false for every item', async function(){
        await asyncTest(async function(promise1, promise2, promise3){
            promise1.resolvesWith(false)
            promise2.resolvesWith(false)
            promise3.resolvesWith(false)

            var items = [promise1, promise2, promise3]

            var result = await asyncFind(items, async function(item){
                return await item()
            })
    
            expect(result).to.equal(undefined)
        })
    })
})