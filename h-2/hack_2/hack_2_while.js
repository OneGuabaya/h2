/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];

let testWhile = () => {
n=5
while(n<=5 && n>=0){
    result.unshift(n)
    n=n-1
    result2=[...result]
    result2.shift()
    console.log(result2)
}
return result2
}

testWhile()
result=result2

//export result
module.exports = result;