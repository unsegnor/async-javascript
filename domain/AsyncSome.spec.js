const {expect} = require('chai')
const {asyncTest} = require('asynctdd')();
const asyncSome = require('./AsyncSome')

describe('AsyncSome', function(){
    it('must return true when the async function is true for one item', async function(){
        await asyncTest(async function(promise1, promise2, promise3){
            promise1.resolvesWith(false)
            promise2.resolvesWith(true)
            promise3.resolvesWith(false)

            var items = [promise1, promise2, promise3]

            var result = await asyncSome(items, async function(item){
                return await item()
            })
    
            expect(result).to.equal(true)
        })
    })

    it('must stop processing items when found one that makes the async function true', async function(){
        await asyncTest(async function(promise1, promise2, promise3){
            promise1.resolvesWith(false)
            promise2.resolvesWith(true)
            promise3.resolvesWith(false)

            var items = [promise1, promise2, promise3]

            var result = await asyncSome(items, async function(item){
                return await item()
            })
    
            expect(promise1.executed).to.equal(true)
            expect(promise2.executed).to.equal(true)
            expect(promise3.executed).to.equal(false)
        })
    })

    it('must return false when the async function is false for every item', async function(){
        await asyncTest(async function(promise1, promise2, promise3){
            promise1.resolvesWith(false)
            promise2.resolvesWith(false)
            promise3.resolvesWith(false)

            var items = [promise1, promise2, promise3]

            var result = await asyncSome(items, async function(item){
                return await item()
            })
    
            expect(result).to.equal(false)
        })
    })
})