console.log("========STEP1==========");
function loop(){

    let str = "I am very good IT Developer"
    vowelsCount = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index).toLowerCase();
        if (char== 'a' || char== 'e' || char== 'i' || char== 'o' || char== 'u' ) {
            vowelsCount = vowelsCount + 1;
        }
        
    }console.log(`Vowels count is: ${vowelsCount }`);
}
loop()

console.log("========STEP2==========");

function cube(){

    sum = 0
    for (let index = 1; index <=5; index++) {
        
        sum = sum + index*index*index + sum + index*index*index + sum + index*index*index + sum + index*index*index + sum + index*index*index
    }
    console.log(`Sum of cube of numbers from 1 to 5 is : ${sum}`);
}cube()

console.log("========STEP3==========");
 
function oddPositionedChars(word){
   
for (let index = 0; index < word.length; index++) {
let char = word.charAt(index);
if (index%2==1 && char != " ") {
    console.log(word.charAt(index));
}
}
    
}

oddPositionedChars("Hard work always pays back")
console.log("========STEP3.1==========");

function oddPositionedChars(word){
   
    for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    if (index%2==1 && char != " ") {
        console.log(word.charAt(index));
    }
    }
        
    }
    oddPositionedChars("Soon i wiil be UI IT Champ")