console.log("=======================Step1=====================");
function funName(){}
console.log("No argument No return value");
funName();


console.log("=======================Step2=====================");

function personalDetails(firstName, lastName, collegeName) {
  console.log("My first name is:", firstName);
  console.log("My last name is:", lastName);
  console.log("My college name is:", collegeName);
}
personalDetails("Chirag", "Mahajan", "MMCOE");

console.log("=======================Step3=====================");

function swapValues(n1, n2) {
  console.log("Before Swap:", "n1->", n1, "n2->", n2);

  var temp = n1;
  n1 = n2;
  n2 = temp;

  console.log("After Swap:", "n1->", n1, "n2->", n2);
}
swapValues(1000, 2000);
swapValues("virat", "anushka");

console.log("=======================Step4=====================");

function addThreeValues(n1, n2, n3) {
  console.log("Given numbers are:", n1, n2, n3);

  var result = n1 + n2 + n3;
  return result;
}
var result = addThreeValues(10.23, 600, 40);
console.log("Addition is:", result);

var result = addThreeValues("Hello", "Good", "Morning");
console.log("Addition is:", result);
