/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let testApp = () => {
    for (i=1;i<=7;i+=2) {
        result.unshift(i)
    } return result
}
testApp()

//export result
module.exports = result;