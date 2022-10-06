/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let testApp = () => {
    let n = 8
        while (n>=1 && n<=8){
            n = n - 2
            result.push(n)
        } return result
}

testApp()

let arrayBueno = result.map(result => result + 1)

result = arrayBueno



//export result
module.exports = result;