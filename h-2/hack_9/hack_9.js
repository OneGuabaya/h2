/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;
let num = arr.length 

let testApp = () => {
    let otherArray = []
    for( n=0 ; n < num ; n++ ) {
        if(arr[n][0] == "b") {
            otherArray.push(arr[n])
            result = otherArray.length 
        }
    } return result
}

testApp()

//export result
module.exports = result;