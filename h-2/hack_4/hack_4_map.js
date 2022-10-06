/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let testApp = () => {
    let n = 0
        while (n>=0 && n<=6){
            result.push(n)
            n = n + 2
        } return result
}

testApp()

let arrayBueno = result.map(result => result + 1)

result = arrayBueno

//export result
module.exports = result;