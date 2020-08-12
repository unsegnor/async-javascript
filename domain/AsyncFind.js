module.exports = async function(array, fn){
    for(var itemIndex in array){
        var item = array[itemIndex]
        if(await fn(item)) return item
    }
    return undefined
}