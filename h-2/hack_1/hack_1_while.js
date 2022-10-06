/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];

let testAdd = () => {
    n=5
    while (n<=5 && n>=0){
        result.unshift(n)
        n = n-1
    }
    return result
}

testAdd()
console.log(result)

//export result
module.exports = result;