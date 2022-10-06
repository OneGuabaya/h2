/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];

let testApp = () => {
    for(i=0;i<=5;i++){
        result.push(i)
        result2 = [...result]
        result2.shift()
        console.log(result2)
    }
    return result2
}

testApp()
result = result2

//export result
module.exports = result;