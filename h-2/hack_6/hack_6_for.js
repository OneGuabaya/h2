/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a,"n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a,"n"]
 */
let str = "fooziman";
let result = [];

let testApp = () => {
const times = str.length - 1
for(i=0;i<=times;i++){
    let letter = ""
    letter = str[i]
    result.push(letter)
} return result
}

testApp()


//export result
module.exports = result;