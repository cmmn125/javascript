console.log("==========STEP1==========");


var chirag = function (num) {
  if (num % 2 == 0) {
   console.log(`The given number ${num} is Even`); 
  } 
  else {console.log(`The given number ${num} is Odd`);
  }
};
chirag(45);
chirag(70);
chirag(67);
chirag(98);

console.log("==========STEP2==========");

var chirag = function(age){

    if (age>=18) {
        console.log(`This person age is ${age} and eligible for vote`);
        
    } else {
       console.log(`This person age is ${age} and not eligible for vote`); 
        
    }
}
chirag(18)
chirag(20)
chirag(17)
chirag(40)

console.log("==========STEP3==========");

 var chirag = function(word){
   var len = word.length;

   if (len>10) {
    console.log(`The word ${word} contains more than 10 character`);
    
   } else {
    `The word ${word}  not contains more than 10 character`
   }
 }
 chirag("JavaScript-ES6")

 console.log("==========STEP4==========");

 var chirag = function(word){
if (word.startsWith("Java")) {
    console.log(`Given word ${word} starts with Java`);
    
} else {
    console.log(`Given word ${word} not starts with Java`);

}

 }
 chirag("JavaScript Language")
