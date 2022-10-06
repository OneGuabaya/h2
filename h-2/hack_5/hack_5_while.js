/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let testApp = () => {
    let n = 7
    while (n<=7 && n>=1) {
        result.push(n)
        n = n-2
        console.log(result)
    } return result
}
testApp()

//export result
module.exports = result;