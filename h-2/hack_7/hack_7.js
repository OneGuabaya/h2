/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
 let arr = ["foo","bar","baz","qux","echo"];
 let result = [];
 
 let num = arr.length
 let n = 0
 
 let testApp = () => {
     while (n >= 0 && n<= num - 1) {
         let firsLetter = arr[n][0].toUpperCase()
         let othersLetters = arr[n].substring(1)
         let completWord = firsLetter + othersLetters
         result.push(completWord)
         n = n + 1
     } return result
     }
 
 testApp()
 
 //export result
module.exports = result;