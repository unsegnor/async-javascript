module.exports = async function(array, fn){
    var results = []
    for(var itemIndex in array){
        var item = array[itemIndex]
        if(await fn(item)) results.push(item)
    }
    return results
}