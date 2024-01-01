function stringHandsOn(){
    console.log("==========STEP1==========");

var string = "  Hey you are doing good, keep it up   ";
console.log(`Given string is=> ${string}`);

console.log("==========STEP2==========");

console.log(`Lenth of sring is=> ${string.length}`);

console.log("==========STEP3==========");

var string = "   Hey you are doing good, keep it up   ";
console.log(string.length);
var trimresult = string.trim();
console.log(`After trim length is=> ${trimresult.length}`);

console.log("==========STEP4==========");

console.log(`Total Spaces are=> ${string.length - trimresult.length}` );

console.log("==========STEP5==========");

var chatAtIndex0 = trimresult.charAt(0);
console.log("First character after trim is=>", chatAtIndex0);

var chatAtIndex33 = trimresult.charAt(33);

console.log("Last character after trim is=>", chatAtIndex33);



console.log("==========STEP6==========");

word = trimresult.split(' ');
console.log(`Total number of words are=> ${word.length}`);


console.log("==========STEP7==========");

var indexOfgood = string.indexOf("good");
console.log("Index of good is:", indexOfgood);

console.log("==========STEP8==========");

var result = trimresult.slice(22, 34);
console.log(`Slice is=> ${result}`);

console.log("==========STEP9==========");

var isAvailable = trimresult.endsWith("up");
console.log(`Is string ends with word "up"=> ${isAvailable } `);

console.log("==========STEP10==========");

var isAvailable = trimresult.startsWith("Hey");
console.log(`Is string starts with word "Hey"=> ${isAvailable } `);



}
stringHandsOn()