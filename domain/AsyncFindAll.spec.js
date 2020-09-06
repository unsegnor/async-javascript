const {expect} = require('chai')
const {asyncTest} = require('asynctdd')();
const asyncFindAll = require('./AsyncFindAll')

describe('AsyncFind', function(){
    it('must return all the items that evaluates the async function as true', async function(){
        await asyncTest(async function(promise1, promise2, promise3){
            promise1.resolvesWith(false)
            promise2.resolvesWith(true)
            promise3.resolvesWith(true)

            var items = [promise1, promise2, promise3]

            var result = await asyncFindAll(items, async function(item){
                return await item()
            })
    
            expect(result).to.contain(promise2)
            expect(result).to.contain(promise3)
        })
    })

    it('must return empty array when the async function is false for every item', async function(){
        await asyncTest(async function(promise1, promise2, promise3){
            promise1.resolvesWith(false)
            promise2.resolvesWith(false)
            promise3.resolvesWith(false)

            var items = [promise1, promise2, promise3]

            var result = await asyncFindAll(items, async function(item){
                return await item()
            })
    
            expect(result).to.eql([])
        })
    })
})