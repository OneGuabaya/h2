/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let num = arr.length

let testApp = () => {
    for(n=0;n<num;n++){
        let value = arr[n]
        if (value == "bar" || value == "baz"){
            result.push(value.replace("a","@"))
    }
        if (value == "qux") {
            result.push(value.toUpperCase())
        }
    } return result
}

testApp()

console.log(result)


//export result
module.exports = result;