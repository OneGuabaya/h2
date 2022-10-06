/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
let completeArray =  [...numberArray, "h@ck",...stringArray]
let num = completeArray.length

let testApp = () => {
    result.push("h@ck")
    for (n=0;n<num;n++) {
        if (completeArray[n] == 1 || completeArray[n] == 3 || completeArray[n] == 5) {
            let numberString = ["one","two","three","four","five"]
            result.push(numberString[n])
        } else { if (completeArray[n] == "foo" || completeArray[n] == "baz" || completeArray[n] == "qux" || completeArray[n] == "echo") {
            test = completeArray[n]
            test = test.replace(/o/g,0)
            test = test.replace(/a/g,"@")
            test = test.replace(/a/g,"@")
            test = test.replace(/x/g,"X")
            test = test.replace(/e/g,3)
            result.push(test)
        } else { if (completeArray[n] == "bar") {
            test = completeArray[n]
            test = test.replace(/b/g,"B")
            result.push(test)
        } else { result.push(completeArray[n]) }}} 
    } return result
}

testApp()
result.push("h@ck")

//export result
module.exports = result;