/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let result = [];

let testApp = () => {

    const times = str.length - 1
    let n = 0

    while (n<=times && n >= 0){ 
        let letter = ""
        letter = str[n]
        result.push(letter)
        n = n + 1
    } return result
    }
    
    testApp()


//export result
module.exports = result;