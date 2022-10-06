/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */
let result = [];

let testApp = () => {
    for(i=0;i<5;i++) {
        result.unshift(i+1)
        console.log(result)
    } return result
}

testApp()

//export result
module.exports = result;