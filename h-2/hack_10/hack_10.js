/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */
let arr = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
let result = [];
let num = arr.length;

let testApp = () => {
   for(n=0; n < num; n++) {
      if ( n % 2 == 1){
         result.push(arr[n])
      }
   } return result
}

testApp()

//export result
module.exports = result;