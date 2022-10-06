/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let testApp = () => {
    let n = 7
    while (n<=7 && n>=1) {
        result.unshift(n)
        n = n-2
        console.log(result)
    } return result
}
testApp()



//export result
module.exports = result;