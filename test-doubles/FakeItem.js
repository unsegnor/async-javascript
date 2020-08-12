module.exports = function(value){
    return Object.freeze({
        getValue
    })

    async function getValue(){
        return value
    }
}