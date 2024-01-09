console.log("========STEP1==========");

function reverseString(str){
result = "";
    for (let index = str.length-1; index > 0 ; index--) {
        
        let char = str.charAt(index);
        if (char!= " ") {
          result = result + str.charAt(index)
        }        
    } console.log(`Reverse string is: ${result}`);
}
reverseString("Hard work always pays back")

console.log("========STEP1.1==========");

function reverseString(str){
    result = "";
        for (let index = str.length-1; index > 0 ; index--) {
            
            let char = str.charAt(index);
            if (char!= " ") {
              result = result + str.charAt(index)
            }        
        } console.log(`Reverse string is: ${result}`);
    }
    reverseString("Soon I will be Angular IT Champ")
    