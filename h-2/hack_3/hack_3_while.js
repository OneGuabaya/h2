/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];


let testApp = () => {
    let n = 5
    while (n>0 && n<=5) {
        n = n-1
        result.push(n+1)
        console.log(result)
    } return result
}

testApp()

//export result
module.exports = result;